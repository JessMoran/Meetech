/*Funcionalidad Firebase*/
var config = {
  apiKey: "AIzaSyCWfz5QVHhdbaYA0qZxhrk74Dqv4cd3yZ4",
  authDomain: "meetch-19dcf.firebaseapp.com",
  databaseURL: "https://meetch-19dcf.firebaseio.com",
  projectId: "meetch-19dcf",
  storageBucket: "",
  messagingSenderId: "738275435756"
};
firebase.initializeApp(config);

$('#google').click(function(e){
  authGoogle();
  e.preventDefault();
});


function authGoogle (){
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result){
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = "view3.html";
    console.log(result);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}
