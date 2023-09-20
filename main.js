let quoteFetch = async () => {
  let res = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      var randomQuote = data[Math.floor(Math.random() * data.length)];
      console.log(randomQuote);
    });
};

quoteFetch();
