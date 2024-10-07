import {
  selectCampaignHandler,
  openCampaignHandler,
  handleSlugChange,
  openIssueHandler,
  handleShopChange,
  figmaCardHandler,
} from "./events.js";
import { SpinnerInit } from "../helpers/spinner/spinerOptions.js";
import { addParams } from "../helpers/getQueryLink.js";
import { TemplateHandlers } from "./handlers/handlers.js";
import { wrapTemplate } from "../helpers/wrapTemplate.js";
import { fetchTranslations } from "../api/fetchTranslations.js";
import { normalizeProducts } from "../utils/normalizeProducts.js";
import { isQuotaExceededError } from "../helpers/isQuotaExceededError.js";
import { computeValue } from "../helpers/computeValue.js";

const state = {
  country: "",
  loading: false,
  ids: {},
  translations: {},
  selectedCampaign: {},
  selectedTemplates: [],
  shop: null,
};
const root = document.querySelector("#app");

export function setState(key, value) {
  state[key] = value;

  if (key === "loading" && value === true) {
    root.innerHTML = "";
    SpinnerInit.spin(root);
  }

  if (key === "loading" && value === false) {
    SpinnerInit.stop(root);
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}

export function initApp({ campaigns, shops, config }) {
  const shops_select = document.querySelector("#shops");
  const languages_select = document.querySelector("#languages");
  const new_products = document.querySelector("#new_products");
  const selectCampaigns = document.querySelector("#campaigns");
  const selectTemplates = document.querySelector("#templates");
  const copyTemplate = document.querySelector(".copyTemplate");
  const openCampaign = document.querySelector(".openCampaign");
  const openIssue = document.querySelector(".openIssue");
  const figmaCard = document.querySelector(".figmaCard");

  setState("config", config);
  selectCampaigns.append(...initCampaigns(campaigns, config));
  setEvents();

  async function render() {
    if (!CANI) return;
    if (!getState("country")) return;
    const templateToRender = getState("template");

    if (!templateToRender) {
      Toastify({
        text: "Select template.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    if (templateToRender.tableQueries.length > 0) {
      try {
        setState("loading", true);
        const translationsResult = await fetchTranslations({
          tableQueries: templateToRender.tableQueries,
        });
        const queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }
        setState("loading", false);
        setState("queries", queries);
      } catch (error) {
        setState("loading", false);
        console.log(error);

        Toastify({
          text: error,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
    }
    // addParams check the link on "query" key and execute with origin.
    const links = addParams({
      links: templateToRender.links,
    });

    const country = getState("country");
    const ids = getState("ids");
    const LSProducts = localStorage.getItem("products");
    const parsedProducts = LSProducts ? JSON.parse(LSProducts) : [];
    const campaignProducts = parsedProducts.find(
      (item) => item.campaign_id === getState("selectedCampaign").startId
    );
    const handlers = new TemplateHandlers({
      templates: getState("queries").templates,
      header: getState("queries").header,
      footer: getState("queries").footer,
      categoriesLinks: getState("queries").categoriesLinks,
      categoriesTitles: getState("queries").categoriesTitles,
      products: campaignProducts?.products,
    });

    try {
      const html = await templateToRender.template({
        ...state,
        ...templateToRender,
        background: templateToRender.background || "#ffffff",
        country,
        id: ids[country],
        categories: templateToRender.categories.map((item) =>
          Array.isArray(item)
            ? item.map((item) => computeValue({ ...item }))
            : computeValue({ ...item })
        ),
        type: templateToRender.type,
        getProductById: handlers.getProductById,
        getCategoryTitle: handlers.getCategoryTitle,
        getCategoryLink: handlers.getCategoryLink,
        getFooter: handlers.getFooter,
        getHeader: handlers.getHeader,
        getPhrase: handlers.getPhrase,
        links: links,
      });

      const withStylesOrNo =
        "css" in templateToRender
          ? `<style>${templateToRender.css}</style>` + html
          : html;

      const wrappedHtml = templateToRender.wrapper
        ? wrapTemplate(templateToRender.wrapper, {
            style: templateToRender.css ?? "",
            html: html,
          })
        : withStylesOrNo;
      setState("html", wrappedHtml);

      if (withStylesOrNo.includes("undefined")) {
        if (confirm("Do you want to render template with undefined value?")) {
          return (root.innerHTML = withStylesOrNo);
        } else {
          Toastify({
            text: "Error rendering. HTML code has undefined value.",
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
        }
      } else {
        root.innerHTML = withStylesOrNo;
      }
    } catch (error) {
      console.log(error);

      Toastify({
        text: "Please check console. " + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  }

  function setEvents() {
    new_products.addEventListener("click", () => {
      const products = prompt("Provide products");
      if (!products) {
        return Toastify({
          text: "Input incorrect",
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
      let newProducts;
      try {
        newProducts = JSON.parse(products);
      } catch (error) {
        console.log(error);
        Toastify({
          text: "NEW Products parse error: " + error.message,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }

      const selectedCampaign = getState("selectedCampaign");
      try {
        const prev = localStorage.getItem("products");
        const prevProducts = prev ? JSON.parse(prev) : [];

        const isProductsSetted = prevProducts.find(
          (item) => item.campaign_id === selectedCampaign.startId
        );

        const normalizedProducts = normalizeProducts(newProducts);
        // If products already exists for selected campaign
        if (isProductsSetted) {
          const updatedProducts = prevProducts.map((item) => {
            if (item.campaign_id === selectedCampaign.startId) {
              return {
                ...item,
                products: normalizedProducts,
              };
            }
            return item;
          });
          localStorage.setItem(
            "products",
            JSON.stringify([...updatedProducts])
          );
        } else {
          try {
            localStorage.setItem(
              "products",
              JSON.stringify([
                ...prevProducts,
                {
                  campaign_id: selectedCampaign.startId,
                  products: normalizedProducts,
                },
              ])
            );
          } catch (error) {
            const quotaExceededError = isQuotaExceededError(error);
            if (quotaExceededError) {
              const ids = prevProducts.map((item) => item.campaign_id);
              const deleteCampaignId = prompt(
                "Memory exceeded, please enter campaign_id to delete: " +
                  ids.join(",")
              );
              if (!ids.includes(deleteCampaignId)) {
                Toastify({
                  text: "Co robisz?!?",
                  escapeMarkup: false,
                  duration: 3000,
                }).showToast();
                return;
              }
              const prevCampaigns = prevProducts.filter(
                (item) => item.campaign_id !== deleteCampaignId
              );
              localStorage.setItem(
                "products",
                JSON.stringify([
                  ...prevCampaigns,
                  {
                    campaign_id: selectedCampaign.startId,
                    products: normalizedProducts,
                  },
                ])
              );
              Toastify({
                text: "Memory exceeded error: " + error.message,
                escapeMarkup: false,
                duration: 3000,
              }).showToast();
              return;
            }
          }
          throw error;
        }

        Toastify({
          text: "Products successfully saved.",
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      } catch (error) {
        Toastify({
          text: "Products error: " + error.message,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    });
    openCampaign.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    openIssue.addEventListener("click", (e) => {
      if (!state.selectedCampaign.issueCardId) {
        Toastify({
          text: `Select campaign.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      openIssueHandler(state.selectedCampaign.issueCardId);
    });
    figmaCard.addEventListener("click", (e) => {
      if (!state.selectedCampaign.figmaUrl) {
        Toastify({
          text: `Figma url not found.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      figmaCardHandler(state.selectedCampaign.figmaUrl);
    });

    const options = [];
    for (const shop of shops) {
      const option = document.createElement("option");
      option.value = shop.shopId;
      option.textContent = shop.seller;
      options.push(option);
    }
    const option = document.createElement("option");
    option.value = "default";
    option.textContent = "Select shop";
    option.defaultSelected = true;
    options.push(option);
    shops_select.append(...options);

    shops_select.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      handleShopChange(ev, shops);
      const shop = getState("shop");
      languages_select.innerHTML = "";
      const lang_options = [];
      for (const { language } of shop.languages) {
        const option = document.createElement("option");
        option.value = language.slug + "-" + language.name;
        option.textContent = language.name;
        option.style.textTransform = "capitalize";
        lang_options.push(option);
      }
      const option = document.createElement("option");
      option.value = "default";
      option.textContent = "Select language";
      option.defaultSelected = true;
      lang_options.push(option);
      languages_select.append(...lang_options);
      languages_select.style.display = "block";
    });

    languages_select.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      handleSlugChange(ev);
      render();
    });

    copyTemplate.addEventListener("click", () => {
      const html = getState("html");
      if (!html) {
        Toastify({
          text: `Render HTML.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      navigator.clipboard.writeText(html);
    });

    selectCampaigns.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      const { selectedCampaign, templates } = selectCampaignHandler(
        ev,
        campaigns
      );

      root.innerHTML = "";
      selectTemplates.innerHTML =
        '<option value="default">Select template</option>';
      selectTemplates.append(...renderAvailableTemplates(templates));

      setState("selectedTemplates", templates);
      setState("selectedCampaign", selectedCampaign);
      setState("optimizeImg", selectedCampaign.optimizeImg || false);
    });

    selectTemplates.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }

      setSelectedTemplate(ev);
      render();
    });
  }

  function setSelectedTemplate(ev) {
    const selectedTemplates = getState("selectedTemplates");
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + "_" + template.name === ev.target.value
    );
    if (!selectedTemplate) {
      Toastify({
        text: `Template ${ev.target.value} not found.`,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
    new_products.style.display = "block";
    if (selectedTemplate.type === "banner") {
      openCampaign.style.display = "none";
    } else {
      openCampaign.style.display = "block";
    }
    setState("template", selectedTemplate);
  }
}
