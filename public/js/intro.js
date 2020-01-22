

var currentTab = 1; 

showTab(currentTab) 


function showTab(n) {

    if(n == 1){
        $('#tab1').show();
        $('#tab2').hide();
        $('#tab3').hide();
    }else if(n == 2){
        $('#tab1').hide();
        $('#tab2').show();
        $('#tab3').hide();
    }else if(n == 3){
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').show();
    }

    if (n == 0) {
        $('#prevBtn').hide();
    }else {
        $('#prevBtn').show();
    }
        
    if (n == 3) {
        $('#nextBtn').html("Submit");
    } else {
        $('#nextBtn').html("Next");
    }

    // fixStepIndicator(n)
}



function nextPrev(n) {
    
    // if (n == 1 && !validateForm()) return false; 

    currentTab = currentTab + n;
        
    if (currentTab == 4) {
          document.getElementById("regForm").submit();
          return false;
    }
        
    showTab(currentTab);
}


/*

$('#prevBtn').click(function() {
   
    if (n == 1 && !validateForm()) return false;
    
    if(currentTab == 1){
        x1.style.display = "none";
    }else if(currentTab == 2){
        x2.style.display = "none";    
    }else if(currentTab == 3){
        x3.style.display = "none";    
    }

    currentTab = currentTab - 1;
        
    if (currentTab == 4) {
          document.getElementById("regForm").submit();
          return false;
    }     
    showTab(currentTab);

});

$('#nextBtn').click(function() {
   
    if (n == 1 && !validateForm()) return false;
    
    if(currentTab == 1){
        x1.style.display = "none";
    }else if(currentTab == 2){
        x2.style.display = "none";    
    }else if(currentTab == 3){
        x3.style.display = "none";    
    }

    currentTab = currentTab + 1;
        
    if (currentTab == 4) {
          document.getElementById("regForm").submit();
          return false;
    }     
    showTab(currentTab);

});
*/