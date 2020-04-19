url = "http://localhost:3000/api/user";
url2 = "http://localhost:3000/api/user/posts";
let userobject = {};

function myfunction() {
    console.log("hi");
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        userobject = data;
        console.log(userobject);
        showDetails(userobject);
    })
    fetch(url2).then(response => {
        return response.json();
    }).then(data => {
        postsobject = data;
        console.log(postsobject);
        showposts(postsobject);
    })

}

function showDetails(userobject) {
    let a = document.querySelector("#top");
    let username = document.createElement("p");
    username.innerHTML = userobject.fullName;
    let mail = document.createElement("p");
    mail.innerHTML = userobject.email;
    a.appendChild(username);
    a.appendChild(mail);
}

function showposts(postsobject) {
    let a = document.querySelector("#content");
    let postarr = postsobject.posts;
    for (var i = 0; i < postarr.length; i++) {
        let p = document.createElement("p");
        let p1 = document.createElement("p");
        p1.innerHTML = "post" + i;
        p.innerHTML = postsobject.posts[i];
        a.appendChild(p1);
        a.appendChild(p);
    }
}