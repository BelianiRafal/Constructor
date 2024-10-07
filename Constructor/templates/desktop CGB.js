export async function desktop({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
}) {
  return `
    <div class="cgbContainer" style="background-color: #e7ebdf;">
      <div class="textContainer1">
        <p class="xyHeader1" style="margin: 0 0 12px 0!important;"><span>${getPhrase(
          "Up to"
        )}</br>${getPhrase("All tables")}</span></p>
        <p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 18px 0!important;"><span>${getField(
          queries.cgb,
          "Until"
        )}</span></p>
        <a href="${getCategoryLink("https://www.beliani.ch/garden-furniture/", {
          origin: false,
        })}"><p class="xyCTA" style="margin: 0!important;"><span>${getPhrase(
    "Cta"
  )}</span></p></a>
    </div>
    <a href="${getCategoryLink("https://www.beliani.ch/garden-furniture/", {
      origin: false,
    })}"><video style="max-width: 100%; vertical-align: middle;" autoplay="" loop="" muted="" playsinline="" disableremoteplayback="true" ><source src="https://dev.pictureserver.net/pic_storage/pic/fe/6a/german_src_banner_picid_10749_image.mp4?ver=1722498838" type="video/mp4"></video></a>
  </div>
  `;
}
