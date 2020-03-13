var text = "Introduction à (hier: oui un jour)";
var text2 = "La vieille fille sous le soleil mort";
var text3 = "c'est les vacances";

for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}
for(var j in text2) { 
    if(text2[j] === " ") {
      $(".wavetext2").append( $("<span>").html("&nbsp;") ); 
    } else {  
      $(".wavetext2").append( $("<span>").text(text2[j]) ); 
    }
  }
  for(var k in text3) { 
    if(text3[k] === " ") {
      $(".wavetext3").append( $("<span>").html("&nbsp;") ); 
    } else {  
      $(".wavetext3").append( $("<span>").text(text3[k]) ); 
    }
  }

