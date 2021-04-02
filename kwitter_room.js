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

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });

  }

  getData(); 
    function redirectToRoomName(name) 
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }

    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }