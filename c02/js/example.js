let greeting = "안녕하세요.";
let names = "왕유린";
let message = "주문 내역을 확인해주세요.";

let welcome = greeting + names + message;

let sign = "Montage House";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

let el = document.getElementById("greeting");
el.textContent = welcome;

let elSign = document.getElementById("userSign");
elSign.textContent = sign;

let elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

let elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = subTotal;

elSubTotal = document.getElementById("shipping");
elSubTotal.textContent = tiles;

let elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = grandTotal;
