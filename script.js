"use strict";

function printPattern(rows) {
  const cols = 2 * rows - 1;
  const containerEl = document.querySelector(".pattern-container");
  let resHtmlStr = "";

  for (let i = 1; i <= rows; i++) {
    let resStr = "";
    for (let j = 1; j <= cols; j++) {
      if (j >= rows - (i - 1) && j <= rows + (i - 1)) {
        resStr += "<span>*</span>";
      } else {
        resStr += "<span>&nbsp;</span>";
      }
    }
    resHtmlStr += `<p>${resStr}</p>`;
  }
  containerEl.innerHTML = `${resHtmlStr}`;
}

printPattern(4);
