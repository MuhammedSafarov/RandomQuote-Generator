let generateBtn = document.querySelector("#generate-btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
const url = "https://type.fit/api/quotes";
let storage = null;

let quoteFetch = async () => {
  if (quote.innerHTML == "" && author.innerHTML == "") {
  }
  let res = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("quotes", JSON.stringify(data));
    });
};
quoteFetch();

storage = JSON.parse(localStorage.getItem("quotes"));

let eventHandler = () => {
  quote.innerHTML = "";
  author.innerHTML = "";
  var randomQuote = storage[Math.floor(Math.random() * storage.length)];
  quote.innerHTML += randomQuote.text;
  author.innerHTML += "~ " + randomQuote.author;
};

generateBtn.addEventListener("click", eventHandler);
