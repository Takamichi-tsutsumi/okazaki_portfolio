$(function() {

  // var loop = setInterval(function() {
  //     //li先頭要素のクローンを作成
  //     var clone = $(".background-slide-loop li:first").clone(true);
  //     //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
  //     $(".background-slide-loop li:first").animate({
  //     marginRight : "-500px"
  //     }, {
  //     duration : 500,
  //     complete : function() {
  //         //処理完了時に先頭要素を削除
  //         $(".background-slide-loop li:first").remove();
  //         //クローンをliの最後に追加
  //         clone.clone(true).insertAfter($(".background-slide-loop li:last"));
  //     }
  //     });
  // }, 1500);

  var offset = 18;
  setInterval(function() {
    $(".background-slide-loop li").css("transform", "translateX(-" + offset + "%)");
    offset += 15;
    if (offset > 100) {
      var clone = $(".background-slide-loop li:first").clone(true);
      clone.clone(true).insertAfter($(".background-slide-loop li:last"));
// これをどこにいれればいいかわからない　消すとうまくいく
      $(".background-slide-loop li:first").remove();
    }
  }, 2000);
});
