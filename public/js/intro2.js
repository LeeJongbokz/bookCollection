import "../css/intro.css";

var currentTab = 1; 

showTab(currentTab) 


function showTab(n) {

    var x1 = document.getElementsById("tab1");
    var x2 = document.getElementsById("tab2");
    var x3 = document.getElementsById("tab3");

    if(n == 1){
        x1.style.display = "block";
    }else if(n == 2){
        x2.style.display = "block";
    }else if(n == 3){
        x3.style.display = "block";
    }

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    }else {
        document.getElementById("prevBtn").style.display = "inline";
    }
        
    if (n == 3) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) {
    
    if (n == 1 && !validateForm()) return false;
    
    if(currentTab == 1){
        x1.style.display = "none";
    }else if(currentTab == 2){
        x2.style.display = "none";    
    }else if(currentTab == 3){
        x3.style.display = "none";    
    }

    currentTab = currentTab + n;
        
    if (currentTab == 4) {
          document.getElementById("regForm").submit();
          return false;
    }
        
    showTab(currentTab);
}


function validateForm() {
        
    var x, y, i, valid = true;
        
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
    }
}
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
        
    return valid; 
}



function fixStepIndicator(n) {

        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        x[n].className += " active";

}




