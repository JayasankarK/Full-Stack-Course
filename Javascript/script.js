function add(){
    var a= document.getElementById("txtNum1").value;
    var b= document.getElementById("txtNum2").value;
    var c= parseFloat(a)+parseFloat(b);
    document.getElementById("spnResult").innerHTML="<b>"+c+"</b>";
}
console.log(add(20,60));
function exponential(a,b){
    var m=a**b;
    return m;
}
console.log(exponential(9,2));