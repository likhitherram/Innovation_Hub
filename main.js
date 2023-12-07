
	var config = {
	  apiKey: "AIzaSyAx016YLh7FKR7d9ucERfrpIK8wvOK7w2o",
	  authDomain: "innovation-hub-d224f.firebaseapp.com",
	  projectId: "innovation-hub-d224f",
	  storageBucket: "innovation-hub-d224f.appspot.com",
	  messagingSenderId: "793777776786",
	  appId: "1:793777776786:web:7311882493cab28d515e4b"
	};
  
	// Initialize Firebase
	firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');
							
document.getElementById('posting').addEventListener('submit',submitPost);

function submitPost(e){
    e.preventDefault();

    var message21 = getInputVal('message21');


    saveMessage(message21);

      // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('posting').reset();


}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(message21){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        message21: message21
    });
}