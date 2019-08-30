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
        console.log("Please Enter name")
    } else if (!email) {
        console.log("Please Enter email")
    } else if (!message) {
        console.log("Please Enter Message")
    } else {
        firebase.firestore().collection("Messages").add({
            Name: name,
            Email: email,
            Message: message,
            DateCreated: new Date().toDateString(),
            TimeStamp: new Date().toISOString()
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}