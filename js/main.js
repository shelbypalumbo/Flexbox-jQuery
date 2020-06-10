$(document).ready(function() {
  var header = $("#header");
  var navBar = $("#navBar");

  var navLinksArray = ["Home", "Catalog", "Cart"];
  console.log(navLinksArray);

  header.text("Flexbox & jQuery");

  for (var i = 0; i < navLinksArray.length; i++) {
    var navLinkList = $("<ul>");
    var navLinkItem = $("<li>");
    navLinkItem.addClass("navLink");
    console.log("Nav Array Item: ", navLinksArray[i], i);
    var Link = navLinkItem.html(
      `<a href=${navLinksArray[i] + ".html"}>${navLinksArray[i]}</a>`
    );
    console.log("LINK: ", Link);
    navLinkList.append(Link);
    navBar.append(navLinkList);
  }
});
