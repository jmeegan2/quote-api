
    fetch('https://api.kanye.rest')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    displayQuote(data)
  });


  function displayQuote(data) {
    const quote = data.quote;
    const quoteDiv = document.getElementById("quote");
  

  const quoteName = '"'+quote+'"';
  const heading = document.createElement("p");

  heading.innerHTML = quoteName;
  quoteDiv.appendChild(heading);
  }
//   document.getElementById('data').innerHTML

 
