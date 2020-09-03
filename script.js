//jquery here    

$(document).ready(function(){


  var modalButtons = $('.painting');
  var modals = $('.modal');
  
  
  $(modalButtons).on('click', function(e) {
          toggleModals(e)  ;
          console.log('hi')
  })
  
  function toggleModals(e) {
    var element = $(e.target);
    console.log(e)
   
  
    var modalClass = element.attr('data-modal');
          var modalToOpen = $('.modal-' + modalClass);
          $(modals).removeClass('open ');
  
         $(modalToOpen).addClass('open ');      
  }

  $('.close').on('click', function(){ 
    $(modals).removeClass('open')
  });
  
  
  });

//javascript here

$('body').append(' <div id="loading"><img id="loading-image" src="assets/goutte.png" alt="Loading..." /><img id="loading-image" src="assets/goutte.png" alt="Loading..." /><img id="loading-image" src="assets/goutte.png" alt="Loading..." /></div>');
document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(removeLoader, 3000); //wait for page load 
});
function removeLoader(){
    $( "#loading" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loading" ).remove(); //makes page more lightweight 
  });  
}

window.addEventListener("load", function load() {
  document.getElementById("defaultOpen").click();
  });

  function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
    
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  

var text = "Eugènie Zély";
var vacstitre1 = "C'est les vacances, 2019-2020";
var vacsfilm="Un film";
var vacsperf='Une performance';
var hiertitre1 = "Hier, oui : un jour, 2018 - 2019";
var hier1="Introduction à (hier : oui, un jour)";
var hier2="Quelqu’un d’autre que moi va payer pour cette journée-là";
var hier3="Conclusion pour (hier : oui, un jour)";
var hier4="**après avoir pleuré on se mouche";
var vieille="La Vieille Fille sous le Soleil Mort";
var writing="Writing as Reading as Listening as Remembering as Thinking as Living";
var unbox="Some plans to unbox reality";
var nappe="A crying tablecloth to make reality viewable";
var moyenne = "Une année moyenne";
var ep="Des chansons simples sur le sentiment amoureux";
var men1 = "Works";
var men2 = "Digital paintings (Lili Briscoe)";
var men3 = "Publications";
var men4 = "CV";
var men5 = "Portfolio";
var men6="E-mail";
var men7 = "Instagram";

for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}

for(var j in vacstitre1) { 
  if(vacstitre1[j] === " ") {
    $(".titre-wave").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre-wave").append( $("<span>").text(vacstitre1[j]) ); 
  }
}

for(var k in vacsfilm) { 
  if(vacsfilm[k] === " ") {
    $(".tititre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".tititre").append( $("<span>").text(vacsfilm[k]) ); 
  }
}


for(var l in vacsperf) { 
  if(vacsperf[l] === " ") {
    $(".tititre2").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".tititre2").append( $("<span>").text(vacsperf[l]) ); 
  }
}

for(var k in hiertitre1) { 
  if(hiertitre1[k] === " ") {
    $(".titre2-wave").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre2-wave").append( $("<span>").text(hiertitre1[k]) ); 
  }
}

for(var k in hier1) { 
  if(hier1[k] === " ") {
    $(".titre-hier").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre-hier").append( $("<span>").text(hier1[k]) ); 
  }
}
for(var k in hier2) { 
  if(hier2[k] === " ") {
    $(".titre-hier2").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre-hier2").append( $("<span>").text(hier2[k]) ); 
  }
}
for(var k in hier3) { 
  if(hier3[k] === " ") {
    $(".titre-hier3").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre-hier3").append( $("<span>").text(hier3[k]) ); 
  }
}
for(var k in hier4) { 
  if(hier4[k] === " ") {
    $(".titre-hier4").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".titre-hier4").append( $("<span>").text(hier4[k]) ); 
  }
}

for(var k in vieille) { 
  if(vieille[k] === " ") {
    $(".vieille-fille").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".vieille-fille").append( $("<span>").text(vieille[k]) ); 
  }
}


for(var k in writing) { 
  if(writing[k] === " ") {
    $(".writing-titre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".writing-titre").append( $("<span>").text(writing[k]) ); 
  }
}

for(var k in unbox) { 
  if(unbox[k] === " ") {
    $(".unbox-titre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".unbox-titre").append( $("<span>").text(unbox[k]) ); 
  }
}


for(var k in nappe) { 
  if(nappe[k] === " ") {
    $(".tablecloth-titre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".tablecloth-titre").append( $("<span>").text(nappe[k]) ); 
  }
}

for(var k in moyenne) { 
  if(moyenne[k] === " ") {
    $(".moyenne-titre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".moyenne-titre").append( $("<span>").text(moyenne[k]) ); 
  }
}

for(var k in ep) { 
  if(ep[k] === " ") {
    $(".ep-titre").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".ep-titre").append( $("<span>").text(ep[k]) ); 
  }
}


for(var k in men1) { 
  if(men1[k] === " ") {
    $(".men1").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men1").append( $("<span>").text(men1[k]) ); 
  }
}


for(var k in men2) { 
  if(men2[k] === " ") {
    $(".men2").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men2").append( $("<span>").text(men2[k]) ); 
  }
}


for(var k in men3) { 
  if(men3[k] === " ") {
    $(".men3").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men3").append( $("<span>").text(men3[k]) ); 
  }
}



for(var k in men4) { 
  if(men4[k] === " ") {
    $(".men4").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men4").append( $("<span>").text(men4[k]) ); 
  }
}



for(var k in men5) { 
  if(men5[k] === " ") {
    $(".men5").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men5").append( $("<span>").text(men5[k]) ); 
  }
}



for(var k in men6) { 
  if(men6[k] === " ") {
    $(".men6").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men6").append( $("<span>").text(men6[k]) ); 
  }
}



for(var k in men7) { 
  if(men7[k] === " ") {
    $(".men7").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".men7").append( $("<span>").text(men7[k]) ); 
  }
}



