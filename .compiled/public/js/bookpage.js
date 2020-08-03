"use strict";

$(document).ready(function () {
  currentID = 1;
  console.log($.cookie('bookname'));
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: $.cookie('bookname')
    },
    headers: {
      Authorization: "KakaoAK 78d32ce1cac5c4d2a998590338bef88d"
    }
  }).done(function (msg) {
    $('#bookCover').append("<img src='" + msg.documents[0].thumbnail + "'/>");
    $('#bookTitle').append("<strong>" + msg.documents[0].title + "</strong>");
    $('#bookWriter').append("<strong>" + msg.documents[0].authors + "</strong>");
    $('#bookDescription').append("<strong>" + msg.documents[0].contents + "</strong>");
  });
  $('#bookReviewBox').hide();
  $("#bookReviewSubmit").click(function () {
    var bookreview = document.getElementById('bookReview').innerHTML;
    var $newDiv = $('<div>');
    $newDiv.attr("id", currentID);
    $newDiv.innerHTML = bookreview;
    $newDiv.css('width', '600px');
    $newDiv.css('height', '400px');
    $newDiv.css('border-style', 'solid');
    $newDiv.css('margin-top', '20px');
    $newDiv.css('margin-left', '180px');
    $('#bookReviews').append($newDiv);
    $('#bookReviews').append($newDiv.innerHTML);
    currentID += 1;
  });
});
//# sourceMappingURL=bookpage.js.map