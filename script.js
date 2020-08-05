var text = "Eugenie Zely";
var vacstitre1 = "C'est les vacances, 2019-2020";
var vacsfilm="Un film";
var vacsperf='Une performance';

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


