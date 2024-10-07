# Available configuration options:

## startId: REQUIRED string

It is id of Parent campaign. Chde created first (it is parent campaign) and than the rest one by clicking on the button "Add Newsletter Family"

countries: By default constructor will create ID in that ordering
"CHDE", id 1
"CHFR", id 2
"AT", id 3
"CZ", id 4
"DE", id 5 and ...
"DK",
"FI",
"FR",
"HU",
"IT",
"NL",
"NO",
"PL",
"PT",
"SE",
"SK",
"ES",
"UK" id: 18
Which is fit for almost every situation.
### But if you want to change ordering. You have to specify the following:
Example:
countries: [
"CHDE",
"FR",
"HU",
"IT",
"NL",
"NO",
"PL",
"PT",
"SE",
"SK",
"ES",
"UK",
"CHFR",
"AT",
"CZ",
"DE",
"DK",
"FI",
]

## Categories REQUIRED depending from template

categories: [
  {
    name: "Living room",
    background: "#ffccb7",
    src: "https://upload.pictureserver.net/static/2024/20240923Category1.png",
    href: "https://www.beliani.ch/living-room-furniture/",
    products: []
  },
]

name: string - Category title
background: string - Category background color
color: string - Category text color
src: string - Category src
href: string - Category href image and cta

**Properties depends from template**

products: [
  {
    id: "185320",
    src: "https://upload.pictureserver.net/static/2024/20240923Category11.png",
  },
],

id: string - product main_id
src: string - product image

## Freebies REQUIRED depending from template
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

## links: REQUIRED depending from template

You have to specify the links in order to start the application.
example:
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
      ]

## tableQueries: OPTIONAL array
#### if not provided translations data will be used from data/text.js

If you want get translations form spreadsheets.
Object keys: tableId, tableName, tableRange, name is **REQUIRED** name of these keys **cannot** be changed. ***tableColumns: false*** and ***tableRange: "?majorDimension=COLUMNS"*** should be used for **CSV** tables
Example:
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

## Campaign fields

> Campaign
{
  startId: "26058",
  name: "Newsletter Cushion pyramid",
  date: "2024.08.26",
  issueCardId: "299656",
  optimizeImg: true,
  templates: []
}

startId - id of CHDE campaign (in case newsletter family used)
name - campaign name
date - date newsletter to be done
issueCardId - id of issue card 
optimizeImg - true or false DEFAULT false if value not provided. (app only change image extension to (**IMAGE WILL NOT BE CONVERTED**) .webp if using Image or ImageWithLink component.)
templates
  -newsletter
  -landing

> Newsletter
{
  name: "Newsletter",
  type: types.NEWSLETTER,
  template: Sunday,
  wrapper: types.WRAPPER,
  css: types.CSS.NS,
  links: [],
  tableQueries: []
}
name - template name
type - *newsletter* type or *landing*
template - template file *Monday.js*
wrapper - head, body tags wrapper for *newsletter* type
css: - styles for *newsletter* or *landing*
links - described above
tableQueries - described above

## Components
ImageWithLink
Image
Space
Intro
Category

can be conditionaly rendering using is_active
**newsletter.js**
$
${Category({
  href:
    typeof categories[0].href === "object"
      ? categories[0].href[country]
      : getCategory(categories[0].href),
  name: getField(queries.categories, categories[0].name),
  src: categories[0].src,
  cta: getField(queries.templates, "Shop now"),
  color: categories[0]?.color,
  type: "monday",
  products: categories[0].products.map((item) =>
    getProductById(item.id, item.src)
  ),

  ***is_active: country === "DE"***
})}

## Shortcuts

CTRL + D Select all
CTRL + ALT + I Increment
ALT + SHIFT + F Prettier
SHIFT + ALT + ARROW LEFT/RIGHT Select to the end of the string
