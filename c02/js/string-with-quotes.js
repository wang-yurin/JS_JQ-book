let title;
let message;
title = "Yurin Wang의 특별한 제안";
message = `<a href=\'sale.html\'>25% 할인!</a>`;

let elTitle = document.getElementById("title");
elTitle.textContent = title;
let elNote = document.getElementById("note");
elNote.innerHTML = message;
