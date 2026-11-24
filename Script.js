
function registerStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || phone === "" || course === "") {
        alert("Please fill all the fields!");
    } 
    else {
        alert("Registration Successful!\nWelcome " + name);
    }
}
