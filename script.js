
//     fetch('https://api.kanye.rest')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     displayQuote(data)
//   });


//   function displayQuote(data) {
//     const quote = data.quote;
//     const quoteDiv = document.getElementById("quote");
  

//   const quoteName = '"'+quote+'"';
//   const heading = document.createElement("p");

//   heading.innerHTML = quoteName;
//   quoteDiv.appendChild(heading);
//   }
// //   document.getElementById('data').innerHTML

 

// fetch('https://zenquotes.io/api/quotes/')
// .then(response => response.json())
// .then(data => {
//   console.log(data)
//   displayQuote(data)
// });

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://zenquotes.io/api/quotes/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));