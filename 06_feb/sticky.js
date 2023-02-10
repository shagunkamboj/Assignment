$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").show();
    })
    $(".close").click(function(){
        $("#myModal").hide();
    }
    )
  })
  
  $(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myModal2").show();
    })
    $(".close").click(function(){
        $("#myModal2").hide();
    }
    )
  })
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};
  
  // Get the navbar
  var navbr = document.getElementById("myheader");
  
  // Get the offset position of the navbar
  var sticky = navbr.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
  if (window.pageYOffset >= sticky) {
  navbr.classList.add("sticky")
  } else {
  navbr.classList.remove("sticky");
  }
  }