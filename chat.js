// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC0s5n2c8pSOBm0yZKPSl3HeeEhpy6KFSM",
    authDomain: "lets-chat-62da2.firebaseapp.com",
    projectId: "lets-chat-62da2",
    storageBucket: "lets-chat-62da2.appspot.com",
    messagingSenderId: "650866319343",
    appId: "1:650866319343:web:df39c69658e712cfd0e01a",
    measurementId: "G-REWF4GJ87F"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

}



