// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCuSXRPZyGMjSZR3XDONMASAoQVdFwiWwA",
    authDomain: "personal-website-48233.firebaseapp.com",
    databaseURL: "https://personal-website-48233.firebaseio.com",
    projectId: "personal-website-48233",
    storageBucket: "",
    messagingSenderId: "131890659741",
    appId: "1:131890659741:web:8c8aac66b174ace9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function sendMessage() {
    // get data values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name) {
        let error = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Please Enter Name<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
        document.getElementById("error").innerHTML = error
        document.getElementById("error").style.display = "block";
    } else if (!email) {
        let error = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Please Enter Email<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
        document.getElementById("error").innerHTML = error
        document.getElementById("error").style.display = "block";
    } else if (!message) {
        let error = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Please Enter Message<<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>/div>'
        document.getElementById("error").innerHTML = error
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
        firebase.firestore().collection("Messages").add({
            Name: name,
            Email: email,
            Message: message,
            DateCreated: new Date().toDateString(),
            TimeStamp: new Date().toISOString()
        }).then(function(docRef) {
            document.getElementById("success").style.display = "block";
            setInterval(function() {
                document.getElementById("success").style.display = "none";
            }, 3000);
        }).catch(function(error) {
            document.getElementById("error").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Unable to send message!! Try email me at faheem5948@gmail.com<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
            document.getElementById("error").style.display = "block";
        });
    }
}