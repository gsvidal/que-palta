/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BASE_URL = "https://platzi-avo.vercel.app"
const url = `${BASE_URL}/api/avo`;

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price)
  return newPrice;
}

const appNode = document.querySelector("#app");
//web api
// Conect to server with async await
async function myFetch(){
  const r1 = await window.fetch(url);
  const r2 = await r1.json();

  const totalItems = [];

  r2.data.forEach((item) => {
    // Create Image
    const image = document.createElement("img");
    image.setAttribute("src", `${BASE_URL}${item.image}` );

    // Create Title
    const title = document.createElement("h2");
    title.className = "text-lg";
    title.textContent = item.name;

    // Create price
    const price = document.createElement("div");
    price.className = "text-gray-600";
    price.textContent = formatPrice(item.price);

    // Wrap price & title
    const priceAndTitle = document.createElement("div");
    priceAndTitle.className = "text-center md:text-left";
    priceAndTitle.append(title, price);

    // Wrap Img and priceAndTitle
    const card = document.createElement("div");
    card.className = "card md:flex bg-white rounded-lg p-6 hover:bg-gray-100";
    card.classList.add("shadow-lg");
    card.append(image, priceAndTitle);
    
    totalItems.push(card);

  })
  appNode.append(...totalItems);
}

myFetch();
