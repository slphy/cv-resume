document.querySelector("h1").addEventListener("click", changeColor);

function changeColor(){
  document.querySelectorAll("h1")[0].style.color = "#728FCE";
}

var $punchline = "Better watch out for those semi-colons";
// var contentId = ["profileContent","educationContent","skillsContent","experiencesContent","contact-meContent"];

document.querySelectorAll("li a")[0].addEventListener("click", function(){
  document.getElementById("profileContent").style.display = "block";
  showAboutMe();
});

document.querySelectorAll("li a")[1].addEventListener("click", function(){
  document.getElementById("educationContent").style.display = "block";
  showEducation();
});

document.querySelectorAll("li a")[2].addEventListener("click", function(){
  document.getElementById("skillsContent").style.display = "block";
  showSkills();
});

document.querySelectorAll("li a")[3].addEventListener("click", function(){
  document.getElementById("experiencesContent").style.display = "block";
  showExperiences();
});

document.querySelectorAll("li a")[4].addEventListener("click", function(){
  document.getElementById("contact-meContent").style.display = "block";
  showContact();
});

// for(var i = 0; i<6; i++){
//   document.querySelectorAll("li a")[i].addEventListener("click", function(){
//     var contentId = ["profileContent","educationContent","skillsContent","experiencesContent","contact-meContent"];
//
//       switch(contentId){
//         case "profileContent":
//           document.getElementById("profileContent").style.display = "block";
//           showAboutMe();
//         break;
//
//         case "educationContent":
//           document.getElementById("educationContent").style.display = "block";
//           showEducation();
//         break;
//
//         case "skillsContent":
//           document.getElementById("skillsContent").style.display = "block";
//           showSkills();
//         break;
//
//         case "experiencesContent":
//           document.getElementById("experiencesContent").style.display = "block";
//           showExperiences();
//         break;
//
//         case "contact-meContent":
//           document.getElementById("contact-meContent").style.display = "block";
//           showContact();
//         break;
//
//         default: console.log(contentId);
//       }
//
//   });
// }

function showAboutMe(){
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
}

function showEducation(){
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
}

function showSkills(){
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
}

function showExperiences(){
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("contact-meContent").style.display = "none";
}

function showContact(){
  document.getElementById("profileContent").style.display = "none";
  document.getElementById("educationContent").style.display = "none";
  document.getElementById("skillsContent").style.display = "none";
  document.getElementById("experiencesContent").style.display = "none";
}
