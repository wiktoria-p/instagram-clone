

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

// window messege
let mess = document. getElementById("mess")

function clickMess() {
  let windowMess = document.getElementById("messege")
  windowMess.classList.toggle("active-messege")
  windowMess.classList.toggle("messege") 
}

mess.addEventListener("click", clickMess)

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

function eventPrevent (event){
  event.preventDefault()
  new FormData(event.target)
}

function addComment(event){
  // for (let value of event.formData.keys()){
  //   console.log(value)
  // }
  // treść komentarza
  let comment = event.formData.get("com")
  let publish = document.getElementsByClassName("comment-blueprint") 
  publish.innerHTML = comment
  console.log(publish)
}


let postCount = 0

// add post with users entry
function addPost(name = false, description = false){
  let blueprint = document.getElementById("post_blueprint").cloneNode(true)
  let userName = blueprint.getElementsByClassName("username")[0]
  let entry = blueprint.getElementsByClassName("description")[0]
  let photo = blueprint.getElementsByClassName("photo")[0]
  let heart = blueprint.getElementsByClassName("heart")[0]
  let form = blueprint.getElementsByClassName("add-comment")[0]
  description ||= descriptions[Math.floor(Math.random()*descriptions.length)]
  entry.innerHTML = description
  name ||= names[Math.floor(Math.random()*names.length)]
  userName.innerHTML = name
  photo.src = `https://picsum.photos/seed/${postCount}/800`
  photo.addEventListener("dblclick", likePost.bind(null, heart))
  heart.addEventListener("click", likePost.bind(null, heart))
  form.addEventListener("submit", eventPrevent.bind())
  form.addEventListener("formdata", addComment.bind())
  timeline.appendChild(blueprint)
  blueprint.classList.toggle("blueprint")
  postCount++
}

function addStories(numberOfStories = 1){
  let stories = document.getElementsByClassName("stories")[0]
  for (let i = 0; i < numberOfStories; i++){
    let story = document.getElementsByClassName("pp")[0].cloneNode(true)
    story.src = `https://picsum.photos/seed/${i}/50/50`
    stories.appendChild(story)
  }
}

document.addEventListener("DOMContentLoaded", addStories.bind(null, 10))

