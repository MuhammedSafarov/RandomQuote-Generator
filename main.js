var generateBtn = document.querySelector("#generate-btn");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");

let quoteFetch = async () => {
  quote.innerHTML = "";
  author.innerHTML = "";
  let res = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomQuote = data[Math.floor(Math.random() * data.length)];
      quote.innerHTML += randomQuote.text;
      author.innerHTML += randomQuote.author;
    });
};

generateBtn.addEventListener("click", quoteFetch);
