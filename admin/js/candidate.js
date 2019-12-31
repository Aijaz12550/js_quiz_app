function fblogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
        let user = result.user;
        let userData = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
            cuid:'blank',
        }
        firebase.database().ref('/').child(`users/${userData.uid}`).set(userData)
        console.log("user==>>>",userData)
        window.location.replace("./admin/candidate/availableQuiz.html");

    }).catch(function (error) {
       console.log("error===>",error)
    });
}
