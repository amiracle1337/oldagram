const posts = [
    {
        name: "Itsamiracle",
        username: "JeffBezos",
        location: "Stockholm, Sweden",
        avatar: "images/loli.jpg",
        post: "images/postone.jpg",
        comment: "Congratulations Amir!",
        likes: 918
    },
    {
        name: "Itsamiracle",
        username: "Meekmill",
        location: "Stockholm, Sweden",
        avatar: "images/loli.jpg",
        post: "images/post3.JPG",
        comment: "Dreamchaser 4 life, congrats bro!!",
        likes: 955
    },
        {
        name: "Itsamiracle",
        username: "Elonmusk",
        location: "Stockholm, Sweden",
        avatar: "images/loli.jpg",
        post: "images/posttwo.jpg", 
        comment: "Wish you all the best!",
        likes: 896
    }
]

const feed = document.querySelector(".feed")

function render() {
    let userPost = ""
    for (i = 0; i < posts.length; i++) {
        userPost += `
        <div class = "in-feed-post">
            <img src=" ${posts[i].avatar}" class="user-profile-feed">
                <div class="in-feed-post-info">
                    <h3 class="post-avatar-name">${posts[i].name}</h3>
                    <p class="post-avatar-location">${posts[i].location}</p>
                </div>
        </div>
        <img src="${posts[i].post}" class="in-feed-pic">
         <div class="icon-container">
                    <img src="images/icon-heart.png" class="icon-heart" id="heart-${i}">
                    <img src="images/icon-comment.png" class="icon-comment">
                    <img src="images/icon-dm.png" class="icon-dm">
                </div>
                <p class="post-likes" id="like-${i}">${posts[i].likes} likes</p>
                <div class="user-profile-comment">
                    <h3 class="user-profile-post">${posts[i].username}</h3>
                    <p class="user-comment-post">${posts[i].comment}</p>
                </div>
        <div class="space"></div>
        ` 
        feed.innerHTML = userPost
    }
} render()


let increaseLike = true

for (let i = 0; i < posts.length; i++) {
    const heartEl = document.getElementById(`heart-${i}`)
    const likeEl = document.getElementById(`like-${i}`)
    
    heartEl.addEventListener("click", function() {
        if (increaseLike) {
            posts[i].likes += 1
            likeEl.textContent = posts[i].likes + " likes"
            increaseLike = false
        } else {
            posts[i].likes -= 1
            likeEl.textContent = posts[i].likes + " likes"
            increaseLike = true
        }
    })
}


