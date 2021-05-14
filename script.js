

// like posts function
function  likePost(heart){
  heart.classList.toggle("liked")
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

let postCount = 0

// add post with users entry
function addPost(name = false, description = false){
  let blueprint = document.getElementById("post_blueprint").cloneNode(true)
  let userName = blueprint.getElementsByClassName("username")[0]
  let entry = blueprint.getElementsByClassName("description")[0]
  let photo = blueprint.getElementsByClassName("photo")[0]
  let heart = blueprint.getElementsByClassName("heart")[0]
  description ||= descriptions[Math.floor(Math.random()*descriptions.length)]
  entry.innerHTML = description
  name ||= names[Math.floor(Math.random()*names.length)]
  userName.innerHTML = name
  photo.src = `https://picsum.photos/seed/${postCount}/800`
  photo.addEventListener("dblclick", likePost.bind(null, heart))
  heart.addEventListener("click", likePost.bind(null, heart))
  timeline.appendChild(blueprint)
  blueprint.classList.toggle("blueprint")
  postCount++
}



