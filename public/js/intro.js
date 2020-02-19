

$(function() {
    
    var currentTab = 1; 

    showTab(currentTab) 

    function showTab(n) {

        if(n == 1){
            $('#tab1').show();
            $('#tab2').hide();
            $('#regForm').css('left', 600);
            $('#regForm').css('width', 800);
            $('#regForm').css('height', 600);
        }else if(n == 2){
            $('#tab1').hide();
            $('#tab2').show();
            $('#regForm').css('left', 600);
            $('#regForm').css('width', 800);
            $('#regForm').css('height', 600);
        }
    }


    $('.prevBtn').click(function(e) {

        e.preventDefault();

        currentTab = currentTab - 1;
        
        if (currentTab == 4) {
              document.getElementById("regForm").submit();
              return false;
        }
            
        showTab(currentTab);     
    });

    $('.nextBtn').click(function(e) {

        e.preventDefault();

        currentTab = currentTab + 1;
        
        if (currentTab == 4) {
              document.getElementById("regForm").submit();
              return false;
        }
            
        showTab(currentTab);     
    });


    $(".check1").hide();
    $(".check2").hide();
    $(".check3").hide();
    $(".check4").hide();
    $('.done').hide();

    var intro_bookShelfUrl = localStorage.getItem('tempbookShelfUrl');
    console.log(intro_bookShelfUrl);

    $('.bookShelf1').click(function() {
        $(".check1").show();
        $(".check2").hide();
        $(".check3").hide();
        $(".check4").hide();
        $('.done').show();
        intro_bookShelfUrl = "https://media-assets.bookbub.com/wp-content/uploads/2016/12/373736f80f15ad4a4caca58003dada64.jpg";
        localStorage.setItem('intro_bookShelfUrl', intro_bookShelfUrl);
        console.log(intro_bookShelfUrl);
    });

    $('.bookShelf2').click(function() {
        $(".check1").hide();
        $(".check2").show();
        $(".check3").hide();
        $(".check4").hide();
        $('.done').show();
        intro_bookShelfUrl = "https://media-assets.bookbub.com/wp-content/uploads/2016/12/3af9acda1cf5c6d96c97e38eb8e9599d.jpg";
        localStorage.setItem('intro_bookShelfUrl', intro_bookShelfUrl);
        console.log(intro_bookShelfUrl);
    });

    $('.bookShelf3').click(function() {
        $(".check1").hide();
        $(".check2").hide();
        $(".check3").show();
        $(".check4").hide();
        $('.done').show();
        intro_bookShelfUrl = "https://media-assets.bookbub.com/wp-content/uploads/2016/12/535ed0fa6f7ff3ff06b0267ddd45b720.jpg";
        localStorage.setItem('intro_bookShelfUrl', intro_tempbookShelfUrl);
        console.log(intro_bookShelfUrl);
    });

    $('.bookShelf4').click(function() {
        $(".check1").hide();
        $(".check2").hide();
        $(".check3").hide();
        $(".check4").show();
        $('.done').show();
        intro_tempbookShelf = "https://t1.daumcdn.net/cfile/tistory/21251F48528C6E9934";
        localStorage.setItem('intro_bookShelfUrl', intro_tempbookShelfUrl);
        console.log(intro_bookShelfUrl);
    });

})



$(document).ready(function(){
        
    $("#search").click(function(e){

        e.preventDefault();

        $.ajax({    
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $('.bookSearch').val() },
            headers: {Authorization: "KakaoAK 78d32ce1cac5c4d2a998590338bef88d"}
        })
            .done(function( msg ) {
                $('.bookList').append("<img src='"+ msg.documents[0].thumbnail + "'/>");
                $('.bookNameList').append("<strong>" + msg.documents[0].title + "</strong>");
            });
        
        $('.bookStarList').append('<div class="my-rating"></div>');    

        $(".my-rating").starRating({
            starSize: 25,
            callback: function(currentRating, $el){
                // make a server call here
            }
        });
    });

    $(".done").click(function(e){

        e.preventDefault();
    
         

    });

});

