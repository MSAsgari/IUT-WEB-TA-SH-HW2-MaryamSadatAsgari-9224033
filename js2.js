
var patt1 = /[^/s]/i;
var patt2 = /^\d{11}$/i;
var patt3 = /^([-a-z0-9~!$%^&*_=+}{\'?])+([-a-z0-9~!$%^&*_=+}{\'?.][-a-z0-9~!$%^&*_=+}{\'?])*@[a-z0-9_]([-a-z0-9_])*\.([-a-z0-9_])+/i;
function check() {
    console.log('in func');
    var fn = document.getElementById("fname").value;
    //console.log('1');
    var ln = document.getElementById("lname").value;
    //console.log('2');
    var mobile=document.getElementById("mobile").value;
    //console.log('3');
    var em=document.getElementById("mail").value;

    if (!patt1.test(fn)) {
        window.alert("Please enter your firstname.");
        console.log('no valid fn');
        return false;
    }

    if (!patt1.test(ln)) {
        window.alert("Please enter your lastname.");
        console.log('no valid ln');
        return false;
    }

    if (!patt2.test(mobile)) {

        alert('Please enter a phone number');
        console.log('no valid mobile');
        return false;
    }

    if (!patt3.test(em)) {
        window.alert("Please enter a valid e-mail address.");
        console.log('no valid mail');
       return false;
    }

    console.log('table');
    var table = document.getElementById("mytable").innerHTML;
    table+= "<tr> <td>" + fn +"</td>" + "<td>" + ln +"</td>"
        //+ "<td>" + ID + "</td>" + "<td>" + grade
        + "</td>" + "<td>" + mobile + "</td>" + "<td>" + em + "</td>";
    document.getElementById("mytable").innerHTML= table;
}
