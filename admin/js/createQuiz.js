var quizName;
var key;
var count = 1;
function submit(){

    //title
    // let quizName = document.getElementById("quizName").value;
    
    // Question
    var question = document.getElementById("q").value;
    
    //options
    var o1 = document.getElementById("o1").value;
    var o2 = document.getElementById("o2").value;
    var o3 = document.getElementById("o3").value;
    var o4 = document.getElementById("o4").value;
    
var ans;
if(document.getElementById('ao1').checked){
    ans='o1'
}
if(document.getElementById('ao2').checked){
    ans='o2'
}
if(document.getElementById('ao3').checked){
    ans='o3'
}
if(document.getElementById('ao4').checked){
    ans='o4'
}



if(question != "" && question != " " && o1 != "" && o2 != ""){

        
        var k = firebase.database().ref('/').child('questions').push().key;
        var kn = firebase.database().ref('/').child('questions').push().key;
        // key = firebase.database().ref('/').child('questions').push().key;
        let questionDetail = {
            question: question,
            o1: o1,
            o2: o2,
            o3:o3,
            o4:o4,
            key: k,
            answer:ans,
        }
        var totalquestion={
            
                noq:count,
        
        }
        // // document.getElementById("o1").setTextValue  = ""
        // // document.getElementById("q").value="";
        // console.log(questionDetail)
        // firebase.database().ref('/').child(`question/${key}`).set(questionDetail)
        console.log(questionDetail)
        firebase.database().ref('/').child(quizName).child(`/questions/${k}`).set(questionDetail)
        firebase.database().ref('/').child(quizName).child(`/questions/${kn}`).set(totalquestion)
        document.getElementById("qc").innerHTML="Q.No " +(++count)
        document.getElementById("q").value="";
        document.getElementById("o1").value="";
        document.getElementById("o2").value="";
        document.getElementById("o3").value="";
        document.getElementById("o4").value="";
        
        // document.addEventListener('click', ()=>{
            // count++
            // })
        }
        else{
            swal("Please fill the fields correctly. \n Question and atleast two options")
        }
        }
        
function t(){

    //title
    key = firebase.database().ref('/').child('questions').push().key;
     quizName = document.getElementById("quizName").value;
    var obj={
        quizName : quizName,
        key      : key 
    }
  if(quizName != "" && quizName != " "){

      console.log(quizName)
      firebase.database().ref('/').child(`QUIZES/${key}`).set(obj)
      
      document.getElementById("title").style.visibility = "hidden"
      document.getElementById("question").style.visibility ="visible";
    }
   

}

