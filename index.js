let age = (prompt("ENTER YOUR AGE"))
 if ( age>18 && age<99 ){
    // allow
}
else if (age<18){
    alert(" Warning! You Are Under Age")
}
let admit = prompt("Do You Have Admit Card?  (YES/NO)")
if (admit === "yes"){
    //allow
}

else if (admit === "no"){
    alert(" Warning! dont have admit card ")
}
let fee = prompt("Have You Paid Fees? (YES/NO)")
if (fee === "yes"){
    //allow
}
else if (fee === "no"){
    alert(" Warning! You have not paid fees ")
}
let late = prompt("If You Are Late Tell Us Late Minutes")

if (late<2){
    //allow
}
else if (late>2){
    alert(" Warning! you are late")
}

let war = prompt("Tell Us How Many Warning Have You Recived")
if (war<1){
    alert("Entry allowed with Good Status")
}
else if (war<2){
    alert("Entry Allowed with Warning")
}

else if (war>2){
    alert("Entry denied due to missing requirement")
}

