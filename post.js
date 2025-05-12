function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => post.title)
        .catch(error => console.error(error));
}

function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    post.user = user;
                    return post;
                });
        })
        .catch(error => console.error(error));
}

getPostTitle(1).then(title => console.log("Post Title:", title));
getPost(1).then(post => console.log("Post with User:", post));