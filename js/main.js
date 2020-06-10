$(document).ready(function() {
  var header = $("#header");
  var navBar = $("#navBar");

  var navLinksArray = [
    "<a href='index.html'><i class='fab fa-houzz'></i> Home</a>",
    "<a href='catalog.html'><i class='fas fa-tshirt'></i> Catalog</a>",
    "<a href='cart.html'><i class='fas fa-shopping-cart'></i> Cart</a>"
  ];
  console.log(navLinksArray);

  header.text("Flexbox & jQuery");

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
});
