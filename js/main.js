$(document).ready(function() {
  var header = $(".header");
  var navBar = $(".navBar");
  var catalogContent = $(".catalog-content");

  var navLinksArray = [
    "<a href='index.html'><i class='fab fa-houzz'></i> Home</a>",
    "<a href='catalog.html'><i class='fas fa-tshirt'></i> Catalog</a>",
    "<a href='cart.html'><i class='fas fa-shopping-cart'></i> Cart</a>"
  ];
  console.log(navLinksArray);

  // Heading text
  header.text("Flex-box & jQuery");

  // Building navbar link list
  for (var i = 0; i < navLinksArray.length; i++) {
    var navLinkList = $("<ul>");
    var navLinkItem = $("<li>");
    navLinkItem.addClass("navLink");
    console.log("Nav Array Item: ", navLinksArray[i], i);
    var Link = navLinkItem.html(navLinksArray[i]);
    console.log("LINK: ", Link);
    navLinkList.append(Link);
    navBar.append(navLinkList);
  }

  // Building catalog image content
  var catalog = [
    {
      name: "Travels",
      src: "./images/img_1.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_2.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_3.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_4.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_5.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_6.jpg",
      title: "grafitti"
    },
    {
      name: "Travels",
      src: "./images/img_7.jpg",
      title: "grafitti"
    }
  ];
  for (var i = 0; i < catalog.length; i++) {
    var img = $(
      `<img class='catalog-img' src='${catalog[i].src}' alt='${catalog[i].name}'>`
    );
    catalogContent.append(img);
  }
});
