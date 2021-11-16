/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
window
  .fetch(url)
  // Conect to server
  .then(response => response.json())
  // process response and convert into JSON
  .then((responseJson) => {
    responseJson.data.forEach((item) => {
      // Create Image
      const image = document.createElement("img");
      document.body.appendChild(image);
      // Create Title
      const title = document.createElement("h2");
      document.body.appendChild(title);
      // Create price
      const price = document.createElement("div");
      document.body.appendChild(price);
  })
  })
  // JSON => Data => Web browser info rendering
