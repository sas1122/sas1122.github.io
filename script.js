function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

//Projects: toggle between project description and project name when hovered over
var element = document.getElementsByClassName("project")[1];

element.addEventListener("mouseover", ()=>{
  var projName = element.getElementsByClassName("proj-name")[0];
  var projDesc = element.getElementsByClassName("proj-description")[0];
  projName.style.display = "None";
  projDesc.style.display = "block";
})

element.addEventListener("mouseout", ()=>{
  var projName = element.getElementsByClassName("proj-name")[0];
  var projDesc = element.getElementsByClassName("proj-description")[0];
  projName.style.display = "block";
  projDesc.style.display = "None";
})


//Toggle project overlay
window.onload = ()=>{
  var projects = ["checkup", "spacebaby", "thiswebsite", "grammyrun", "mlspotify", "spacebaby"];

  for(var i = 0; i < projects.length; i++){
    var name = projects[i];
    var prev_name = name + "preview";


    var element = document.getElementById(prev_name);

    element.addEventListener("click", ()=>{
      console.log(document.getElementById(name));
      document.getElementById(name).style.display = "block";
    })

    var overlaydiv = document.getElementById(name);

    overlaydiv.addEventListener("click", ()=>{
      document.getElementById(name).style.display = "none";
    })
  }
}
