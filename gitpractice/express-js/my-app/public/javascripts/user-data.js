url = "http://localhost:3000/userprofile";
let userobject = "";

function myfunction() {
    console.log("hi");
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        userobject = data.result.user;
        console.log(userobject);
        console.log("obect.username =", userobject.username);
        document.getElementById("name").value = userobject.username;
        document.getElementById("mail").value = userobject.email;
        document.getElementById("adress").value = userobject.address;
    })


}