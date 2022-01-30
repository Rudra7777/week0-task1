function login() {
    var Details = new Array();
    Details[0] = document.getElementById("email_of_user").value;
    Details[1] = document.getElementById("password_of_user").value;
    console.log(Details);
    alert("You have logged in");
}