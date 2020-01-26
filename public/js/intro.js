
$(function() {


    var currentTab = 1; 

    showTab(currentTab) 

    function showTab(n) {

        if(n == 1){
            $('#tab1').show();
            $('#tab2').hide();
            $('#tab3').hide();
            $('#regForm').css('left', 750);
            $('#regForm').css('width', 500);
            $('#regForm').css('height', 500);
        }else if(n == 2){
            $('#tab1').hide();
            $('#tab2').show();
            $('#tab3').hide();
            $('#regForm').css('left', 750);
            $('#regForm').css('width', 500);
            $('#regForm').css('height', 500);
        }else if(n == 3){
            $('#tab1').hide();
            $('#tab2').hide();
            $('#tab3').show();
            $('#regForm').css('left', 650);
            $('#regForm').css('width', 700);
            $('#regForm').css('height', 600);
            $('.prevBtn').css('line-height', 35);
            $('.nextBtn').css('line-height', 35);
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





