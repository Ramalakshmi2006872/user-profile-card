const user = {
  name: "Ramya",
  role: "Full stack developer",
  email: "ramya@gmail.com",
};

const projects = ["Portfolio", "Skill Fit", "Insta Clone"];

const skills = new Set(["HTML", "CSS", "JavaScript", "HTML", "React Js"]);

function showProfile() {
  alert("Welcome to Ramya's Profile!");

  document.getElementById("info").innerHTML =
    "<b>Name:</b> " +
    user.name +
    "<br><b>Role:</b> " +
    user.role +
    "<br><b>Email:</b> " +
    user.email +
    "<br><br><b>Skills:</b><br>● " +
    [...skills].join("<br>● ") +
    "<br><br><b>Projects:</b><br>● " +
    projects.join("<br>● ");
}

function highlightCard() {
  document.getElementById("card").style.backgroundColor = "lightblue";
}
