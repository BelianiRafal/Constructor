
export const Title = ({title, color, align = "left"}) => {
    return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <tbody>
          <tr>
              <td align="${align}">
                  <span class="newsletterTitle" style="color: ${color || "#000000"}">
                      ${title}
                  </span>
              </td>
          </tr>
      </tbody>
  </table>
  `;
};
