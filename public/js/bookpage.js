

$(document).ready(function(){

        console.log($.cookie('name'));

        $.ajax({    
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $.cookie('name') },
            headers: {Authorization: "KakaoAK 78d32ce1cac5c4d2a998590338bef88d"}
        })
            .done(function( msg ) {
                $('#bookCover').append("<img src='"+ msg.documents[0].thumbnail + "'/>");
                $('#bookTitle').append("<strong>" + msg.documents[0].title + "</strong>");
                $('#bookWriter').append("<strong>" + msg.documents[0].authors + "</strong>");
                $('#bookDescription').append("<strong>" + msg.documents[0].contents + "</strong>");
            });

        
        function open(){
            $('#bookReviewBox').show();     
        }    
  
        
});

 
    


