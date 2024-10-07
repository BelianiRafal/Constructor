export async function mobile({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  country,
  type,
}) {
  // styles is CORRECT.
  // everything will be looks fine on beliani page. (with additional styles from beliani)
  return `
  <div class="xyzGridContainer" style="background-color:#FAF1E2;">
      <div style="padding: 10px 5px 5px 0px;">
          <p class="xyHeader1" style="margin: 0 0 5px 0!important;"><span data-order-text="0">${getPhrase(
            "Up to"
          )}</br>${getPhrase("All tables")}</span></p>
          <p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 5px 0!important;"><span data-order-text="2">${getPhrase(
            "Until"
          )}</span></p>
          <a href="${getCategoryLink(
            "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
            { origin: false }
          )}"><p class="xyCTA" style="margin: 0!important;"><span data-order-text="3">${getPhrase(
    "Cta"
  )}</span></p></a>
      </div>
      <div>
          <a href="${getCategoryLink(
            "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/",
            { origin: false }
          )}"><video playsinline autoplay loop muted disableremoteplayback="true" style="max-width: 100%; vertical-align: middle;" >
              <source
                  src="https://www.pictureserver.net/pic_storage/pic/8c/5e/swedish_src_mobilebanner_picid_10973_image.mp4?ver=1"
                  type="video/mp4">
          </video></a>
      </div>
  </div>
  
      `;
}
