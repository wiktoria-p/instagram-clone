let hearts = document.getElementsByClassName("heart")

for (let heart of hearts){
  heart.addEventListener("click", likePost)
}

let photos = document.getElementsByClassName("photo")
for (let photo of photos){
  photo.addEventListener("dblclick", likePost)
}

// like posts function
function  likePost(){
  this.parentElement.querySelector(".heart").classList.toggle("liked")
}

// profile shortcut
let profilePhoto = document.getElementById("profile")

function clickProfile(){
  let shortProfile = document.getElementById("shortcut")
  shortProfile.classList.toggle("active")
  shortProfile.classList.toggle("shortcut")
}

profilePhoto.addEventListener("click", clickProfile)

let timeline = document.getElementById("timeline")

function addPost(name, description){
  let blueprint = document.getElementById("post_blueprint").cloneNode(true)
  let userName = blueprint.getElementsByClassName("username")[0]
  let entry = blueprint.getElementsByClassName("description")[0]
  entry.innerHTML = description
  userName.innerHTML = name
  timeline.appendChild(blueprint)
  blueprint.classList.toggle("blueprint")
}

addPost("blablabla", "ljkhjhlhjvb")
addPost("alalalala", "gvgcgcg")


// let publish = document.getElementsByClassName("com")

// function addComment(commentery){
  
// }


