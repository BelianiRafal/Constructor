import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";

export const ImageWithLink = isAllowToRender(
  optimize(({ href, src, alt = "" }) => {
    // const imageBuilder = ImageBuilder();
    // imageBuilder
    //   .setSrc(src)
    //   .setAlt(alt)
    //   .setFallback(
    //     "https://placehold.co/610x270/cccccc/ffffff?font=open-sans&text=Banner%201"
    //   )
    //   .setStyle("vertical-align: middle; max-width: 100%;");

    // const img = CreateImage(imageBuilder.build());
    // document.body.append(img)
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td>
                    <a href="${href}">
                        <img alt="${alt}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);

class Image {
  src = {
    value: "",
    fallback: "",
  }
  alt;
  style;
  loading = "lazy";
  constructor(img) {
    this.alt = img?.alt || "";
    this.src = img?.src || {
      value: "",
      fallback: "",
    };
    this.style = img?.style || "";
  }
}

function CreateImage(img) {
  const _img = new Image(img);
  const image = document.createElement("img");
  image.addEventListener("error", (ev) => {
    console.log(ev.target)
  })
  image.setAttribute("alt", _img.alt);
  image.setAttribute("src", _img.src.value);
  image.setAttribute("style", _img.style);
  image.setAttribute("loading", _img.loading);
  return image;
}

function ImageBuilder() {
  const image = new Image();
  return {
    setSrc(src) {
      image["src"]["value"] = src;
      return this;
    },
    setFallback(fallback) {
      image["src"]["fallback"] = fallback;
      return this;
    },
    setAlt(alt) {
      image["alt"] = alt;
      return this;
    },
    setStyle(style) {
      image["style"] = style;
      return this;
    },
    build() {
      return image;
    },
  };
}
