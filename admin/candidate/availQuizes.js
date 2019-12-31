var questions = [];
var count = 0;
var n;
var qe = [];
var i=1;
var ans;
var marks = 0;
var gh;
var score=0;
getdata()
function getdata() {
    // var uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/').child(n).child(`questions`).on('child_added', (data) => {
        // console.log(data.val())
        questions.push(data.val())
    })
}


function renderQuestion() {
var q = document.getElementById('q');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
q.innerHTML ="Question: "+ questions[count].question
opt1.innerHTML = questions[count].o1
opt2.innerHTML = questions[count].o2
opt3.innerHTML = questions[count].o3
opt4.innerHTML = questions[count].o4


}

// function nextQuestion() {
// // if(question == null){alert("jmm")}
// // firebase.database().ref('/').child(`questions`).child('question').on('child_added', (data) => {

// //     if(data.child("question").val()== undefined){
// //         alert("hhh")
// //     }

// // });

// count++
// var q = document.getElementById('q');
// var opt1 = document.getElementById('opt1');
// var opt2 = document.getElementById('opt2');
// var opt3 = document.getElementById('opt3');
// var opt3 = document.getElementById('opt4');
// q.innerHTML = "Question: "+ questions[count].question

// opt1.innerHTML = questions[count].o1
// opt2.innerHTML = questions[count].o2
// opt3.innerHTML = questions[count].o3
// opt4.innerHTML = questions[count].o4


// }
quizes();
function quizes(){

firebase.database().ref('/').child('QUIZES').on('child_added', data=>{
n = data.child('quizName').val();
// alert(n)
var table = document.getElementById("table");

var tr = document.createElement("tr");
tr.setAttribute("id","tr")
var td = document.createElement("td");
td.setAttribute("id","txt")
var txt = document.createTextNode(n);
var button = document.createElement("button");
button.setAttribute("id","btn")

var btnt = document.createTextNode("Start Quiz")
button.appendChild(btnt)
var td2 = document.createElement("td");
td2.setAttribute("id","td2")

td.appendChild(txt)
tr.appendChild(td)
tr.appendChild(td2)
td2.appendChild(button)


    table.appendChild(tr);


                                                 button.addEventListener('click',()=>{

        var cuid = firebase.auth().currentUser.uid;


           firebase.database().ref('/').child('users').child(cuid).push({
               attemp:{
                   Quiz:n,
                   score:score,
    
               }
           })
var minute = 3;
// var seconds =;
        
        document.getElementById('d').innerHTML=""
        document.getElementById('questions').style.visibility='visible'
        setInterval(--minute, 60000);
             document.getElementById('ptime').innerHTML='Time remain: '+minute+' minutes'

        // count = 0;
        // count++
        n = data.child('quizName').val();
        firebase.database().ref('/').child(n).child('questions').on('child_added', data=>{
            qe.push(data.val())

var m = 1;
            var q = document.getElementById('q');
            var opt1 = document.getElementById('opt1');
            var opt2 = document.getElementById('opt2');
            var opt3 = document.getElementById('opt3');
            var opt4 = document.getElementById('opt4');
         
            q.innerHTML ="Q.No:"+ m +"  "+ qe[count].question
            opt1.innerHTML = qe[count].o1
            opt2.innerHTML = qe[count].o2
            opt3.innerHTML = qe[count].o3
            opt4.innerHTML = qe[count].o4
             gh=document.getElementById('answer').innerText=JSON.stringify(data.child('answer').val());
            // alert(gh)
            // alert(data.val().length)
        



            // function nextQuestion() {
                // if(question == null){alert("jmm")}
                // firebase.database().ref('/').child(`questions`).child('question').on('child_added', (data) => {
            
                //     if(data.child("question").val()== undefined){
                //         alert("hhh")
                //     }
            
                // });
               
               
                
            // }















            // var p = document.createElement('p');
            // p.innerText=JSON.stringify(data.val(),null,5);
            // var question = data.child('question').val();
            // var o1 = data.child('o1').val();
            // var o2 = data.child('o2').val();
            // var o3 = data.child('o3').val();
            // var o4 = data.child('o4').val();

            // var btn = document.createElement('button');

            // var d = document.getElementById("d");
            // var op1 = document.createElement("p");
            // var op2 = document.createElement("p");
            // var op3 = document.createElement("p");
            // var op4 = document.createElement("p");
            // op4.setAttribute('id','p')

            // var inp = document.createElement('input');
            // inp.setAttribute('type','radio')
            // var inp1 = document.createElement('input');
            // inp1.setAttribute('type','radio')

            // var ot1 = document.createTextNode(qe[count].question);
            // var ot2 = document.createTextNode(o2);
            // var ot3 = document.createTextNode(o3);
            // var ot4 = document.createTextNode(o4);

            // var txt = document.createTextNode('Q.No '+ ++count +': ' +question)
            
            // p.appendChild(txt)
            // op1.appendChild(ot1)
            // op2.appendChild(ot2)
            // op3.appendChild(ot3)
            // op4.appendChild(ot4)
            // // inp.appendChild(txt)

            // d.appendChild(p)
            // d.appendChild(op1)
            // d.appendChild(op2)
            // d.appendChild(inp1)
            // d.appendChild(op3)
            // d.appendChild(inp)
            // d.appendChild(op4)
            // d.appendChild(btn)

            // btn.addEventListener('')


    })

// alert(n)
})
})
                                         document.getElementById("next").addEventListener('click',()=>{
var useranswer;
//     if(document.getElementById("opt1").checked){
// useranswer='o1'
//     }
if(document.getElementById("opt1").checked){
    useranswer='"o1"'
        }
    if(document.getElementById("opt2").checked){
        useranswer='"o2"'
            }

            if(document.getElementById("opt3").checked){
                useranswer='"o3"'
                    }

                    if(document.getElementById("opt4").checked){
                        useranswer='"o4"'
                        
                                            }

                                            if(useranswer==gh){
                                                score++
                                            }
                        var tq=[];
// n = data.child('quizName').val();
// alert(n)
firebase.database().ref('/').child(n).child('tq').on('value',data=>{
                        tq = data.child('noq').val();
                    })
                    // console.log(tq);
                    // alert("total"+tq)
                    
                    count++;
                    // alert(tq)
                    // alert(count)
    if(count < tq || tq ==''){

        // count=1;
        i++
        var q = document.getElementById('q');
        var opt1 = document.getElementById('opt1');
        var opt2 = document.getElementById('opt2');
        var opt3 = document.getElementById('opt3');
        var opt3 = document.getElementById('opt4');
        q.innerHTML = "Q.No:"+ i +"   " + qe[count].question
        //  if(question = undefined){alert('hhh')}
        
        
        opt1.innerHTML = qe[count].o1
        opt2.innerHTML = qe[count].o2
        opt3.innerHTML = qe[count].o3
        opt4.innerHTML = qe[count].o4
    }
    else{

        swal('Your correct answers is '+score+' out of '+ tq)
    }
    
    })
}
// function render(){
// firebase.database().ref('/').child(n).child('questions').on('child_added', data=>{
// var question = data.child('question').val();
// alert(question)

// })

// }

// function nextQuestion() {
//     // if(question == null){alert("jmm")}
//     // firebase.database().ref('/').child(`questions`).child('question').on('child_added', (data) => {

//     //     if(data.child("question").val()== undefined){
//     //         alert("hhh")
//     //     }

//     // });
//     count++
//     var q = document.getElementById('q');
//     var opt1 = document.getElementById('opt1');
//     var opt2 = document.getElementById('opt2');
//     var opt3 = document.getElementById('opt3');
//     var opt3 = document.getElementById('opt4');
//     q.innerHTML = "Question: "+ qe[count].question

//         opt1.innerHTML = qe[count].o1
//         opt2.innerHTML = qe[count].o2
//         opt3.innerHTML = qe[count].o3
//         opt4.innerHTML = qe[count].o4
   
    
// }