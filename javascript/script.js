document.querySelector("h1").addEventListener("click", changeColor);
let elemI = document.querySelector('i');
let elem = document.querySelector('i u');
let start;

function changeColor(){
  document.querySelectorAll("h1")[0].style.color = "#728FCE";
}

var $punchline = "Better watch out for those semi-colons";
// var contentId = ["profileContent","educationContent","skillsContent","experiencesContent","contact-meContent"];

// document.querySelectorAll("li a")[0].addEventListener("click", function(){
//   document.getElementById("profileContent").style.display = "block";
//   elem.setAttribute("style","display:none;");
//   showAboutMe();
//   clear();
// });
//
// document.querySelectorAll("li a")[1].addEventListener("click", function(){
//   document.getElementById("educationContent").style.display = "block";
//   elem.setAttribute("style","display:none;");
//   showEducation();
//   clear();
// });
//
// document.querySelectorAll("li a")[2].addEventListener("click", function(){
//   document.getElementById("skillsContent").style.display = "block";
//   elem.setAttribute("style","display:none;");
//   showSkills();
//   clear();
// });
//
// document.querySelectorAll("li a")[3].addEventListener("click", function(){
//   document.getElementById("experiencesContent").style.display = "block";
//   elem.setAttribute("style","display:none;");
//   showExperiences();
//   clear();
// });
//
// document.querySelectorAll("li a")[4].addEventListener("click", function(){
//   document.getElementById("contact-meContent").style.display = "block";
//   elem.setAttribute("style","display:none;");
//   showContact();
//   clear();
// });

// document.querySelectorAll("li a")[5].addEventListener("click", function(){
//   document.getElementById("drawingContent").style.display = "block";
//   showDrawing();
//   elem.classList.add("start");
//   elem.setAttribute("style","display:inline-block;");
//   window.requestAnimationFrame(debug);
// });

var contentId = ["profileContent","educationContent","skillsContent","experiencesContent","contact-meContent","drawingContent"];

for(var i = 0;i< contentId.length;i++){
  var currentContent = contentId[i];
  switch(currentContent){
    case "profileContent":
      document.querySelectorAll("li a")[i].addEventListener("click", showAboutMe);
      break;

    case "educationContent":
      document.querySelectorAll("li a")[i].addEventListener("click", showEducation);
      break;

    case "skillsContent":
      document.querySelectorAll("li a")[i].addEventListener("click", showSkills);
      break;

    case "experiencesContent":
      document.querySelectorAll("li a")[i].addEventListener("click", showExperiences);
      break;

    case "contact-meContent":
      document.querySelectorAll("li a")[i].addEventListener("click", showContact);
      break;

    case "drawingContent":
      // document.querySelectorAll("li a")[i].addEventListener("click", showDrawing);
      break;

    default: break;
  }
}

function showAboutMe(){
  document.getElementById("profileContent").style.display = "block";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
  document.getElementById("drawingContent").style.display = "none";
  elem.setAttribute("style","display:none;");
}

function showEducation(){
  document.getElementById("educationContent").style.display = "block";
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
  document.getElementById("drawingContent").style.display = "none";
  elem.setAttribute("style","display:none;");
}

function showSkills(){
  document.getElementById("skillsContent").style.display = "block";
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
  document.getElementById("drawingContent").style.display = "none";
  elem.setAttribute("style","display:none;");
}

function showExperiences(){
  document.getElementById("experiencesContent").style.display = "block";
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
  document.getElementById("drawingContent").style.display = "none";
  elem.setAttribute("style","display:none;");
}

function showContact(){
  document.getElementById("contact-meContent").style.display = "block";
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("drawingContent").style.display = "none";
  elem.setAttribute("style","display:none;");
}

function showDrawing(){
  document.getElementById("drawingContent").style.display = "block";
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";

  // clear();
  // // elemI.setAttribute("style","--x:650px; --y: 400px;");
  // elem.classList.add("start");
  // elem.setAttribute("style","display:inline-block;");
  // window.requestAnimationFrame(debug);
}

function debug(timestamp){
  if(start === undefined){
    start = timestamp;
  }
  const elapsed = timestamp - start;
  let rect = elem.getBoundingClientRect();

  document.querySelector('.drawing').insertAdjacentHTML("afterbegin",'<d style="top:'+(rect.y + rect.height/2) +'px;left:'+(rect.x + rect.width/2)+'px;"></d>');
  if(elapsed < 12000){
    window.requestAnimationFrame(debug);
  }
}

function clear() {
  document.querySelector('.drawing').innerHTML="";
  start=undefined;
}
