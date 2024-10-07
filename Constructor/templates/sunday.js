import { SundayCategory } from "../components/SundayCategory.js";
import { YouTube } from "../components/YouTube.js";
import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
  Timer,
} from "../components/index.js";

export async function Sunday({
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
  background,
  categories,
  timers
}) {

  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader("Free Delivery"),
        daysReturn: getHeader("365-Day Return"),
      },
      paragraph: {
        troubleViewing: getHeader("Trouble viewing"),
        troubleViewingHrefText: getHeader("Trouble viewing href text"),
        addBeliani: getHeader("Add Beliani to your"),
        whiteList: getHeader("Whitelist"),
        whitelistHref: getHeader("Whitelist href"),
      },
      topImage: {
        src: getHeader("Top image src"),
        href: getHeader("Top image href"),
      },
      categories: {
        firstCategory: {
          src: getHeader("Header Category 1 src"),
          href: getHeader("Header Category 1 href"),
        },
        secondCategory: {
          src: getHeader("Header Category 2 src"),
          href: getHeader("Header Category 2 href"),
        },
        thirdCategory: {
          src: getHeader("Header Category 3 src"),
          href: getHeader("Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#750000"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #FBF5F5; color: #000;" id="newsletter">
          <tbody>
              <tr>
                  <td align="center">
                    ${ImageWithLink({
                      href: links[0],
                      src: links[1],
                    })}
                  </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #FBF5F5;">
                    ${SundayCategory({
                      isCta: false,
                      href: links[2],
                      src: links[3],
                    })}
                </td>
              </tr>

              <tr>
                <td style="background-color: #F6E7E6; ">
                  ${Space({ className: "newsletterBottom20px" })}
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #F6E7E6; ">
                    <a href="${links[2]}">
                      <img alt="Timer gif" src="${
                        timers[country]
                      }?utm_source=newsletter&utm_medium=email&utm_campaign=${id}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
              </tr>
                            
              <tr>
                <td style="background-color: #F6E7E6; ">
                  ${Space({ className: "newsletterBottom20px" })}
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #FBF5F5; ">
                    <a href="${links[2]}">
                      <img alt="Timer image" src="https://upload.pictureserver.net/static/2024/uk240926_05.jpg?utm_source=newsletter&utm_medium=email&utm_campaign=${id}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
              </tr>
                            
              <tr>
                <td style="background-color: #FBF5F5; ">
                  ${Space({ className: "newsletterBottom35px" })}
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #FBF5F5;">
                    ${SundayCategory({
                      isCta: false,
                      cta: getPhrase("See more"),
                      href: links[4],
                      src: links[5],
                    })}
                </td>
              </tr>

              <tr>
                <td style="background-color: #FBF5F5; ">
                  ${Space({ className: "newsletterBottom35px" })}
                </td>
              </tr>
            
              <tr>
                <td align="center" style="background-color: #FBF5F5;">
                    ${SundayCategory({
                      isCta: false,
                      cta: getPhrase("See more"),
                      href: links[6],
                      src: links[7],
                    })}
                </td>
              </tr>

            
              <tr>
                <td style="background-color: #FBF5F5; ">
                  ${Space({ className: "newsletterBottom35px" })}
                </td>
              </tr>
            
              <tr>
                <td align="center" style="background-color: #FBF5F5;">
                    ${SundayCategory({
                      isCta: false,
                      cta: getPhrase("See more"),
                      href: links[8],
                      src: links[9],
                    })}
                </td>
              </tr>

              <tr>
                <td style="background-color: #FBF5F5; ">
                  ${Space({ className: "newsletterBottom80px" })}
                </td>
              </tr>

          <tbody>
      </table>
      ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["SK", "CHIT", "SE", "NO", "FI", "BEFR", "BENL"].includes(
              country
            ),
          },
          workBanner: {
            src: getFooter("Job src"),
            href: getFooter("Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getFooter("Title"),
            firstCategory: {
              src: getFooter("Category src 1"),
              href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
            exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
          },
          socials: {
            title: getFooter("Socials Title"),
            instagram: {
              src: getFooter("Instagram src"),
              href: getFooter("Instagram href"),
            },
            facebook: {
              src: getFooter("Facebook src"),
              href: getFooter("Facebook href"),
            },
            youtube: {
              src: getFooter("Youtube src"),
              href: getFooter("Youtube href"),
            },
            pinterest: {
              src: getFooter("Pinterest src"),
              href: getFooter("Pinterest href"),
            },
            Xsocial: {
              src: getFooter("X src"),
              href: getFooter("X href"),
            },
            Tiktok: {
              src: getFooter("Tiktok src"),
              href: getFooter("Tiktok href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter("Advantages src 1"),
              href: getFooter("Advantages href 1"),
            },
            secondAdvantage: {
              src: getFooter("Advantages src 2"),
              href: getFooter("Advantages href 2"),
            },
            thirdAdvantage: {
              src: getFooter("Advantages src 3"),
              href: getFooter("Advantages href 3"),
            },
            fourthAdvantage: {
              src: getFooter("Advantages src 4"),
              href: getFooter("Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getFooter("Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter("Company Details"),
            address: getFooter("Address"),
            mobileNumber: getFooter("Mobile number"),
            emailAddress: getFooter("Email address"),
            mailTo: getFooter("Mail to"),
            email: getFooter("Email"),
            commercialRegister: getFooter("Commercial register"),
            vat: getFooter("VAT"),
          },
        },
        { type }
      )}
    `;
}
