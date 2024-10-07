export const Paragraph = ({ text, align = "center" }) => {
    
  return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tbody>
            <tr>
                <td align="${align}">
                    <span class="newsletterParagraph">
                        ${text}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;
};
