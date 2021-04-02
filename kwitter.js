var firebaseConfig = {
  apiKey: "AIzaSyDyUEX4ob5wD3RrJUwBWiqY76HB7usIhgU",
  authDomain: "letschat-f7450.firebaseapp.com",
  databaseURL: "https://letschat-f7450-default-rtdb.firebaseio.com",
  projectId: "letschat-f7450",
  storageBucket: "letschat-f7450.appspot.com",
  messagingSenderId: "906080599652",
  appId: "1:906080599652:web:34bc41ebe0bd0767cea971"
};
  firebase.initializeApp(firebaseConfig);


    function addUser() {

      user_name = document.getElementById("user_name").value;
    
      localStorage.setItem("user_name", user_name);
      
        window.location = "kwitter_room.html";
    }
  