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
let names = ["ladydrama123", "blueberries", "lamadrama", "lordvader550", "martynka.official", "mamacita09", "henio78", "blackwidow", "marry.sol", "baby23254", "milenka", "angel345", "sexylola", "blabla"]
let descriptions = ["life is life", "love is life", "bamboo is life", "i love my dog", "butterfly is beautyful", "coronavirus is fucking fake", "my cat is very sweet", "lalalalalala", "my new tatoo", "my new car", "weeding is coming", "i say yes", "i love my mom"]

// the scroll event
// scrollHeight= height of element
// scrollTop= offset from the top of the page
// clientHeight= height of window view

window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(addPost,500);

	}
});

// add post with users entry
function addPost(name = false, description = false){
  let blueprint = document.getElementById("post_blueprint").cloneNode(true)
  let userName = blueprint.getElementsByClassName("username")[0]
  let entry = blueprint.getElementsByClassName("description")[0]
  let photo = blueprint.getElementsByClassName("photo")[0]
  description ||= descriptions[Math.floor(Math.random()*descriptions.length)]
  entry.innerHTML = description
  name ||= names[Math.floor(Math.random()*names.length)]
  userName.innerHTML = name
  photo.src = "https://picsum.photos/500"
  timeline.appendChild(blueprint)
  blueprint.classList.toggle("blueprint")
}



