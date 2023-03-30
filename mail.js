
const firebaseConfig = {

    apiKey: "AIzaSyDu17i_C1OaWm5Curyl3OG_W_JSsvcea7g",

    authDomain: "contactform-8232b.firebaseapp.com",

    databaseURL: "https://contactform-8232b-default-rtdb.firebaseio.com",

    projectId: "contactform-8232b",

    storageBucket: "contactform-8232b.appspot.com",

    messagingSenderId: "692050160730",

    appId: "1:692050160730:web:4bc7d1d9324318f7927c63"

  };


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // reference your database
 var contactFormDB = firebase.database().ref('contactForm');

 document.getElementById("contactform").addEventListener("submit",submitForm);

 function submitForm(e)
 {
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var msgContent = getElementVal("msgcontent");
    var number = getElementVal("number");
    var password = getElementVal("password");

    // console.log(name,email,msgContent);
    saveInfo(name,email,msgContent,number,gender,service,payment,password);

    // alert msg
    document.querySelector(".alert").style.display = "block";

    // remove alert
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    },3000);

    // reset form
    document.getElementById("contactform").reset();
 }

 const saveInfo = (name,email,msgContent,number,password)=>{
   var contactInfo =  contactFormDB.push();
   contactInfo.set({
    name:name,
    email:email,
    msgContent:msgContent,
    number:number,
    password:password,
   });
 }

 const getElementVal = (id) =>{
        return document.getElementById(id).value;
 }