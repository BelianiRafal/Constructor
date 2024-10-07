import { newsletter_FGG } from "./templates/newsletter FGG.js";
import { landing_FGG } from "./templates/landing FGG.js";
import { CategoriesRowsOfferPart } from "./templates/CategoriesRowsOfferPart.js";
import { CategoriesGridOffertPart } from "./templates/CategoriesGridOffertPart.js";
import { CategoriesGrid } from "./templates/CategoriesGrid.js";
import { desktop } from "./templates/desktop CGB.js";
import { mobile } from "./templates/mobile CGB.js";
import { initApp } from "./main/initApp.js";
import { mondayOfferFreeebiesLines } from "./templates/mondayOfferFreeebiesLines.js";
import { mondayOfferFreeebies } from "./templates/mondayOfferFreeebies.js";
import { mondayCategories } from "./templates/mondayCategories.js";
import { Sunday } from "./templates/sunday.js";
import { CategoriesRows } from "./templates/CategoriesRows.js";
import { CategoriesRowsLinePriceTitle } from "./templates/CategoriesRowsLinePriceTitle.js";
import { CategoriesRowsLine } from "./templates/CategoriesRowsLine.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { Campaign } from "./entities/Campaign.js";

initApp({
  campaigns: [
    new Campaign({
      startId: "21522",
      issueCardId: "283833",
      name: "Fathers GG",
      date: "2024.10.11",
      alarm: {
        isActive: true,
        description: "Check Fathers day campaign.",
      },
      isArchive: false,
      optimizeImg: false,
      templates: [
        {
          name: "FGG - Newsletter",
          type: types.NEWSLETTER,
          css: `.title-advantages {
            text-align: center;
            font-size: 11px;
            color: #8c8278;
            padding-bottom: 10px;
            padding-top: 10px;
            margin: 0;
          }
          
          .title-advantages-item {
            margin-left: 4px;
          }
          
          .newsletterRecommendationHeader {
            text-align: center;
            font-size: 11px;
            color: #8c8278;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          
          /* NEWSLETTER START */
          
          .newsletterFreebieContainer {
            padding-left: 10px;
          }
          
          .newsletterBottom80px {
            padding-bottom: 80px;
          }
          
          .newsletterContainer {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .newsletterCta {
            font-size: 20px;
            line-height: 1.25;
          }
          
          .newsletterBottom20px {
            padding-bottom: 20px;
          }
          
          .newsletterBottom35px {
            padding-bottom: 35px;
          }
          
          .newsletterParagraph {
            font-size: 18px;
            line-height: 1.25;
          }
          
          .newsletterTitleNew {
            font-size: 22px;
            font-weight: 600;
            line-height: 1.25;
          }
          
          .newsletterTitle {
            font-size: 30px;
            line-height: 1.25;
          }
          
          .newsletterProductTitle {
            font-size: 20px;
            line-height: 1.25;
          }
          
          .newsletterProductLowPrice {
            font-size: 18px;
            line-height: 1.25;
            font-weight: 600;
          }
          
          .newsletterProductHightPrice {
            font-size: 14px;
            
            line-height: 1.25;
            text-decoration: line-through;
          }
          
          .newsletterRight10px {
            padding-right: 10px;
          }
          
          .newsletterLeft10px {
            padding-left: 10px;
          }
          
          /* NEWSLETTER END */
          
          .newsletterFooter {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .newsletterConditions {
            color: black;
            font-size: 8px;
          }
          
          .newsletterFooterCompanyDetails {
            vertical-align: middle;
            padding-top: 20px;
            padding-right: 0px;
            padding-bottom: 20px;
            font-size: 11px;
            color: #000000;
            background: #ececec;
            width: 100%;
          }
          
          .newsletterFooterTitle {
            text-align: left;
            color: #000000;
            font-size: 20px;
          }
          
          .newsletterProductTitleFreebie {
            text-align: center;
            color: #000000;
            font-size: 20px;
          }
          
          .newsletterFooterCategoryLEFT {
            padding-bottom: 20px !important;
            padding-right: 10px !important;
          }
          
          .newsletterFooterCategoryRIGHT {
            padding-bottom: 20px !important;
            padding-left: 10px !important;
          }
          
          .newsletterFooterCategoryLEFTBottom {
            padding-right: 10px !important;
          }
          
          .newsletterFooterCategoryRIGHTBottom {
            padding-left: 10px !important;
          }
          
          .newsletterSocialIcon {
            padding-left: 25px !important;
          }
          
          .newsletterTopBottomContainer {
            padding-top: 35px !important;
            padding-bottom: 35px !important;
          }
          
          .newsletterKlarnaBannerContainer {
            padding-top: 35px !important;
            padding-bottom: 35px !important;
          }
          

          
          @media screen and (max-width: 768px) {
            .newsletterFooterCategoryLEFTBottom {
              padding-right: 5px !important;
            }
          
            .newsletterFooterCategoryRIGHTBottom {
              padding-left: 5px !important;
            }
          
            .newsletterFooterCategoryLEFT {
              padding-bottom: 10px !important;
              padding-right: 5px !important;
            }
          
            .newsletterFooterCategoryRIGHT {
              padding-bottom: 10px !important;
              padding-left: 5px !important;
            }
          
            .newsletterSocialIcon {
              padding-left: 13px !important;
            }
          
            .newsletterTopBottomContainer {
              padding-top: 20px !important;
              padding-bottom: 20px !important;
            }
          
            .newsletterFooterTitle {
              font-size: 18px;
            }
          
            .newsletterProductTitleFreebie {
              font-size: 18px;
            }
          
            .newsletterProductTitle {
              font-size: 18px;
            }
          
            .newsletterProductLowPrice {
              font-size: 16px;
            }
          
            .newsletterProductHightPrice {
              display: block;
            }
          
            .newsletterProductTitleContainer {
              padding-top: 10px;
            }
          
            .newsletterTitle {
              font-size: 25px;
            }
          
            .newsletterTitleNew {
              font-size: 18px;
            }
          
            .newsletterContainer {
              padding-left: 10px;
              padding-right: 10px;
            }
          
            .newsletterFreebieContainer {
              padding-left: 10px;
              padding-right: 0px !important;
            }
          
            .newsletterBottom35px {
              padding-bottom: 20px;
            }
          
            .newsletterParagraph {
              font-size: 16px;
            }
          
            .newsletterLeft10px {
              padding-left: 5px;
            }
          
            .newsletterRight10px {
              padding-right: 5px;
            }
          
            .newsletterBottom20px {
              padding-bottom: 10px;
            }
          
            .newsletterBottom80px {
              padding-bottom: 50px;
            }
          }
          
          @media screen and (max-width: 570px) {
            .newsletterProductTitleFreebie {
              font-size: 16px;
            }
          }
          
          @media screen and (max-width: 460px) {
            .newsletterProductTitleFreebie {
              font-size: 14px;
            }
          }
          
          @media screen and (max-width: 370px) {
            .newsletterProductTitleFreebie {
              font-size: 12px;
            }
          }
          `,
          template: newsletter_FGG,
          wrapper: types.WRAPPER,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-11fd",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/240517_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-11fd",
              },
            },
            {
              value: "https://upload.pictureserver.net/static/240223gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241002b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "13",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "14:15",
              name: "voucher",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "16",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "17:30",
              name: "categoryTitle",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "33",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "35:36",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "FGG - Landing",
          type: types.LANDINGPAGE,
          template: landing_FGG,
          wrapper: null,
          css: `#newsletter .newsletterCta,#newsletter .newsletterParagraph,#newsletter .newsletterProductHightPrice,#newsletter .newsletterProductLowPrice,#newsletter .newsletterProductTitle,#newsletter .newsletterTitle,#newsletter .newsletterTitleNew{line-height:1.25;font-family:"Open Sans",sans-serif}#newsletter .title-advantages{text-align:center;font-size:11px;color:#8c8278;padding-bottom:10px;padding-top:10px;margin:0}#newsletter .newsletterTitleNew{font-size:22px;font-weight:600}table{table-collapse:unset}#newsletter .title-advantages-item{margin-left:4px}#newsletter .newsletterRecommendationHeader{text-align:center;font-size:11px;color:#8c8278;margin-bottom:10px;margin-top:10px}#newsletter .newsletterFreebieContainer,#newsletter .newsletterLeft10px{padding-left:10px}#newsletter .newsletterBottom80px{padding-bottom:80px}#newsletter .newsletterContainer,#newsletter.newsletterContainer{padding-left:20px;padding-right:20px}#newsletter .newsletterCta{font-size:20px}#newsletter .newsletterBottom20px{padding-bottom:20px}#newsletter .newsletterBottom35px{padding-bottom:35px}#newsletter .newsletterParagraph{font-size:18px}#newsletter .newsletterTitle{font-size:30px}#newsletter .newsletterProductTitle{font-size:20px}#newsletter .newsletterProductLowPrice{font-size:18px;font-weight:600}#newsletter .newsletterProductHightPrice{font-size:14px;text-decoration:line-through}#newsletter .newsletterRight10px{padding-right:10px}#newsletter .newsletterFooter{padding-left:20px!important;padding-right:20px!important}#newsletter .newsletterConditions{color:#000;font-family:"Open Sans",sans-serif;font-size:8px}#newsletter .newsletterFooterCompanyDetails{vertical-align:middle;padding-top:20px;padding-right:0;padding-bottom:20px;font-size:11px;font-family:"Open Sans",sans-serif!important;color:#000;background:#ececec;width:100%}#newsletter .newsletterFooterTitle,#newsletter .newsletterProductTitleFreebie,#newsletter .newsletterFooterTitle{color:#000;font-family:"Open Sans",sans-serif;font-size:20px}#newsletter .newsletterFooterTitle{text-align:left}#newsletter .newsletterProductTitleFreebie{text-align:center}#newsletter .newsletterFooterCategoryLEFT{padding-bottom:20px!important;padding-right:10px!important}#newsletter .newsletterFooterCategoryRIGHT{padding-bottom:20px!important;padding-left:10px!important}#newsletter .newsletterFooterCategoryLEFTBottom{padding-right:10px!important}#newsletter .newsletterFooterCategoryRIGHTBottom{padding-left:10px!important}#newsletter .newsletterSocialIcon{padding-left:25px!important}#newsletter .newsletterKlarnaBannerContainer,#newsletter .newsletterTopBottomContainer{padding-top:35px!important;padding-bottom:35px!important}@media screen and (max-width:768px){#newsletter .newsletterFooterCategoryLEFTBottom{padding-right:5px!important}#newsletter .newsletterFooterCategoryRIGHTBottom{padding-left:5px!important}#newsletter .newsletterFooterCategoryLEFT{padding-bottom:10px!important;padding-right:5px!important}#newsletter .newsletterFooterCategoryRIGHT{padding-bottom:10px!important;padding-left:5px!important}#newsletter .newsletterSocialIcon{padding-left:13px!important}#newsletter .newsletterTopBottomContainer{padding-top:20px!important;padding-bottom:20px!important}#newsletter .newsletterFooterTitle,#newsletter .newsletterProductTitle,#newsletter .newsletterProductTitleFreebie,#newsletter .newsletterTitleNew{font-size:18px}#newsletter .newsletterParagraph,#newsletter .newsletterProductLowPrice{font-size:16px}#newsletter .newsletterProductHightPrice{display:block}#newsletter .newsletterProductTitleContainer{padding-top:10px}#newsletter .newsletterTitle{font-size:25px}#newsletter .newsletterContainer,#newsletter.newsletterContainer{padding-left:10px;padding-right:10px}#newsletter .newsletterFreebieContainer{padding-left:10px;padding-right:0!important}#newsletter .newsletterBottom35px{padding-bottom:20px}#newsletter .newsletterLeft10px{padding-left:5px}#newsletter .newsletterRight10px{padding-right:5px}#newsletter .newsletterBottom20px{padding-bottom:10px}#newsletter .newsletterBottom80px{padding-bottom:50px}}@media screen and (max-width:570px){#newsletter .newsletterProductTitleFreebie{font-size:16px}}@media screen and (max-width:460px){#newsletter .newsletterProductTitleFreebie{font-size:14px}}@media screen and (max-width:370px){#newsletter .newsletterProductTitleFreebie{font-size:12px}}`,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-11fd",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/240517_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-11fd",
              },
            },
            {
              value: "https://upload.pictureserver.net/static/240223gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241002b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "13",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "14:15",
              name: "voucher",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "16",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "17:30",
              name: "categoryTitle",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "33",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Father's Day Gift Guide!",
              tableRange: "35:36",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      name: "CGB",
      date: "2024.05.12",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "CGB - Desktop",
          type: types.BANNER,
          template: desktop,
          wrapper: null,
          css: types.CSS.CGB.DESKTOP,
          links: [],
          tableQueries: [
            {
              tableId: "1u96Mv2nodKgtRQ6QaDA6vSCdoJWfb6MCKWrHcMDjiuc",
              tableName: "Arkusz8!",
              tableRange: "A1:E20?majorDimension=COLUMNS",
              name: "cgb",
              tableColumns: false,
            },
          ],
        },
        {
          name: "CGB - Mobile",
          type: types.BANNER,
          template: mobile,
          wrapper: null,
          css: types.CSS.CGB.MOBILE,
          links: [],
          tableQueries: [
            {
              tableId: "1u96Mv2nodKgtRQ6QaDA6vSCdoJWfb6MCKWrHcMDjiuc",
              tableName: "Arkusz8!",
              tableRange: "A1:E20?majorDimension=COLUMNS",
              name: "cgb",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "24193",
      name: "Dining room",
      date: "2024.06.17",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesGridOffertPart,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240524_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240617gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-10",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240610b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240607b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "33",
              name: "getCode",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "24:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "30",
              name: "getCodes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "31",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "59",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "61:62",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_03.jpg",
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_04.jpg",
                },
                href: "https://www.beliani.ch/chairs/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_06.jpg",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_07.jpg",
                },
                href: "https://www.beliani.ch/stools/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_08.jpg",
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_09.jpg",
                },
                href: "https://www.beliani.ch/accessories-decor/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_10.jpg",
                },
                href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_11.jpg",
                },
                href: "https://www.beliani.ch/lighting/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_12.jpg",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_13.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
            ],
          ],
        },
        {
          name: "Birthday - Landing",
          type: types.LANDINGPAGE,
          template: CategoriesGridOffertPart,
          css: types.CSS.LP,
          categories: [
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_04.jpg",
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_05.jpg",
                },
                href: "https://www.beliani.ch/armchairs/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_06.jpg",
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_07.jpg",
                },
                href: "https://www.beliani.ch/storage/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_08.jpg",
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_09.jpg",
                },
                href: "https://www.beliani.ch/home-accessories/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_10.jpg",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_11.jpg",
                },
                href: "https://www.beliani.ch/lighting/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_12.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240524_13.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
            ],
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240524_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240617gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-10",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240610b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240607b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "33",
              name: "getCode",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "24:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "30",
              name: "getCodes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "31",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "59",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 17.06.24 - Dining Room!",
              tableRange: "61:62",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_03.jpg",
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_04.jpg",
                },
                href: "https://www.beliani.ch/chairs/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_06.jpg",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_07.jpg",
                },
                href: "https://www.beliani.ch/stools/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_08.jpg",
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_09.jpg",
                },
                href: "https://www.beliani.ch/accessories-decor/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_10.jpg",
                },
                href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_11.jpg",
                },
                href: "https://www.beliani.ch/lighting/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_12.jpg",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240617_13.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
            ],
          ],
        },
      ],
    }),
    new Campaign({
      startId: "24962",
      name: "Monday",
      date: "2024.07.08",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayOfferFreeebiesLines,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          background: "#fd9000",
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-08",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240708_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-08",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240708gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-04",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240704b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240703b.png",
              },
            },
          ],
          offerPart: {
            type: "code",
          },
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "27:28",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            {
              name: "Lounge sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category1.png",
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/?Material=Wood",
              products: [
                {
                  id: "207163",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category11.png",
                },
                {
                  id: "506172",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category12.png",
                },
                {
                  id: "128772",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category13.png",
                },
                {
                  id: "413709",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category14.png",
                },
              ],
            },
            {
              name: "Dining sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category2.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?Material=Wood",
              products: [
                {
                  id: "355462",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category21.png",
                },
                {
                  id: "31217",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category22.png",
                },
                {
                  id: "399750",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category23.png",
                },
                {
                  id: "71123",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category24.png",
                },
              ],
            },
            {
              name: "Balcony sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category3.png",
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/?Material=Wood",
              products: [
                {
                  id: "294064",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category31.png",
                },
                {
                  id: "62184",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category32.png",
                },
                {
                  id: "31804",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category33.png",
                },
                {
                  id: "293980",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category34.png",
                },
              ],
            },
            {
              name: "Benches",
              src: "https://upload.pictureserver.net/static/2024/20240708Category4.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/?Material=Wood",
              products: [
                {
                  id: "185583",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category41.png",
                },
                {
                  id: "76238",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category42.png",
                },
                {
                  id: "421248",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category43.png",
                },
                {
                  id: "31213",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category44.png",
                },
              ],
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "386853",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie1.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "386767",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie2.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "386835",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie3.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 2,
              },
              products: [
                {
                  id: "386749",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie4.png",
                  style: "padding-right: 12px; padding-left: 60px;",
                },
                {
                  id: "386818",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie5.png",
                  style: "padding-left: 12px; padding-right: 60px;",
                },
              ],
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayOfferFreeebiesLines,
          background: "#fd9000",
          css: types.CSS.LP,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-08",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240708_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-08",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240708gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-04",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240704b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240703b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "23",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 08.07.24 -Free garden lounger!",
              tableRange: "27:28",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            {
              name: "Lounge sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category1.png",
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/?Material=Wood",
              products: [
                {
                  id: "207163",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category11.png",
                },
                {
                  id: "506172",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category12.png",
                },
                {
                  id: "128772",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category13.png",
                },
                {
                  id: "413709",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category14.png",
                },
              ],
            },
            {
              name: "Dining sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category2.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?Material=Wood",
              products: [
                {
                  id: "355462",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category21.png",
                },
                {
                  id: "31217",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category22.png",
                },
                {
                  id: "399750",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category23.png",
                },
                {
                  id: "71123",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category24.png",
                },
              ],
            },
            {
              name: "Balcony sets",
              src: "https://upload.pictureserver.net/static/2024/20240708Category3.png",
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/?Material=Wood",
              products: [
                {
                  id: "294064",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category31.png",
                },
                {
                  id: "62184",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category32.png",
                },
                {
                  id: "31804",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category33.png",
                },
                {
                  id: "293980",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category34.png",
                },
              ],
            },
            {
              name: "Benches",
              src: "https://upload.pictureserver.net/static/2024/20240708Category4.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/?Material=Wood",
              products: [
                {
                  id: "185583",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category41.png",
                },
                {
                  id: "76238",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category42.png",
                },
                {
                  id: "421248",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category43.png",
                },
                {
                  id: "31213",
                  src: "https://upload.pictureserver.net/static/2024/20240708Category44.png",
                },
              ],
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "386853",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie1.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "386767",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie2.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "386835",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie3.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 2,
              },
              products: [
                {
                  id: "386749",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie4.png",
                  style: "padding-right: 12px; padding-left: 60px;",
                },
                {
                  id: "386818",
                  src: "https://upload.pictureserver.net/static/2024/20240708Freebie5.png",
                  style: "padding-left: 12px; padding-right: 60px;",
                },
              ],
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "24674",
      name: "August peak",
      date: "2024.08.05",
      issueCardId: "287159",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesGrid,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-05",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240805gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-26",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240726b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-25",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240725b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "05.08.24 - August Peak Start!",
              tableRange: "15",
              name: "intro",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_02.jpg",
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_03.jpg",
                },
                href: "https://www.beliani.ch/sofas/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_04.jpg",
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_05.jpg",
                },
                href: "https://www.beliani.ch/armchairs/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_06.jpg",
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_07.jpg",
                },
                href: "https://www.beliani.ch/tables/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_08.jpg",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_09.jpg",
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_10.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_11.jpg",
                },
                href: "https://www.beliani.ch/lighting/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_12.jpg",
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_13.jpg",
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_14.jpg",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_15.jpg",
                },
                href: "https://www.beliani.ch/home-accessories/",
              },
            ],
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesGrid,
          css: types.CSS.LP,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-05",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240805gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-26",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240726b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-07-25",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240725b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "05.08.24 - August Peak Start!",
              tableRange: "15",
              name: "intro",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          categories: [
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_02.jpg",
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_03.jpg",
                },
                href: "https://www.beliani.ch/sofas/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_04.jpg",
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_05.jpg",
                },
                href: "https://www.beliani.ch/armchairs/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_06.jpg",
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_07.jpg",
                },
                href: "https://www.beliani.ch/tables/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_08.jpg",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_09.jpg",
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_10.jpg",
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_11.jpg",
                },
                href: "https://www.beliani.ch/lighting/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_12.jpg",
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_13.jpg",
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
            ],
            [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_14.jpg",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2024/20240805_15.jpg",
                },
                href: "https://www.beliani.ch/home-accessories/",
              },
            ],
          ],
        },
      ],
    }),
    new Campaign({
      startId: "24898",
      name: "August peak second",
      date: "2024.08.12",
      issueCardId: "287159",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesRows,
          background: "#fd9000",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          categories: [
            {
              name: "Outdoor",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_03.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              name: "Sofas",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_06.jpg",
              },
              href: "https://www.beliani.ch/sofas/",
            },
            {
              name: "Beds",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_08.jpg",
              },
              href: "https://www.beliani.ch/beds/",
            },
            {
              name: "Armchairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_10.jpg",
              },
              href: "https://www.beliani.ch/armchairs/",
            },
            {
              name: "Chairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_12.jpg",
              },
              href: "https://www.beliani.ch/chairs/",
            },
            {
              name: "Tables",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_14.jpg",
              },
              href: "https://www.beliani.ch/tables/",
            },
            {
              name: "Storage",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_16.jpg",
              },
              href: "https://www.beliani.ch/storage/",
            },
            {
              name: "Textiles",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_18.jpg",
              },
              href: "https://www.beliani.ch/textiles/",
            },
            {
              name: "Lighting",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_20.jpg",
              },
              href: "https://www.beliani.ch/lighting/",
            },
            {
              name: "Bathtubs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_22.jpg",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
            },
            {
              name: "Desks",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_24.jpg",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
            },
            {
              name: "Rugs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_26.jpg",
              },
              href: "https://www.beliani.ch/rugs/",
            },
            {
              name: "Accessories",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_28.jpg",
              },
              href: "https://www.beliani.ch/home-accessories/",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-12",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240812gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-05",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240805b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240802b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "14",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "17",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "19:20",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesRows,
          css: types.CSS.LP,
          background: "#fd9000",
          categories: [
            {
              name: "Outdoor",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_03.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              name: "Sofas",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_06.jpg",
              },
              href: "https://www.beliani.ch/sofas/",
            },
            {
              name: "Beds",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_08.jpg",
              },
              href: "https://www.beliani.ch/beds/",
            },
            {
              name: "Armchairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_10.jpg",
              },
              href: "https://www.beliani.ch/armchairs/",
            },
            {
              name: "Chairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_12.jpg",
              },
              href: "https://www.beliani.ch/chairs/",
            },
            {
              name: "Tables",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_14.jpg",
              },
              href: "https://www.beliani.ch/tables/",
            },
            {
              name: "Storage",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_16.jpg",
              },
              href: "https://www.beliani.ch/storage/",
            },
            {
              name: "Textiles",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_18.jpg",
              },
              href: "https://www.beliani.ch/textiles/",
            },
            {
              name: "Lighting",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_20.jpg",
              },
              href: "https://www.beliani.ch/lighting/",
            },
            {
              name: "Bathtubs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_22.jpg",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
            },
            {
              name: "Desks",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_24.jpg",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
            },
            {
              name: "Rugs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_26.jpg",
              },
              href: "https://www.beliani.ch/rugs/",
            },
            {
              name: "Accessories",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240812_28.jpg",
              },
              href: "https://www.beliani.ch/home-accessories/",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-12",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240812gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-05",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240805b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240802b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "14",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "17",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.08.24 - August Peak Second Monday!",
              tableRange: "19:20",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26058",
      name: "Newsletter Cushion pyramid",
      date: "2024.08.26",
      issueCardId: "299656",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayOfferFreeebiesLines,
          background: "#e8e8e8",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          categories: [
            {
              name: "Boho",
              src: "https://upload.pictureserver.net/static/2024/20240826Category1.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Boho",
                CHIT: "https://www.beliani.ch/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Boho",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Boho",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Boho",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Boho&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Boho",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Boho&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Boho",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Boho&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Boho&sort=default",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Boho",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Boho&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Boho&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Boho&sort=default",
              },
              products: [
                {
                  id: "306283",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category11.png",
                },
                {
                  id: "354635",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category12.png",
                },
                {
                  id: "331882",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category13.png",
                },
                {
                  id: "136600",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category14.png",
                },
              ],
            },
            {
              name: "Traditional",
              src: "https://upload.pictureserver.net/static/2024/20240826Category2.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Boho",
                CHIT: "https://www.beliani.ch/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Boho",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Boho",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Boho",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Boho&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Boho",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Boho&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Boho",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Boho&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Boho&sort=default",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Boho",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Boho&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Boho&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Boho&sort=default",
              },
              products: [
                {
                  id: "164877",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category21.png",
                },
                {
                  id: "114242",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category22.png",
                },
                {
                  id: "135510",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category23.png",
                },
                {
                  id: "63322",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category24.png",
                },
              ],
            },
            {
              name: "Industrial",
              src: "https://upload.pictureserver.net/static/2024/20240826Category3.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Boho",
                CHIT: "https://www.beliani.ch/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Boho",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Boho",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Boho",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Boho&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Boho",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Boho&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Boho",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Boho&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Boho&sort=default",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Boho",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Boho&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Boho&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Boho&sort=default",
              },
              products: [
                {
                  id: "189717",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category31.png",
                },
                {
                  id: "374306",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category32.png",
                },
                {
                  id: "365707",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category33.png",
                },
                {
                  id: "180714",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category34.png",
                },
              ],
            },
            {
              name: "Retro",
              src: "https://upload.pictureserver.net/static/2024/20240826Category4.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Boho",
                CHIT: "https://www.beliani.ch/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Boho",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Boho",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Boho",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Boho&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Boho",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Boho&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Boho",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Boho&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Boho&sort=default",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Boho",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Boho&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Boho&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Boho&sort=default",
              },
              products: [
                {
                  id: "454066",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category41.png",
                },
                {
                  id: "328733",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category42.png",
                },
                {
                  id: "357566",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category43.png",
                },
                {
                  id: "354707",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-26",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240826_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-26",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240826TopImage.png",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-16",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240816b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-15",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240815b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "20:23",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "30:33",
              name: "categories",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "41:43",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "290154",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie1.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "291415",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie2.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "257972",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie3.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "256863",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie4.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "257987",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie5.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
                {
                  id: "188952",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie6.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "307932",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie7.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "256767",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie8.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
                {
                  id: "291211",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie9.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
              ],
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayOfferFreeebiesLines,
          css: types.CSS.LP,
          background: "#e8e8e8",
          categories: [
            {
              name: "Boho",
              src: "https://upload.pictureserver.net/static/2024/20240826Category1.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Boho",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Boho",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Boho",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Boho&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Boho",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Boho&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Boho",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Boho&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Boho&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Boho",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Boho&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Boho&sort=default",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Boho",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Boho&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Boho&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Boho&sort=default",
              },
              products: [
                {
                  id: "306283",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category11.png",
                },
                {
                  id: "354635",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category12.png",
                },
                {
                  id: "331882",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category13.png",
                },
                {
                  id: "136600",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category14.png",
                },
              ],
            },
            {
              name: "Traditional",
              src: "https://upload.pictureserver.net/static/2024/20240826Category2.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Klassisch&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Traditionnel",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Klassisch&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Traditional&sort=default",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Traditionnel",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Klassisch&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Tradicional",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Klasyczny&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Traditioneel",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Classico&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Tradicional&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Traditionell&sort=default",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Klasszikus&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Traditionel&sort=default ",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Tradicni",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Perinteinen&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Klassisk&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Tradicny&sort=default",
              },
              products: [
                {
                  id: "164877",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category21.png",
                },
                {
                  id: "114242",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category22.png",
                },
                {
                  id: "135510",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category23.png",
                },
                {
                  id: "63322",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category24.png",
                },
              ],
            },
            {
              name: "Industrial",
              src: "https://upload.pictureserver.net/static/2024/20240826Category3.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Industriell&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Industriel",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Industriell&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Industrial&sort=default",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Industriel",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Industriell&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Industrial",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Industrialny&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Industrieel",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Industriale&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Industrial&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Industriell&sort=default",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Ipari&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Industriel&sort=default ",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Prumyslovy",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Industriaalinen&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Industriell&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Industrialny&sort=default",
              },
              products: [
                {
                  id: "189717",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category31.png",
                },
                {
                  id: "374306",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category32.png",
                },
                {
                  id: "365707",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category33.png",
                },
                {
                  id: "180714",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category34.png",
                },
              ],
            },
            {
              name: "Retro",
              src: "https://upload.pictureserver.net/static/2024/20240826Category4.png",
              href: {
                CHDE: "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/looks/?Stil=Retro&sort=default",
                CHFR: "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Style=Retro",
                DE: "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/looks/?Stil=Retro&sort=default",
                UK: "https://www.beliani.co.uk/living-room-furniture/all+products/?Style=Retro&sort=default",
                FR: "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Style=Retro",
                AT: "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/looks/?Stil=Retro&sort=default",
                ES: "https://www.beliani.es/salon/todos+los+productos/?Estilo=Retro",
                PL: "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/looks/?Styl=Retro&sort=default",
                NL: "https://www.beliani.nl/woonkamer/alle+producten/?Stijl=Retro",
                IT: "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Stile=Retro&sort=default",
                PT: "https://www.beliani.pt/sala/todos+os+produtos/?Estilo=Retro&sort=default",
                SE: "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Stil=Retro&sort=default",
                HU: "https://www.beliani.hu/nappali-butorok/minden+termek/?Stilus=Retro&sort=default",
                DK: "https://www.beliani.dk/stuemobler/alle+produkter/?Stil=Retro&sort=default ",
                CZ: "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/?Styl=Retro",
                FI: "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/?Tyyli=Retro&sort=default",
                NO: "https://www.beliani.no/stuemoebler/alle+produkter/?Stil=Retro&sort=default",
                SK: "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Styl=Retro&sort=default",
              },
              products: [
                {
                  id: "454066",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category41.png",
                },
                {
                  id: "328733",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category42.png",
                },
                {
                  id: "357566",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category43.png",
                },
                {
                  id: "354707",
                  src: "https://upload.pictureserver.net/static/2024/20240826Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-26",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240826_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-26",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240826TopImage.png",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-16",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240816b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-15",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240815b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "20:23",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "26",
              name: "codes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "30:33",
              name: "categories",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "26.08.24-CushionPyramid!",
              tableRange: "41:43",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categories",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "290154",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie1.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "291415",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie2.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "257972",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie3.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "256863",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie4.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "257987",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie5.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
                {
                  id: "188952",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie6.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "307932",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie7.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "256767",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie8.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
                {
                  id: "291211",
                  src: "https://upload.pictureserver.net/static/2024/20240826Freebie9.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
              ],
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26346",
      name: "Free duvet cover",
      date: "2024.09.09",
      issueCardId: "301986",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayCategories,
          wrapper: types.WRAPPER,
          background: "#f6e7e6",
          css: types.CSS.NS,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-09",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240909_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-09",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240909gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240830b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-29",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240829b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "20:22",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "30:33",
              name: "categories",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "33",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "41:43",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "247880",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie1.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
                {
                  id: "247865",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie2.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
                {
                  id: "247885",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie3.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 2,
              },
              products: [
                {
                  id: "247871",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie4.png",
                  style: "padding-right: 5px; padding-left: 60px;",
                  size: "135x200 cm",
                },
                {
                  id: "247881",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie5.png",
                  style: "padding-left: 5px; padding-right: 60px;",
                  size: "135x200 cm",
                },
              ],
            },
          ],
          categories: [
            {
              name: "Weighted blankets",
              src: "https://upload.pictureserver.net/static/2024/20240909Category1.png",
              href: "https://www.beliani.ch/textiles/weighted-blankets/",
              products: [
                {
                  id: "432494",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category11.png",
                },
                {
                  id: "433029",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category12.png",
                },
                {
                  id: "432994",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category13.png",
                },
                {
                  id: "432571",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category14.png",
                },
              ],
            },
            {
              name: "Dressing tables",
              src: "https://upload.pictureserver.net/static/2024/20240909Category2.png",
              href: "https://www.beliani.ch/storage/dressing-tables/",
              products: [
                {
                  id: "361686",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category21.png",
                },
                {
                  id: "361290",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category22.png",
                },
                {
                  id: "150033",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category23.png",
                },
                {
                  id: "214138",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category24.png",
                },
              ],
            },
            {
              name: "Makeup mirrors",
              src: "https://upload.pictureserver.net/static/2024/20240909Category3.png",
              href: "https://www.beliani.ch/mirrors/makeup-mirrors/",
              products: [
                {
                  id: "368098",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category31.png",
                },
                {
                  id: "297340",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category32.png",
                },
                {
                  id: "368236",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category33.png",
                },
                {
                  id: "368237",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category34.png",
                },
              ],
            },
            {
              name: "Scented candles & diffusers",
              src: "https://upload.pictureserver.net/static/2024/20240909Category4.png",
              href: "https://www.beliani.ch/accessories-decor/scented-candles-and-diffusers/",
              products: [
                {
                  id: "409272",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category41.png",
                },
                {
                  id: "408914",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category42.png",
                },
                {
                  id: "408776",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category43.png",
                },
                {
                  id: "408896",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category44.png",
                },
              ],
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayCategories,
          background: "#f6e7e6",
          css: types.CSS.LP,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-09",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240909_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-09",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240909gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240830b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-08-29",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240829b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "20:22",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "25",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "30:33",
              name: "categories",
            },
            // {
            //   tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
            //   tableName: "Categories",
            //   tableRange: "?majorDimension=COLUMNS",
            //   name: "categories",
            //   tableColumns: false,
            // },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "33",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 09.09.24 Free duvet cover!",
              tableRange: "41:43",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "247880",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie1.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
                {
                  id: "247865",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie2.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
                {
                  id: "247885",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie3.png",
                  style: "padding-right: 5px; padding-left: 5px;",
                  size: "155x220 cm",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 2,
              },
              products: [
                {
                  id: "247871",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie4.png",
                  style: "padding-right: 5px; padding-left: 60px;",
                  size: "135x200 cm",
                },
                {
                  id: "247881",
                  src: "https://upload.pictureserver.net/static/2024/20240909Freebie5.png",
                  style: "padding-left: 5px; padding-right: 60px;",
                  size: "135x200 cm",
                },
              ],
            },
          ],
          categories: [
            {
              name: "Weighted blankets",
              src: "https://upload.pictureserver.net/static/2024/20240909Category1.png",
              href: "https://www.beliani.ch/textiles/weighted-blankets/",
              products: [
                {
                  id: "432494",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category11.png",
                },
                {
                  id: "433029",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category12.png",
                },
                {
                  id: "432994",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category13.png",
                },
                {
                  id: "432571",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category14.png",
                },
              ],
            },
            {
              name: "Dressing tables",
              src: "https://upload.pictureserver.net/static/2024/20240909Category2.png",
              href: "https://www.beliani.ch/storage/dressing-tables/",
              products: [
                {
                  id: "361686",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category21.png",
                },
                {
                  id: "361290",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category22.png",
                },
                {
                  id: "150033",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category23.png",
                },
                {
                  id: "214138",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category24.png",
                },
              ],
            },
            {
              name: "Makeup mirrors",
              src: "https://upload.pictureserver.net/static/2024/20240909Category3.png",
              href: "https://www.beliani.ch/mirrors/makeup-mirrors/",
              products: [
                {
                  id: "368098",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category31.png",
                },
                {
                  id: "297340",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category32.png",
                },
                {
                  id: "368236",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category33.png",
                },
                {
                  id: "368237",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category34.png",
                },
              ],
            },
            {
              name: "Scented candles & diffusers",
              src: "https://upload.pictureserver.net/static/2024/20240909Category4.png",
              href: "https://www.beliani.ch/accessories-decor/scented-candles-and-diffusers/",
              products: [
                {
                  id: "409272",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category41.png",
                },
                {
                  id: "408914",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category42.png",
                },
                {
                  id: "408776",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category43.png",
                },
                {
                  id: "408896",
                  src: "https://upload.pictureserver.net/static/2024/20240909Category44.png",
                },
              ],
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26589",
      name: "Free outdoor cushion se",
      date: "2024.09.16",
      issueCardId: "305037",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayOfferFreeebiesLines,
          background: "#750000",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          offerPart: {
            type: "code",
            color: "#fff",
          },
          intro: {
            background: "#ffccb7",
          },
          categories: [
            {
              name: "Lounge sets",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240916Category1.png",
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
              products: [
                {
                  id: "367977",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category11.png",
                },
                {
                  id: "211351",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category12.png",
                },
                {
                  id: "248905",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category13.png",
                },
                {
                  id: "342596",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category14.png",
                },
              ],
            },
            {
              name: "Chairs",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240916Category2.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
              products: [
                {
                  id: "414231",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category21.png",
                },
                {
                  id: "398621",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category22.png",
                },
                {
                  id: "394185",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category23.png",
                },
                {
                  id: "269232",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category24.png",
                },
              ],
            },
            {
              name: "Balcony sets",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240916Category3.png",
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              products: [
                {
                  id: "245405",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category31.png",
                },
                {
                  id: "308842",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category32.png",
                },
                {
                  id: "242847",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category33.png",
                },
                {
                  id: "198941",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category34.png",
                },
              ],
            },
            {
              name: "Plant pots",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240916Category4.png",
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              products: [
                {
                  id: "322652",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category41.png",
                },
                {
                  id: "186292",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category42.png",
                },
                {
                  id: "404188",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category43.png",
                },
                {
                  id: "147168",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-16",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240916_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-16",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240916gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-06",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240906b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-05",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240905b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "38:40",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: {
            options: {},
            items: [
              {
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "194542",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie1.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "420951",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie2.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "420566",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie3.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                ],
              },
              {
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "418352",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie4.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "417458",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie5.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                  {
                    id: "307695",
                    src: "https://upload.pictureserver.net/static/2024/20240916Freebie6.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayOfferFreeebiesLines,
          css: types.CSS.LP,
          background: "#750000",
          offerPart: {
            type: "code",
            color: "#fff",
          },
          intro: {
            background: "#ffccb7",
          },
          categories: [
            {
              name: "Lounge sets",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240916Category1.png",
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
              products: [
                {
                  id: "367977",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category11.png",
                },
                {
                  id: "211351",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category12.png",
                },
                {
                  id: "248905",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category13.png",
                },
                {
                  id: "342596",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category14.png",
                },
              ],
            },
            {
              name: "Chairs",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240916Category2.png",
              href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
              products: [
                {
                  id: "414231",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category21.png",
                },
                {
                  id: "398621",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category22.png",
                },
                {
                  id: "394185",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category23.png",
                },
                {
                  id: "269232",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category24.png",
                },
              ],
            },
            {
              name: "Balcony sets",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240916Category3.png",
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              products: [
                {
                  id: "245405",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category31.png",
                },
                {
                  id: "308842",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category32.png",
                },
                {
                  id: "242847",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category33.png",
                },
                {
                  id: "198941",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category34.png",
                },
              ],
            },
            {
              name: "Plant pots",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240916Category4.png",
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              products: [
                {
                  id: "322652",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category41.png",
                },
                {
                  id: "186292",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category42.png",
                },
                {
                  id: "404188",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category43.png",
                },
                {
                  id: "147168",
                  src: "https://upload.pictureserver.net/static/2024/20240916Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-16",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240916_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-16",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240916gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-06",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240906b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-05",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240905b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "25",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher 16.09.24-Free outdoor cushion!",
              tableRange: "38:40",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: [
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "194542",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie1.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "420951",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie2.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "420566",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie3.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
              ],
            },
            {
              size: {
                row: 1,
                col: 3,
              },
              products: [
                {
                  id: "418352",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie4.png",
                  style: "padding-right: 10px; padding-left: 10px;",
                },
                {
                  id: "417458",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie5.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
                {
                  id: "307695",
                  src: "https://upload.pictureserver.net/static/2024/20240916Freebie6.png",
                  style: "padding-left: 10px; padding-right: 10px;",
                },
              ],
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26378",
      name: "October peak start",
      date: "2024.10.07",
      issue_cardId: "303119",
      alarm: {
        isActive: false,
        description: "Add soonending campaigns."
      },
      isArchive: false,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesRows,
          background: "#dbd9d7",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          categories: [
            {
              name: "Sofas",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_03.jpg",
              },
              href: "https://www.beliani.ch/sofas/",
              type: "image"
            },
            {
              name: "Beds",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_04.jpg",
              },
              href: "https://www.beliani.ch/beds/",
              type: "image"
            },
            {
              name: "Armchairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_05.jpg",
              },
              href: "https://www.beliani.ch/armchairs/",
              type: "image"
            },
            {
              name: "Chairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_06.jpg",
              },
              href: "https://www.beliani.ch/chairs/",
              type: "image"
            },
            {
              name: "Tables",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_07.jpg",
              },
              href: "https://www.beliani.ch/tables/",
              type: "image"
            },
            {
              name: "Storage",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_08.jpg",
              },
              href: "https://www.beliani.ch/storage/",
              type: "image"
            },
            {
              name: "Textiles",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_09.jpg",
              },
              href: "https://www.beliani.ch/textiles/",
              type: "image"
            },
            {
              name: "Lighting",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_10.jpg",
              },
              href: "https://www.beliani.ch/lighting/",
              type: "image"
            },
            {
              name: "Bath",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_11.jpg",
              },
              href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
              type: "image"
            },
            {
              name: "Desks",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_12.jpg",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              type: "image"
            },
            {
              name: "Rugs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_13.jpg",
              },
              href: "https://www.beliani.ch/rugs/",
              type: "image"
            },
            {
              name: "Accessories",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_14.jpg",
              },
              href: "https://www.beliani.ch/home-accessories/",
              type: "image"
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007.gif",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-04",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241004b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "07.10.24 - October peak start - Monday!",
              tableRange: "15",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "07.10.24 - October peak start - Monday!",
              tableRange: "22:23",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesRows,
          css: types.CSS.LP,
          background: "#dbd9d7",
          categories: [
            {
              name: "Sofas",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_03.jpg",
              },
              href: "https://www.beliani.ch/sofas/",
              type: "image"
            },
            {
              name: "Beds",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_04.jpg",
              },
              href: "https://www.beliani.ch/beds/",
              type: "image"
            },
            {
              name: "Armchairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_05.jpg",
              },
              href: "https://www.beliani.ch/armchairs/",
              type: "image"
            },
            {
              name: "Chairs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_06.jpg",
              },
              href: "https://www.beliani.ch/chairs/",
              type: "image"
            },
            {
              name: "Tables",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_07.jpg",
              },
              href: "https://www.beliani.ch/tables/",
              type: "image"
            },
            {
              name: "Storage",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_08.jpg",
              },
              href: "https://www.beliani.ch/storage/",
              type: "image"
            },
            {
              name: "Textiles",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_09.jpg",
              },
              href: "https://www.beliani.ch/textiles/",
              type: "image"
            },
            {
              name: "Lighting",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_10.jpg",
              },
              href: "https://www.beliani.ch/lighting/",
              type: "image"
            },
            {
              name: "Bath",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_11.jpg",
              },
              href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
              type: "image"
            },
            {
              name: "Desks",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_12.jpg",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              type: "image"
            },
            {
              name: "Rugs",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_13.jpg",
              },
              href: "https://www.beliani.ch/rugs/",
              type: "image"
            },
            {
              name: "Accessories",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_14.jpg",
              },
              href: "https://www.beliani.ch/home-accessories/",
              type: "image"
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-07",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241007.gif",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-04",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241004b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "07.10.24 - October peak start - Monday!",
              tableRange: "15",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "07.10.24 - October peak start - Monday!",
              tableRange: "22:23",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26736",
      name: "Free pendant lamp",
      date: "2024.09.23",
      issueCardId: "306466",
      optimizeImg: true,
      alarm: {
        isActive: false,
      },
      isArchive: true,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayOfferFreeebies,
          background: "#f6e7e6",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          offerPart: {
            type: "code",
            color: "#000",
          },
          intro: {
            background: "#ffccb7",
          },
          categories: [
            {
              isCategoriesDB: true,
              name: "Living room",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240923Category1.png",
              href: "https://www.beliani.ch/living-room-furniture/",
              products: [
                {
                  id: "185320",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category11.png",
                },
                {
                  id: "291306",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category12.png",
                },
                {
                  id: "317924",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category13.png",
                },
                {
                  id: "179424",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category14.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Bedroom",
              background: "#f6e7e6",
              src: "https://upload.pictureserver.net/static/2024/20240923Category2.png",
              href: "https://www.beliani.ch/bedroom-furniture/",
              products: [
                {
                  id: "468146",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category21.png",
                },
                {
                  id: "231121",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category22.png",
                },
                {
                  id: "351140",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category23.png",
                },
                {
                  id: "397195",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category24.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Dining room",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240923Category3.png",
              href: "https://www.beliani.ch/dining-room-furniture/",
              products: [
                {
                  id: "324080",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category31.png",
                },
                {
                  id: "2177",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category32.png",
                },
                {
                  id: "101671",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category33.png",
                },
                {
                  id: "363813",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category34.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Reading corner",
              background: "#f6e7e6",
              src: "https://upload.pictureserver.net/static/2024/20240923Category4.png",
              href: "https://www.beliani.ch/reading-corner/",
              products: [
                {
                  id: "397613",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category41.png",
                },
                {
                  id: "170647",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category42.png",
                },
                {
                  id: "413866",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category43.png",
                },
                {
                  id: "351104",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-23",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240923_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-23",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240923gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-13",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240913b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-12",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240912b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "39:41",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: {
            options: {
              color: "#000",
            },
            items: [
              {
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "343540",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie1.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "50271",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie2.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "70519",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie3.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                ],
              },
              {
                color: "#000",
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "214605",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie4.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "115403",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie5.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                  {
                    id: "68326",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie6.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayOfferFreeebies,
          css: types.CSS.LP,
          background: "#f6e7e6",
          offerPart: {
            type: "code",
            color: "#000",
          },
          intro: {
            background: "#ffccb7",
          },
          categories: [
            {
              isCategoriesDB: true,
              name: "Living room",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240923Category1.png",
              href: "https://www.beliani.ch/living-room-furniture/",
              products: [
                {
                  id: "185320",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category11.png",
                },
                {
                  id: "291306",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category12.png",
                },
                {
                  id: "317924",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category13.png",
                },
                {
                  id: "179424",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category14.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Bedroom",
              background: "#f6e7e6",
              src: "https://upload.pictureserver.net/static/2024/20240923Category2.png",
              href: "https://www.beliani.ch/bedroom-furniture/",
              products: [
                {
                  id: "468146",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category21.png",
                },
                {
                  id: "231121",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category22.png",
                },
                {
                  id: "351140",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category23.png",
                },
                {
                  id: "397195",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category24.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Dining room",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240923Category3.png",
              href: "https://www.beliani.ch/dining-room-furniture/",
              products: [
                {
                  id: "324080",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category31.png",
                },
                {
                  id: "2177",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category32.png",
                },
                {
                  id: "101671",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category33.png",
                },
                {
                  id: "363813",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category34.png",
                },
              ],
            },
            {
              isCategoriesDB: true,
              name: "Reading corner",
              background: "#f6e7e6",
              src: "https://upload.pictureserver.net/static/2024/20240923Category4.png",
              href: "https://www.beliani.ch/reading-corner/",
              products: [
                {
                  id: "397613",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category41.png",
                },
                {
                  id: "170647",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category42.png",
                },
                {
                  id: "413866",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category43.png",
                },
                {
                  id: "351104",
                  src: "https://upload.pictureserver.net/static/2024/20240923Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-23",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240923_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-23",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240923gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-13",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240913b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-12",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240912b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "25",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 23.09.24 - Free pendant lamp!",
              tableRange: "39:41",
              name: "condition",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
            },
            {
              tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesTitles",
              tableColumns: false,
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories",
              tableRange: "?majorDimension=COLUMNS",
              name: "categoriesLinks",
              tableColumns: false,
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
          freebies: {
            options: {
              color: "#000",
            },
            items: [
              {
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "343540",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie1.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "50271",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie2.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "70519",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie3.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                ],
              },
              {
                color: "#000",
                size: {
                  row: 1,
                  col: 3,
                },
                products: [
                  {
                    id: "214605",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie4.png",
                    style: "padding-right: 10px; padding-left: 10px;",
                  },
                  {
                    id: "115403",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie5.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                  {
                    id: "68326",
                    src: "https://upload.pictureserver.net/static/2024/20240923Freebie6.png",
                    style: "padding-left: 10px; padding-right: 10px;",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    new Campaign({
      date: "2024.09.30",
      issueCardId: "307082",
      name: "Free blanket",
      startId: "26864",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: mondayOfferFreeebies,
          background: "#ffccb7",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          offerPart: {
            type: "code",
            color: "#000",
          },
          intro: {
            background: "#ff2f00",
            color: "#ffffff",
          },
          categories: [
            {
              name: "Beds",
              background: "#ff2f00",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240930Category1.png",
              href: "https://www.beliani.ch/beds/",
              products: [
                {
                  id: "518913",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category11.png",
                },
                {
                  id: "517117",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category12.png",
                },
                {
                  id: "335439",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category13.png",
                },
                {
                  id: "189761",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category14.png",
                },
              ],
            },
            {
              name: "Mattresses",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240930Category2.png",
              href: "https://www.beliani.ch/mattresses/",
              products: [
                {
                  id: "501318",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category21.png",
                },
                {
                  id: "499894",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category22.png",
                },
                {
                  id: "207793",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category23.png",
                },
                {
                  id: "223742",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category24.png",
                },
              ],
            },
            {
              name: "Bedside tables",
              background: "#ff2f00",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240930Category3.png",
              href: "https://www.beliani.ch/storage/bedside-tables/",
              products: [
                {
                  id: "337678",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category31.png",
                },
                {
                  id: "363361",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category32.png",
                },
                {
                  id: "131592",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category33.png",
                },
                {
                  id: "200279",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category34.png",
                },
              ],
            },
            {
              name: "Table & bedside tables lamps",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240930Category4.png",
              href: "https://www.beliani.ch/lighting/table-lamps/",
              products: [
                {
                  id: "374706",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category41.png",
                },
                {
                  id: "403442",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category42.png",
                },
                {
                  id: "315554",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category43.png",
                },
                {
                  id: "432676",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240930_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240930gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240920b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-19",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240919b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "42:44",
              name: "condition",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "30:33",
              name: "categories",
            },
          ],
          freebies: {
            options: {
              color: "#000",
            },
            items: [
              {
                size: {
                  row: 1,
                  col: 2,
                },
                products: [
                  {
                    id: "194763",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie1.png",
                    style: "padding-right: 4px; padding-left: 60px;",
                  },
                  {
                    id: "119655",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie2.png",
                    style: "padding-right: 60px; padding-left: 4px;",
                  },
                ],
              },
              {
                color: "#000",
                size: {
                  row: 1,
                  col: 2,
                },
                products: [
                  {
                    id: "194769",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie3.png",
                    style: "padding-right: 4px; padding-left: 60px;",
                  },
                  {
                    id: "195998",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie4.png",
                    style: "padding-right: 60px; padding-left: 4px;",
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: mondayOfferFreeebies,
          css: types.CSS.LP,
          background: "#ffccb7",
          offerPart: {
            type: "code",
            color: "#000",
          },
          intro: {
            background: "#ff2f00",
            color: "#ffffff",
          },
          categories: [
            {
              isCategoriesDB: false,
              name: "Beds",
              background: "#ff2f00",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240930Category1.png",
              href: "https://www.beliani.ch/beds/",
              products: [
                {
                  id: "518913",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category11.png",
                },
                {
                  id: "517117",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category12.png",
                },
                {
                  id: "335439",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category13.png",
                },
                {
                  id: "189761",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category14.png",
                },
              ],
            },
            {
              isCategoriesDB: false,
              name: "Mattresses",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240930Category2.png",
              href: "https://www.beliani.ch/mattresses/",
              products: [
                {
                  id: "501318",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category21.png",
                },
                {
                  id: "499894",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category22.png",
                },
                {
                  id: "207793",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category23.png",
                },
                {
                  id: "223742",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category24.png",
                },
              ],
            },
            {
              isCategoriesDB: false,
              name: "Bedside tables",
              background: "#ff2f00",
              color: "#ffffff",
              src: "https://upload.pictureserver.net/static/2024/20240930Category3.png",
              href: "https://www.beliani.ch/storage/bedside-tables/",
              products: [
                {
                  id: "337678",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category31.png",
                },
                {
                  id: "363361",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category32.png",
                },
                {
                  id: "131592",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category33.png",
                },
                {
                  id: "200279",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category34.png",
                },
              ],
            },
            {
              isCategoriesDB: false,
              name: "Table & bedside tables lamps",
              background: "#ffccb7",
              src: "https://upload.pictureserver.net/static/2024/20240930Category4.png",
              href: "https://www.beliani.ch/lighting/table-lamps/",
              products: [
                {
                  id: "374706",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category41.png",
                },
                {
                  id: "403442",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category42.png",
                },
                {
                  id: "315554",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category43.png",
                },
                {
                  id: "432676",
                  src: "https://upload.pictureserver.net/static/2024/20240930Category44.png",
                },
              ],
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240930_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240930gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240920b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-19",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240919b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "20:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "28:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "25",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "42:44",
              name: "condition",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 - Free blanket!",
              tableRange: "30:33",
              name: "categories",
            },
          ],
          freebies: {
            options: {
              color: "#000",
            },
            items: [
              {
                size: {
                  row: 1,
                  col: 2,
                },
                products: [
                  {
                    id: "194763",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie1.png",
                    style: "padding-right: 4px; padding-left: 60px;",
                  },
                  {
                    id: "119655",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie2.png",
                    style: "padding-right: 60px; padding-left: 4px;",
                  },
                ],
              },
              {
                color: "#000",
                size: {
                  row: 1,
                  col: 2,
                },
                products: [
                  {
                    id: "194769",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie3.png",
                    style: "padding-right: 4px; padding-left: 60px;",
                  },
                  {
                    id: "195998",
                    src: "https://upload.pictureserver.net/static/2024/20240930Freebie4.png",
                    style: "padding-right: 60px; padding-left: 4px;",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    new Campaign({
      date: "2024.09.30",
      issueCardId: "299804",
      name: "Free blanket CH",
      startId: "99999",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesGrid,
          background: "#ffccb7",
          wrapper: types.WRAPPER,
          css: types.CSS.NS_MATTRESS,
          intro: {
            background: "#ffccb7",
            color: "#ffffff",
          },
          categories: [
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory1.png",
                href: "https://www.beliani.ch/beds/",
                name: "Beds"
              },
              {
                href: "https://www.beliani.ch/beds/",
                name: "Beds",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/",
                name: "Bedside tables",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory2.png",
                href: "https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/",
                name: "Bedside tables"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory3.png",
                href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
                name: "Armchairs"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
                name: "Armchairs",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/bed-accessories/",
                name: "Bed accessories",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory4.png",
                href: "https://www.beliani.ch/bedroom-furniture/bed-accessories/",
                name: "Bed accessories"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory5.png",
                href: "https://www.beliani.ch/bedroom-furniture/textiles/",
                name: "Textiles"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/textiles/",
                name: "Textiles",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/lighting/",
                name: "Lighting",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory6.png",
                href: "https://www.beliani.ch/bedroom-furniture/lighting/",
                name: "Lighting"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory7.png",
                href: "https://www.beliani.ch/bedroom-furniture/accessories-decor/scented-candles-and-diffusers/",
                name: "Scented Candles"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/accessories-decor/scented-candles-and-diffusers/",
                name: "Scented Candles",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/rugs/",
                name: "Rugs",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory8.png",
                href: "https://www.beliani.ch/bedroom-furniture/rugs/",
                name: "Rugs"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory9.png",
                href: "https://www.beliani.ch/home-accessories/mirrors/",
                name: "Mirrors"
              },
              {
                href: "https://www.beliani.ch/home-accessories/mirrors/",
                name: "Mirrors",
                color: "#ffffff",
              },
            ],
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240930_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240930CHTopImage.png",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240920b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-19",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240919b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "19:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "23",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "25",
              name: "shopAllMattrasses",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "30:31",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "51:53",
              name: "condition",
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesGrid,
          css: types.CSS.LP_MATTRESS,
          background: "#ffccb7",
          intro: {
            background: "#ffccb7",
            color: "#ffffff",
          },
          categories: [
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory1.png",
                href: "https://www.beliani.ch/beds/",
                name: "Beds"
              },
              {
                href: "https://www.beliani.ch/beds/",
                name: "Beds",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/",
                name: "Bedside tables",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory2.png",
                href: "https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/",
                name: "Bedside tables"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory3.png",
                href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
                name: "Armchairs"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
                name: "Armchairs",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/bed-accessories/",
                name: "Bed accessories",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory4.png",
                href: "https://www.beliani.ch/bedroom-furniture/bed-accessories/",
                name: "Bed accessories"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory5.png",
                href: "https://www.beliani.ch/bedroom-furniture/textiles/",
                name: "Textiles"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/textiles/",
                name: "Textiles",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/lighting/",
                name: "Lighting",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory6.png",
                href: "https://www.beliani.ch/bedroom-furniture/lighting/",
                name: "Lighting"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory7.png",
                href: "https://www.beliani.ch/bedroom-furniture/accessories-decor/scented-candles-and-diffusers/",
                name: "Scented Candles"
              },
              {
                href: "https://www.beliani.ch/bedroom-furniture/accessories-decor/scented-candles-and-diffusers/",
                name: "Scented Candles",
                color: "#ffffff",
              },
            ],
            [
              {
                href: "https://www.beliani.ch/bedroom-furniture/rugs/",
                name: "Rugs",
                color: "#ffffff",
              },
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory8.png",
                href: "https://www.beliani.ch/bedroom-furniture/rugs/",
                name: "Rugs"
              },
            ],
            [
              {
                src: "https://upload.pictureserver.net/static/2024/20240930CHCategory9.png",
                href: "https://www.beliani.ch/home-accessories/mirrors/",
                name: "Mirrors"
              },
              {
                href: "https://www.beliani.ch/home-accessories/mirrors/",
                name: "Mirrors",
                color: "#ffffff",
              },
            ],
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240930_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-30",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240930CHTopImage.png",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240920b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-19",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240919b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "19:22",
              name: "offerPart",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "27",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "23",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "25",
              name: "shopAllMattrasses",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "30:31",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 30.09.24 -  CH Mattress disposal for free!",
              tableRange: "51:53",
              name: "condition",
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26897",
      name: "Sunday",
      date: "2024.09.29",
      issueCardId: "303850",
      alarm: {
        isActive: false,
      },
      isArchive: true,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: Sunday,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          timers: {
            UK: "https://gen.sendtric.com/countdown/98fkb9tkrj",
            PL: "https://gen.sendtric.com/countdown/cjfzeha6lp",
            DE: "https://gen.sendtric.com/countdown/e7p7fnu0o8",
            AT: "https://gen.sendtric.com/countdown/ku18snuq3g",
            CHDE: "https://gen.sendtric.com/countdown/dodhyjxqk1",
            FR: "https://gen.sendtric.com/countdown/eb9z2i69v0",
            CHFR: "https://gen.sendtric.com/countdown/zqqwvjf0fl",
            BEFR: "https://gen.sendtric.com/countdown/0s5ulondby",
            BENL: "https://gen.sendtric.com/countdown/ebpklpi7vz",
            CHFR: "https://gen.sendtric.com/countdown/6r3gp587sk",
            ES: "https://gen.sendtric.com/countdown/focotem1l7",
            NL: "https://gen.sendtric.com/countdown/34vxxk4kmd",
            IT: "https://gen.sendtric.com/countdown/34beso340o",
            PT: "https://gen.sendtric.com/countdown/9ixcjcpx4l",
            DK: "https://gen.sendtric.com/countdown/gzorgg1w6k",
            NO: "https://gen.sendtric.com/countdown/glvz3y3pc5",
            FI: "https://gen.sendtric.com/countdown/6ms0qxhafr",
            SE: "https://gen.sendtric.com/countdown/noadbgulfg",
            CZ: "https://gen.sendtric.com/countdown/qy6p3jfyp3",
            HU: "https://gen.sendtric.com/countdown/395n87llyn",
            SK: "https://gen.sendtric.com/countdown/cg5xh6rnxn",
          },
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "37",
                value: "https://beliani.info/newsletter/2022/240150_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-23",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240923_mb.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-25",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240925_mb.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-26",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240926_mb.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-09-27",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240927_mb.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Sunday Newsletter!",
              tableRange: "22:23",
              name: "condition",
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: Sunday,
          css: types.CSS.LP,
          links: [
            {
              query: false,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240617_mb.png",
              },
            },
            {
              query: false,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-10",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240520gif.gif",
            },
            {
              query: false,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240603b.jpg",
              },
            },
            {
              query: false,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-05-31",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240531b.jpg",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 10.06.24 - Beliani Birthday Start",
              tableRange: "24:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 10.06.24 - Beliani Birthday Start",
              tableRange: "30",
              name: "getCodes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 10.06.24 - Beliani Birthday Start",
              tableRange: "31",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 10.06.24 - Beliani Birthday Start",
              tableRange: "59",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 10.06.24 - Beliani Birthday Start",
              tableRange: "61:62",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "26929",
      name: "Black Week",
      date: "2024.11.11",
      issueCardId: "310827",
      alarm: {
        isActive: true,
        description: "Add soon ending campaigns.",
      },
      isArchive: false,
      optimizeImg: false,
      figmaUrl: "https://www.figma.com/design/uIdkNdNa9xdPfexVSIkRgm/2024.11.11---Black-Week-start-newlsetter-(Copy)?t=yz2KFYtKNK6uYMID-0",
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: CategoriesRowsOfferPart,
          css: types.CSS.NS_BLACK_WEEK,
          background: "#000000",
          categories: [
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category1.png",
              },
              href: "https://www.beliani.ch/sofas/",
              name: "Sofas",
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category2.png",
              },
              href: "https://www.beliani.ch/beds/",
              name: "Beds"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category3.png",
              },
              href: "https://www.beliani.ch/armchairs/",
              name: "Armchairs"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category4.png",
              },
              href: "https://www.beliani.ch/chairs/",
              name: "Chairs"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category5.png",
              },
              href: "https://www.beliani.ch/tables/",
              name: "Tables"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category6.png",
              },
              href: "https://www.beliani.ch/storage/",
              name: "Storage"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category7.png",
              },
              href: "https://www.beliani.ch/textiles/",
              name: "Textiles"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category8.png",
              },
              href: "https://www.beliani.ch/lighting/",
              name: "Lighting"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category9.png",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              name: "Bathtubs"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category10.png",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              name: "Desks"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category11.png",
              },
              href: "https://www.beliani.ch/rugs/",
              name: "Rugs"
            },
            {
              color: "#ffffff",
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111Category12.png",
              },
              href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              name: "Accessories"
            },
          ],
          wrapper: types.WRAPPER,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-11-11",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241111_01.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-11-01",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241101b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-31",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241031b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 11.11.24 - Black week start!",
              tableRange: "30:37",
              name: "intro",
              fallback: [
                "Extra 5% off everything",
                "when you spend min. 250 €",
                "Extra 10% off everything",
                "when you spend min. 500 €",
                "Extra 15% off everything",
                "when you spend min. 1000 €",
                "Extra 20% off everything",
                "when you spend min. 2500 €",
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 11.11.24 - Black week start!",
              tableRange: "29",
              name: "introTitle",
              fallback: [
                'Up to <span style="color: #FF2F00;">20% OFF</span> even on top </br> of already reduced prices sitewide'
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 11.11.24 - Black week start!",
              tableRange: "40:43",
              name: "codes",
              fallback: [
                "Code: 1",
                "Code: 2",
                "Code: 3",
                "Code: 4",
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 11.11.24 - Black week start!",
              tableRange: "38",
              name: "offerDate",
              fallback: [
                "The offer is valid until 1st od December."
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 11.11.24 - Black week start!",
              tableRange: "49",
              name: "condition",
              fallback: [
                'Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification. If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.'
              ]
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesRowsOfferPart,
          background: "#000000",
          categories: [
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_04.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_05.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-accessories/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_06.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_07.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-spa/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_08.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_09.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_10.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-lights/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_11.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/kitchenware-tableware/",
            },
          ],
          css: types.CSS.LP_BLACK_WEEK,
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-24",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240624gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240617b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240614b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "24:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "30",
              name: "getCodes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "33",
              name: "codes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "31",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "44",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "46:47",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "27025",
      name: "October peak second",
      date: "2024.10.14",
      issueCardId: "303122",
      alarm: {
        isActive: true,
        description: "Fix campaigns titles."
      },
      isArchive: false,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          template: CategoriesRowsLinePriceTitle,
          background: "#ffccb7",
          categories: [
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category1.png",
              },
              href: "https://www.beliani.ch/sofas/",
              name: "Sofas",
              type: "no_products",
              "price": {
                "CHDE": "169.99 Fr.",
                "CHFR": "189.99 Fr.",
                "DE": "199,99 €",
                "UK": "£149.99",
                "FR": "209,99 €",
                "AT": "249,99 €",
                "ES": "199,99 €",
                "PL": "559 zł",
                "NL": "€ 219,99",
                "IT": "179,99 €",
                "PT": "169,99 €",
                "SE": "2 405 kr",
                "HU": "92 190 Ft-tól",
                "DK": "1.669 kr.",
                "CZ": "4 229 Kč",
                "FI": "269,99 €",
                "NO": "2 209 kr",
                "SK": "239,99 €",
                "BEFR": "199,99 €",
                "BENL": "199,99 €"
              }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category2.png",
              },
              href: "https://www.beliani.ch/beds/",
              name: "Beds",
              type: "no_products",
                "price": {
                  "CHDE": "119.99 Fr.",
                  "CHFR": "129.99 Fr.",
                  "DE": "99,99 €",
                  "UK": "£109.99",
                  "FR": "109,99 €",
                  "AT": "109,99 €",
                  "ES": "99,99 €",
                  "PL": "399 zł",
                  "NL": "€ 119,99",
                  "IT": "119,99 €",
                  "PT": "89,99 €",
                  "SE": "1 295 kr",
                  "HU": "44 790 Ft-tól",
                  "DK": "829 kr.",
                  "CZ": "2 019 Kč",
                  "FI": "119,99 €",
                  "NO": "1 579 kr",
                  "SK": "109,99 €",
                  "BEFR": "119,99 €",
                  "BENL": "119,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category3.png",
              },
              href: "https://www.beliani.ch/armchairs/",
              name: "Armchairs",
              type: "no_products",
                "price": {
                  "CHDE": "69.99 Fr.",
                  "CHFR": "69.99 Fr.",
                  "DE": "49,99 €",
                  "UK": "£49.99",
                  "FR": "59,99 €",
                  "AT": "49,99 €",
                  "ES": "129,99 €",
                  "PL": "159 zł",
                  "NL": "€ 59,99",
                  "IT": "59,99 €",
                  "PT": "49,99 €",
                  "SE": "615 kr",
                  "HU": "18 750 Ft-tól",
                  "DK": "379 kr.",
                  "CZ": "959 Kč",
                  "FI": "59,99 €",
                  "NO": "929 kr",
                  "SK": "49,99 €",
                  "BEFR": "59,99 €",
                  "BENL": "59,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category4.png",
              },
              href: "https://www.beliani.ch/chairs/",
              name: "Chairs",
              type: "no_products",
                "price": {
                  "CHDE": "69.99 Fr.",
                  "CHFR": "79.99 Fr.",
                  "DE": "69,99 €",
                  "UK": "£69.99",
                  "FR": "69,99 €",
                  "AT": "79,99 €",
                  "ES": "89,99 €",
                  "PL": "229 zł",
                  "NL": "€ 79,99",
                  "IT": "79,99 €",
                  "PT": "79,99 €",
                  "SE": "805 kr",
                  "HU": "31 790 Ft-tól",
                  "DK": "509 kr.",
                  "CZ": "1 479 Kč",
                  "FI": "79,99 €",
                  "NO": "1 179 kr",
                  "SK": "59,99 €",
                  "BEFR": "69,99 €",
                  "BENL": "69,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category5.png",
              },
              href: "https://www.beliani.ch/tables/",
              name: "Tables",
              type: "no_products",
                "price": {
                  "CHDE": "49.99 Fr.",
                  "CHFR": "49.99 Fr.",
                  "DE": "49,99 €",
                  "UK": "£49.99",
                  "FR": "49,99 €",
                  "AT": "49,99 €",
                  "ES": "59,99 €",
                  "PL": "129 zł",
                  "NL": "€ 49,99",
                  "IT": "49,99 €",
                  "PT": "49,99 €",
                  "SE": "595 kr",
                  "HU": "15 790 Ft-tól",
                  "DK": "319 kr.",
                  "CZ": "779 Kč",
                  "FI": "59,99 €",
                  "NO": "849 kr",
                  "SK": "39,99 €",
                  "BEFR": "49,99 €",
                  "BENL": "49,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category6.png",
              },
              href: "https://www.beliani.ch/storage/",
              name: "Storage",
              type: "no_products",
                "price": {
                  "CHDE": "39.99 Fr.",
                  "CHFR": "49.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£39.99",
                  "FR": "49,99 €",
                  "AT": "39,99 €",
                  "ES": "49,99 €",
                  "PL": "89 zł",
                  "NL": "€ 39,99",
                  "IT": "39,99 €",
                  "PT": "29,99 €",
                  "SE": "505 kr",
                  "HU": "11 410 Ft-tól",
                  "DK": "309 kr.",
                  "CZ": "669 Kč",
                  "FI": "49,99 €",
                  "NO": "739 kr",
                  "SK": "29,99 €",
                  "BEFR": "39,99 €",
                  "BENL": "39,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category7.png",
              },
              href: "https://www.beliani.ch/textiles/",
              name: "Textiles",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "29.99 Fr.",
                  "DE": "19,99 €",
                  "UK": "£29.99",
                  "FR": "29,99 €",
                  "AT": "29,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 29,99",
                  "IT": "19,99 €",
                  "PT": "19,99 €",
                  "SE": "365 kr",
                  "HU": "6 890 Ft-tól",
                  "DK": "169 kr.",
                  "CZ": "439 Kč",
                  "FI": "39,99 €",
                  "NO": "529 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category8.png",
              },
              href: "https://www.beliani.ch/lighting/",
              name: "Lighting",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "39.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£29.99",
                  "FR": "39,99 €",
                  "AT": "39,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 39,99",
                  "IT": "29,99 €",
                  "PT": "29,99 €",
                  "SE": "425 kr",
                  "HU": "9 690 Ft-tól",
                  "DK": "249 kr.",
                  "CZ": "669 Kč",
                  "FI": "49,99 €",
                  "NO": "809 kr",
                  "SK": "29,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category9.png",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              name: "Bathtubs",
              type: "no_products",
                "price": {
                  "CHDE": "729.99 Fr.",
                  "CHFR": "919.99 Fr.",
                  "DE": "779,99 €",
                  "UK": "£609.99",
                  "FR": "819,99 €",
                  "AT": "889,99 €",
                  "ES": "729,99 €",
                  "PL": "2 679 zł",
                  "NL": "€ 849,99",
                  "IT": "909,99 €",
                  "PT": "749,99 €",
                  "SE": "8 875 kr",
                  "HU": "334 560 Ft-tól",
                  "DK": "189 kr.",
                  "CZ": "19 199 Kč",
                  "FI": "919,99 €",
                  "NO": "12 099 kr",
                  "SK": "719,99 €",
                  "BEFR": "759,99 €",
                  "BENL": "759,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category10.png",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              name: "Desks",
              type: "no_products",
                "price": {
                  "CHDE": "129.99 Fr.",
                  "CHFR": "149.99 Fr.",
                  "DE": "109,99 €",
                  "UK": "£109.99",
                  "FR": "149,99 €",
                  "AT": "109,99 €",
                  "ES": "109,99 €",
                  "PL": "339 zł",
                  "NL": "€ 119,99",
                  "IT": "129,99 €",
                  "PT": "109,99 €",
                  "SE": "655 kr",
                  "HU": "41 590 Ft-tól",
                  "DK": "269 kr.",
                  "CZ": "2 209 Kč",
                  "FI": "119,99 €",
                  "NO": "1 499 kr",
                  "SK": "89,99 €",
                  "BEFR": "119,99 €",
                  "BENL": "119,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category11.png",
              },
              href: "https://www.beliani.ch/rugs/",
              name: "Rugs",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "29.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£19.99",
                  "FR": "39,99 €",
                  "AT": "29,99 €",
                  "ES": "29,99 €",
                  "PL": "49 zł",
                  "NL": "€ 39,99",
                  "IT": "29,99 €",
                  "PT": "19,99 €",
                  "SE": "305 kr",
                  "HU": "5 290 Ft-tól",
                  "DK": "199 kr.",
                  "CZ": "389 Kč",
                  "FI": "39,99 €",
                  "NO": "469 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category12.png",
              },
              href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              name: "Accessories",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "39.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£29.99",
                  "FR": "39,99 €",
                  "AT": "39,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 39,99",
                  "IT": "19,99 €",
                  "PT": "29,99 €",
                  "SE": "415 kr",
                  "HU": "9 190 Ft-tól",
                  "DK": "239 kr.",
                  "CZ": "389 Kč",
                  "FI": "39,99 €",
                  "NO": "619 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014.gif",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241002b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "14.10.24 - October peak second - Monday!",
              tableRange: "13",
              name: "intro",
              fallback: [
                "This is time limited offer. Valid only until 27th of October.",
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "14.10.24 - October peak second - Monday!",
              tableRange: "31:32",
              name: "condition",
              fallback: [
                'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
                'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.'
              ]
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesRowsLinePriceTitle,
          css: types.CSS.LP,
          background: "#ffccb7",
          categories: [
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category1.png",
              },
              href: "https://www.beliani.ch/sofas/",
              name: "Sofas",
              type: "no_products",
              "price": {
                "CHDE": "169.99 Fr.",
                "CHFR": "189.99 Fr.",
                "DE": "199,99 €",
                "UK": "£149.99",
                "FR": "209,99 €",
                "AT": "249,99 €",
                "ES": "199,99 €",
                "PL": "559 zł",
                "NL": "€ 219,99",
                "IT": "179,99 €",
                "PT": "169,99 €",
                "SE": "2 405 kr",
                "HU": "92 190 Ft-tól",
                "DK": "1.669 kr.",
                "CZ": "4 229 Kč",
                "FI": "269,99 €",
                "NO": "2 209 kr",
                "SK": "239,99 €",
                "BEFR": "199,99 €",
                "BENL": "199,99 €"
              }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category2.png",
              },
              href: "https://www.beliani.ch/beds/",
              name: "Beds",
              type: "no_products",
                "price": {
                  "CHDE": "119.99 Fr.",
                  "CHFR": "129.99 Fr.",
                  "DE": "99,99 €",
                  "UK": "£109.99",
                  "FR": "109,99 €",
                  "AT": "109,99 €",
                  "ES": "99,99 €",
                  "PL": "399 zł",
                  "NL": "€ 119,99",
                  "IT": "119,99 €",
                  "PT": "89,99 €",
                  "SE": "1 295 kr",
                  "HU": "44 790 Ft-tól",
                  "DK": "829 kr.",
                  "CZ": "2 019 Kč",
                  "FI": "119,99 €",
                  "NO": "1 579 kr",
                  "SK": "109,99 €",
                  "BEFR": "119,99 €",
                  "BENL": "119,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category3.png",
              },
              href: "https://www.beliani.ch/armchairs/",
              name: "Armchairs",
              type: "no_products",
                "price": {
                  "CHDE": "69.99 Fr.",
                  "CHFR": "69.99 Fr.",
                  "DE": "49,99 €",
                  "UK": "£49.99",
                  "FR": "59,99 €",
                  "AT": "49,99 €",
                  "ES": "129,99 €",
                  "PL": "159 zł",
                  "NL": "€ 59,99",
                  "IT": "59,99 €",
                  "PT": "49,99 €",
                  "SE": "615 kr",
                  "HU": "18 750 Ft-tól",
                  "DK": "379 kr.",
                  "CZ": "959 Kč",
                  "FI": "59,99 €",
                  "NO": "929 kr",
                  "SK": "49,99 €",
                  "BEFR": "59,99 €",
                  "BENL": "59,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category4.png",
              },
              href: "https://www.beliani.ch/chairs/",
              name: "Chairs",
              type: "no_products",
                "price": {
                  "CHDE": "69.99 Fr.",
                  "CHFR": "79.99 Fr.",
                  "DE": "69,99 €",
                  "UK": "£69.99",
                  "FR": "69,99 €",
                  "AT": "79,99 €",
                  "ES": "89,99 €",
                  "PL": "229 zł",
                  "NL": "€ 79,99",
                  "IT": "79,99 €",
                  "PT": "79,99 €",
                  "SE": "805 kr",
                  "HU": "31 790 Ft-tól",
                  "DK": "509 kr.",
                  "CZ": "1 479 Kč",
                  "FI": "79,99 €",
                  "NO": "1 179 kr",
                  "SK": "59,99 €",
                  "BEFR": "69,99 €",
                  "BENL": "69,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category5.png",
              },
              href: "https://www.beliani.ch/tables/",
              name: "Tables",
              type: "no_products",
                "price": {
                  "CHDE": "49.99 Fr.",
                  "CHFR": "49.99 Fr.",
                  "DE": "49,99 €",
                  "UK": "£49.99",
                  "FR": "49,99 €",
                  "AT": "49,99 €",
                  "ES": "59,99 €",
                  "PL": "129 zł",
                  "NL": "€ 49,99",
                  "IT": "49,99 €",
                  "PT": "49,99 €",
                  "SE": "595 kr",
                  "HU": "15 790 Ft-tól",
                  "DK": "319 kr.",
                  "CZ": "779 Kč",
                  "FI": "59,99 €",
                  "NO": "849 kr",
                  "SK": "39,99 €",
                  "BEFR": "49,99 €",
                  "BENL": "49,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category6.png",
              },
              href: "https://www.beliani.ch/storage/",
              name: "Storage",
              type: "no_products",
                "price": {
                  "CHDE": "39.99 Fr.",
                  "CHFR": "49.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£39.99",
                  "FR": "49,99 €",
                  "AT": "39,99 €",
                  "ES": "49,99 €",
                  "PL": "89 zł",
                  "NL": "€ 39,99",
                  "IT": "39,99 €",
                  "PT": "29,99 €",
                  "SE": "505 kr",
                  "HU": "11 410 Ft-tól",
                  "DK": "309 kr.",
                  "CZ": "669 Kč",
                  "FI": "49,99 €",
                  "NO": "739 kr",
                  "SK": "29,99 €",
                  "BEFR": "39,99 €",
                  "BENL": "39,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category7.png",
              },
              href: "https://www.beliani.ch/textiles/",
              name: "Textiles",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "29.99 Fr.",
                  "DE": "19,99 €",
                  "UK": "£29.99",
                  "FR": "29,99 €",
                  "AT": "29,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 29,99",
                  "IT": "19,99 €",
                  "PT": "19,99 €",
                  "SE": "365 kr",
                  "HU": "6 890 Ft-tól",
                  "DK": "169 kr.",
                  "CZ": "439 Kč",
                  "FI": "39,99 €",
                  "NO": "529 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category8.png",
              },
              href: "https://www.beliani.ch/lighting/",
              name: "Lighting",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "39.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£29.99",
                  "FR": "39,99 €",
                  "AT": "39,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 39,99",
                  "IT": "29,99 €",
                  "PT": "29,99 €",
                  "SE": "425 kr",
                  "HU": "9 690 Ft-tól",
                  "DK": "249 kr.",
                  "CZ": "669 Kč",
                  "FI": "49,99 €",
                  "NO": "809 kr",
                  "SK": "29,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category9.png",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              name: "Bathtubs",
              type: "no_products",
                "price": {
                  "CHDE": "729.99 Fr.",
                  "CHFR": "919.99 Fr.",
                  "DE": "779,99 €",
                  "UK": "£609.99",
                  "FR": "819,99 €",
                  "AT": "889,99 €",
                  "ES": "729,99 €",
                  "PL": "2 679 zł",
                  "NL": "€ 849,99",
                  "IT": "909,99 €",
                  "PT": "749,99 €",
                  "SE": "8 875 kr",
                  "HU": "334 560 Ft-tól",
                  "DK": "189 kr.",
                  "CZ": "19 199 Kč",
                  "FI": "919,99 €",
                  "NO": "12 099 kr",
                  "SK": "719,99 €",
                  "BEFR": "759,99 €",
                  "BENL": "759,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category10.png",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              name: "Desks",
              type: "no_products",
                "price": {
                  "CHDE": "129.99 Fr.",
                  "CHFR": "149.99 Fr.",
                  "DE": "109,99 €",
                  "UK": "£109.99",
                  "FR": "149,99 €",
                  "AT": "109,99 €",
                  "ES": "109,99 €",
                  "PL": "339 zł",
                  "NL": "€ 119,99",
                  "IT": "129,99 €",
                  "PT": "109,99 €",
                  "SE": "655 kr",
                  "HU": "41 590 Ft-tól",
                  "DK": "269 kr.",
                  "CZ": "2 209 Kč",
                  "FI": "119,99 €",
                  "NO": "1 499 kr",
                  "SK": "89,99 €",
                  "BEFR": "119,99 €",
                  "BENL": "119,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category11.png",
              },
              href: "https://www.beliani.ch/rugs/",
              name: "Rugs",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "29.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£19.99",
                  "FR": "39,99 €",
                  "AT": "29,99 €",
                  "ES": "29,99 €",
                  "PL": "49 zł",
                  "NL": "€ 39,99",
                  "IT": "29,99 €",
                  "PT": "19,99 €",
                  "SE": "305 kr",
                  "HU": "5 290 Ft-tól",
                  "DK": "199 kr.",
                  "CZ": "389 Kč",
                  "FI": "39,99 €",
                  "NO": "469 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014Category12.png",
              },
              href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              name: "Accessories",
              type: "no_products",
                "price": {
                  "CHDE": "29.99 Fr.",
                  "CHFR": "39.99 Fr.",
                  "DE": "29,99 €",
                  "UK": "£29.99",
                  "FR": "39,99 €",
                  "AT": "39,99 €",
                  "ES": "39,99 €",
                  "PL": "59 zł",
                  "NL": "€ 39,99",
                  "IT": "19,99 €",
                  "PT": "29,99 €",
                  "SE": "415 kr",
                  "HU": "9 190 Ft-tól",
                  "DK": "239 kr.",
                  "CZ": "389 Kč",
                  "FI": "39,99 €",
                  "NO": "619 kr",
                  "SK": "19,99 €",
                  "BEFR": "29,99 €",
                  "BENL": "29,99 €"
                }
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241014.gif",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241003b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-02",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241002b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "14.10.24 - October peak second - Monday!",
              tableRange: "13",
              name: "intro",
              fallback: [
                "This is time limited offer. Valid only until 27th of October.",
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "14.10.24 - October peak second - Monday!",
              tableRange: "31:32",
              name: "condition",
              fallback: [
                'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
                'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.'
              ]
            },
          ],
        },
      ],
    }),
    new Campaign({
      startId: "27121",
      name: "October peak third",
      date: "2024.10.21",
      issueCardId: "303128",
      alarm: {
        isActive: false,
      },
      isArchive: false,
      optimizeImg: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          template: CategoriesRowsLine,
          background: "#dbd9d7",
          categories: [
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category1.png",
              },
              href: "https://www.beliani.ch/sofas/",
              name: "Sofas",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category2.png",
              },
              href: "https://www.beliani.ch/beds/",
              name: "Beds",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category3.png",
              },
              href: "https://www.beliani.ch/armchairs/",
              name: "Armchairs",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category4.png",
              },
              href: "https://www.beliani.ch/chairs/",
              name: "Chairs",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category5.png",
              },
              href: "https://www.beliani.ch/tables/",
              name: "Tables",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category6.png",
              },
              href: "https://www.beliani.ch/storage/",
              name: "Storage",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category7.png",
              },
              href: "https://www.beliani.ch/textiles/",
              name: "Textiles",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category8.png",
              },
              href: "https://www.beliani.ch/lighting/",
              name: "Lighting",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category9.png",
              },
              href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              name: "Bathtubs",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category10.png",
              },
              href: "https://www.beliani.ch/office-furniture/desks-eng/",
              name: "Desks",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category11.png",
              },
              href: "https://www.beliani.ch/rugs/",
              name: "Rugs",
              type: "no_products",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021Category12.png",
              },
              href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              name: "Accessories",
              type: "no_products",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-21",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-21",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241021gif.gif",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-11",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241011b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-10-10",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20241010b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "21.10.24 - October peak third - Monday!",
              tableRange: "13",
              name: "intro",
              fallback: [
                "This is time limited offer. Valid only until 27th of October.",
              ]
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "21.10.24 - October peak third - Monday!",
              tableRange: "33:34",
              name: "condition",
              fallback: [
                'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
                'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.'
              ]
            },
          ],
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: CategoriesRowsLine,
          background: "#ffccb7",
          css: types.CSS.LP,
          categories: [
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_04.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_05.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-accessories/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_06.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_07.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-spa/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_08.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_09.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_10.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-lights/",
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_11.jpg",
              },
              href: "https://www.beliani.ch/garden-furniture/kitchenware-tableware/",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240624_01.jpg",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-24",
              },
            },
            {
              value:
                "https://upload.pictureserver.net/static/2024/20240624gif.gif",
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-17",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240617b.png",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp24-06-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2024/20240614b.png",
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "24:29",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "30",
              name: "getCodes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "33",
              name: "codes",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "31",
              name: "offerDate",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "44",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Voucher - 24.06.24 - Garden!",
              tableRange: "46:47",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
      ],
    }),
  ],
  shops: SHOPS,
  config: {
    campaign_url: "https://www.prologistics.info/news_email.php?id=",
    issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
    alarm_days: 7,
  },
});
