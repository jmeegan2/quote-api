




  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    console.log(randomQuote);
    displayText(randomQuote)
  });

  // function displayText(randomQuote){
  //   const text = randomQuote.text;
  //   const textDiv = document.getElementById("quote")

  //   const textName = '"'+text+'"'
  //   const headingNew = document.createElement("p")

  //   headingNew.innerHTML = textName;
  //   textDiv.appendChild(headingNew)
  // }

  function displayText(randomQuote){
    const textDiv = document.getElementById("quote")
    const headingNew = document.createElement("p")
    headingNew.innerHTML = randomQuote.text;
    textDiv.appendChild(headingNew)
  }
  