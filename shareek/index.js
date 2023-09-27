function sentMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        number: document.getElementById("number").value ,
        Subject: document.getElementById("Subject").value ,
       
        messege: document.getElementById("messege").value ,

    };
    const serviceID = "service_808rj4t"
const templateID = "template_jfk063o"

emailjs.sent(serviceID,templateID,params)
.them(
       
        res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("Subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("sent")
    }
    
);
}
