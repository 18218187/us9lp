function showPuzzle() {
    $(".puzzle").css("display", "block");
    $(".coub, .main").css("display", "none");
    $(".video").css("filter", "blur(20px)");
}
var hidden_items = [];

$('.hidden').on("click",function(event){
  var target = $(event.currentTarget);
  hidden_items.push(target);
  console.log(hidden_items);
  target.removeClass("hidden");
  checkLength();
  var clickme = event.currentTarget.querySelector('.clickme');
  $(clickme).css("display","none");
});
function checkLength(){
if (hidden_items.length == 3) {
 $(".puzzle").css("display", "none");
 $(".coub, .main").css("display", "block");
 };}