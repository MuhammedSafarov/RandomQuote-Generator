let generateBtn = document.querySelector("#generate-btn");

let quoteFetch = async () => {
  let res = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      var randomQuote = data[Math.floor(Math.random() * data.length)];
      console.log(randomQuote);
    });
};

generateBtn.addEventListener("click", quoteFetch);

