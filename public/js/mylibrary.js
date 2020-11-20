
$(document).ready(function(){

    $.cookie('bookname', $(".bookSearch").val());

    $("#search").click(
        function() {
            console.log("clicked...waiting...");
    
            setTimeout(
                function() {
                    alert("조금만 기다려주세요");
                    location.href='/bookpage';
                },3000);
        },
    );

});
