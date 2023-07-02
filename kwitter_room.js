//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyD7XDwgPwF9o0HqYgt5V39d8g3nmGWqQbI",
  authDomain: "kwitter-app-dc54f.firebaseapp.com",
  databaseURL: "https://kwitter-app-dc54f-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-dc54f",
  storageBucket: "kwitter-app-dc54f.appspot.com",
  messagingSenderId: "357201853983",
  appId: "1:357201853983:web:ff7d05c98cbe7686529f2a"
}; // Initialize Firebase 
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

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}