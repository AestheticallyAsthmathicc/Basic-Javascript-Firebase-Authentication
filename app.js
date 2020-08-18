var firebaseConfig = {
    apiKey: "AIzaSyAcywgrtrzhcnWUFLaIO0EiiHZ0lrzqlSc",
    authDomain: "learning-31955.firebaseapp.com",
    databaseURL: "https://learning-31955.firebaseio.com",
    projectId: "learning-31955",
    storageBucket: "learning-31955.appspot.com",
    messagingSenderId: "496548202366",
    appId: "1:496548202366:web:61fd20e162824425b2152f",
    measurementId: "G-Q6HB6VLG4H"
};

firebase.initializeApp(firebaseConfig);

registerUser = () => {
    let messageParagraph = document.querySelector('#responseMessage');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
            window.location.href = "admin.html";
        })
        .catch(error => {
            messageParagraph.style.display = "block";
            messageParagraph.innerHTML = error;
        });
}

loginUser = () => {
    let messageParagraph = document.querySelector('#responseMessage');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            window.location.href = "admin.html";
        })
        .catch(error => {
            messageParagraph.style.display = "block";
            messageParagraph.innerHTML = error;
        });
}

logoutUser = () => {
    firebase.auth().signOut();
}

resetPassword = () => {
    let messageParagraph = document.querySelector('#responseMessage');
    firebase.auth().sendPasswordResetEmail(resetEmail.value)
        .then(() => {
            messageParagraph.style.display = "block";
            messageParagraph.innerHTML = "Reset Email sent!";
        })
        .catch((error) => {
            messageParagraph.style.display = "block";
            messageParagraph.innerHTML = error;
        });
}

window.onload = () => {
    if (window.location.href.indexOf('admin.html') > -1) {
        let adminDiv = document.querySelector('#adminPanel');
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                adminDiv.style.display = "flex";
            } else {
                window.location.href = "index.html";
            }
        });
    }
}

