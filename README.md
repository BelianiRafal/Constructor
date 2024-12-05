## Shortcuts

```CTRL + D``` Select all\
```CTRL + ALT``` + I Increment\
```ALT + SHIFT``` + F Prettier\
```SHIFT + ALT``` + ARROW LEFT/RIGHT Select to the end of the string

## API DOCUMENTATION: How to fetch spreadsheet data
#### https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values
#### path: api/fetchTranslations.js
Function ```getTranslations```\responsible for fetching translation for every tableQuery provided in app.js file. But before making it app modify in proper look tableRange by splitting it and concataneta backwards with country column provided in config/shops.js


## How to setup global function to acces it everywhere
1. Open index.html file
2. Create ```<script></script>``` tag BEFORE ```<script type="module" src="app.js"></script>``` tag.
3. Now, everything that will be defined inside script is accessible globally across whole app.

Example:
```
    <script>
      const name = "Me"
    </script>
    <script type="module" src="app.js"></script>
  </body>
</html>
```


<!-- LOOP -->
## How to access last item in loop
index === [array_item_name].length - 1

Example:
${
    categories.map((item, idx) => {
        if (idx === categories.length - 1) {
            return ``;
        }
        return ``;
    }).join("")
}

Or use Iterate component which has 3 properties:
items       -> to iterate through
lastItemFn  -> function to render last item
itemFn      -> function to render each item

  EXAMPLE:
    ```Iterate({
      items: categories,
      itemFn: (item, index) => {
        return `
        <tr>
          <td class="newsletterContainer" style="background-color: ${background}; color: #000;">
            ${Category({
              type: "no_products",
              name: getCategoryTitle(item.name),
              href: getCategoryLink(item.href),
              src: item.src,
              color: item.color,
              cta: getPhrase("Shop now"),
            })}
            ${Space({ className: "newsletterBottom80px" })}
            ${Line()}
          </td>
        </tr>
        `;
      },
      lastItemFn: (item, index) => {
        return `
            <tr>
              <td class="newsletterContainer" style="background-color: ${background}; color: #000;">
                ${Category({
                  type: "no_products",
                  name: getCategoryTitle(item.name),
                  href: getCategoryLink(item.href),
                  src: item.src,
                  color: item.color,
                  cta: getPhrase("Shop now"),
                })}
                ${Space({ className: "newsletterBottom80px" })}
              </td>
            </tr>
         `;
      },
    })```
    
<!-- LOOP -->


## Template rendering happens inside main/initApp.js
From line 69 to 225.
There is a lot of checks, mutations with links, categories provided in app.js

## What not to do:
### Not change any values in components
If some value will ba changed in component, it can affect other templates,
campaigns. Instead, just copy current component and create new one. In order to make safe changes.

## Errors:
http://127.0.0.1:5500/templates/[file_name].js net::ERR_ABORTED 404 (Not Found)
-File name import not found.
-File doesn't exist.
-File ends on template_name but should template_name.js

## Set CLIENT ID to read values from spreadsheet
### path: utils/config.js
### url: https://console.cloud.google.com/apis/credentials

## Where Css and Types located
### path: utils/types.js

## Add new shop and language
### path: config/shops.js
### path: config/languages.js

## Create new template
1. Create file [template_name].js in template folder
2. Paste code below into created file
   export async function [template_name]({
   links,
   getCampaignData,
   getProductById,
   getCategoryLink,
   getCategoryTitle,
   getPhrase,
   getFooter,
   getHeader,
   queries,
   id,
   shop,
   utm,
   country,
   type,
   name,
   categories,
   background,
   }) {
    return `<p>template_name</p>`
   }

 3. Change [template_name] to your name -> 
 export async function MondayTemplate({
   links,
   getCampaignData,
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
   name,
   categories,
   background,
   }) {
    return `<p>MondayTemplate</p>`
   }
4. Add template import to /templates/index.js
5. Add template to templates object.
6. Use it in app.js file by accessing templates.[template_name]

## Entities:
### path: entities/shops.js
### description: Main problem why sometimes app doesn't work, because of lack provided data to render template, whether it is newsletter or landing page.
#### Since we all work on this version, where we have to change data inside application some problems may appear because of lack some code.
#### Entities allows us safely initialize each propery for campaign, template, tableQuery.
#### If something is wrong, notification will appear. If you don't know which property to define, by clicking Ctrl+Space you will get hint window.

### But you can always define everything as we do previously.

## To use in app.js
### Campaign -> to initialize campaign in app.js

### MondayFreebieNewsletter -> to initialize template with known properties
### MondayCategoryProducts -> to initialize categories for template in app.js

### OriginHref -> to initialize href that is based on origin
### SlugImage -> to initialize image that is based on slug
### TableQuery -> to initialize table query for tableQueries in app.js for template
### TableQueryHeader -> to initialize table query for Header spreadsheet
### TableQueryFooter -> to initialize table query for Header spreadsheet
### TableQueryTranslationTemplates -> to initialize table query for Header spreadsheet
### TableQueryCategoryLinks -> to initialize table query for Header spreadsheet
### TableQueryCategoryTitles -> to initialize table query for Header spreadsheet
### TemplateLinks -> to initialize Template Links in app.js for template
### Image -> to initialize image that is not based on nothing

## To use internally
### Language -> to initialize language for shops
### TableQueryCSV -> to initialize table query for tableQueries in app.js for template
### NewsletterTemplate -> to extend new Template (see) entities/Templates/Monday.js


## Campaign render flow
1. Define campaign using Campaign class in app.js file.
2. Add templates to campaign using Template classes or as always defined object by yourself.
  -Newsletter template should have type newsletter, wrapper field in newsletter responsible for adding: DOCTYPE, HEAD, TITLE, META tags and others (see: Where Css and Types located)
  -Landing template should have type landing (see: Where Css and Types located)
3. Run live server.
4. Select Campaign, Template, Seller, Country.

## Every template that will be rendered has access to:
{
links, -> links provided by user in app.js file for template
getCampaignData, -> function responsible for get Campaign data which is defined in app.js for Campaign object in hash CSV format.
getProductById, -> function responsible for get product by id
getCategoryLink, -> function responsible for get category link by ENG category
getCategoryTitle, -> function responsible for get category title by ENG category
getPhrase, -> function responsible for get translation template
getFooter, -> function responsible for get footer translations by ENG word
getHeader, -> function responsible for get header translations by ENG word
queries, -> object with properites that user defined in tableQueries array.
id, -> campaign id
shop, -> to see what properties available: config/shops.js
country, -> get access to rendered country
type, -> template type (newsletter or landing)
name, -> template name,
utm: -> tracking url with id,
categories, -> categories handled by app
background, -> background color | default #ffffff -> located in initApp.js | possibility to add user color in app.js for template.
}

## Update Footer, Header, Translation templates, Category Links, Category Titles
### path: main/data
By default app will read everything from this files.
If you want fetch it dynamically, define TableQuery using class or object manually.
Also you have ability to fetch Footer, Header, Category Links, Category Titles using classes.

## Example: TableQuery class
```tableQueries: [
    new TableQuery({
        tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
        tableName: "Voucher - 09.12.24 - Free wall decor!",
        tableRange: "37:39",
        name: "condition",
    })
]```
## Example: object manually
```tableQueries: [
    {
        tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
        tableName: "Voucher - 09.12.24 - Free wall decor!",
        tableRange: "37:39",
        name: "condition",
    }
]```
## Example: Footer, Header, Translation templates, Category Links, Category Titles
```tableQueries: [
    new TableQueryHeader(),
    new TableQueryFooter(),
    new TableQueryTranslationTemplates(),
    new TableQueryCategoryLinks(),
    new TableQueryCategoryTitles(),
]```
If Footer, Header, Translation templates, Category Links, Category Titles fetched dynamically
functions getHeader, getFooter, getPhrase wil use fetched data.
If not fetched dynamically will use local data which is located inside: main/data/[...].js

<!-- Campaign data -->

## Add campaign data
1. Open standart CSV compatable table (slugs should be UPPERCASE)
2. Copy values from spreadsheet from 1 row and column to last row last column
3. Open https://csvjson.com/csv2json select Hash option
4. Convert value to JSON
5. Add to app.js file

## Use campaign data in template
1. Check if function "getCampaignData" has been added in template
2. Call "getCampaignData" function with Column name parameter in template place where you want get result.

## Example 
# ${getCampaignData("Regular Conditions")}

<!-- Campaign data -->
