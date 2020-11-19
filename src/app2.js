import "./app2.css";
import $ from "jquery";
console.log("hi");
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget); //获取li
  const index = $li.index();
  console.log(index);
  $li.addClass("selected").siblings().removeClass("selected");
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tabBar.children().eq(0).trigger("click");
