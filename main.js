var generateBtn = document.querySelector("#generate-btn");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");
var loader = document.querySelector(".loader");

let quoteFetch = async () => {
  quote.innerHTML = "";
  author.innerHTML = "";

  if (quote.innerHTML == "" && author.innerHTML == "") {
    loader.style.display = "inline-block";
  }

  let res = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";
      let randomQuote = data[Math.floor(Math.random() * data.length)];
      quote.innerHTML += randomQuote.text;
      author.innerHTML += "~ " + randomQuote.author;
    });
};

generateBtn.addEventListener("click", quoteFetch);
