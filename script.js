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

getPostTitle(1).then(title => console.log(title));
getPost(4).then(post => console.log(post));


function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilitaIncastro = Math.random();
            if (probabilitaIncastro < 0.2) {
                reject("Il dado si è incastrato!");
            } else {
                const numero = Math.floor(Math.random() * 6) + 1;
                resolve(numero);
            }
        }, 3000);
    });
}


lanciaDado()
    .then(numero => {
        console.log("È uscito il numero:", numero);
    })
    .catch(errore => {
        console.error("Errore:", errore);
    });