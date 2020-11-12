$.ajax({
    type: "GET",
    url: "https://graph.facebook.com/v9.0/me?fields=friends&access_token=EAAHWs5TlHU4BAAcOEMBSfIxlxUN76eAuO37vyZAFuXTxESSNE2igcxuu52FvVk0idPLUlGu4z2W2BVL5BN4Dk2cdUhCEGWMXrKYkdZBoU2NxZAGNFlLXtDnlHzVeZAVKhry3QqxJm2Rggft2cVRBbQB1Fh8VhfoOwt3ruTRWMPCAbbaAZBo6Ut7dQDEJ9mh0ZD",
    data: {},
    success: function(response){
      console.log(response)
    }
  })