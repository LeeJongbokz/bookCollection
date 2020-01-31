

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
            $('.prevBtn').css('line-height', 35);
            $('.nextBtn').css('line-height', 35);
        }else if(n == 2){
            $('#tab1').hide();
            $('#tab2').show();
            $('#regForm').css('left', 750);
            $('#regForm').css('width', 500);
            $('#regForm').css('height', 500);
        }

        if (n == 1) {
            $('.prevBtn').hide();
        }else {
            $('.prevBtn').show();
        }
            
        if (n == 3) {
            $('.nextBtn').html("제출");
        } else {
            $('.nextBtn').html("다음");
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
                console.log(msg.documents[0].title);
                console.log(msg.documents[0].thumbnail);
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

 
    

});

