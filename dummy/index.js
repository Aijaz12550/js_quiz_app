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
            uid: user.uid
        }
        firebase.database().ref('/').child(`users/${userdata.uid}`).set(userData)
        console.log("user==>>>",userData)

    }).catch(function (error) {
       console.log("error===>",error)
    });
}

function getData(){
var uid = firebase.auth().currentUser.uid;
firebase.database().ref('/').child('users').on('child_added')
}


function sd(){
    var q = document.getElementById("q").value;
    var o1 = document.getElementById("o1").value;
    var o2 = document.getElementById("o2").value;

    var key = firebase.database().ref('/').child('questions').push().key;
    let questionDetail = {
        q: q,
        o1: o1,
        o2: o2,
        
        key: key
    }
    console.log(questionDetail)
    firebase.database().ref('/').child(`question/${key}`).set(questionDetail)


}















// async function savefile(){
// var file = document.getElementById("file").files[0]
// console.log(file)
// var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);
// const snapshot = await storageRef.put(file);
// snapshot.ref.getDownloadURL()
// .then((res)=>{
//     console.log(res)
// })
// }