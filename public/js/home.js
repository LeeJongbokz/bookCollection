$(document).ready(function(){
        
    
    $("#submitbutton2").click(function(e){

        e.preventDefault();
        facebookLogin();
    });


});


fbAsyncInit = function(){
    FB.init({
      appId: "517541762243918",
      version: 'v2.5'
    });
}


function facebookLogin(){
    FB.getLoginStatus(function(response) {
        console.log(response);
    });
}
