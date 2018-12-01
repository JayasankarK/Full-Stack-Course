function readValues()
{
    var name=document.getElementById("txtName").value;
    var pwd ="******";
    var district = document.getElementById("ddlDistrict").value;
    console.log("Name: "+name+" Password: "+pwd+" District: "+district);
    
}
function validateLogin()
{
    var name=document.getElementById("txtName").value;
    var pwd =document.getElementById("txtPwd").value;
    var district = document.getElementById("ddlDistrict").value;
    if(name!="" && pwd!="" && district!="-Select-")
    {
        document.getElementById("btnLogin").disabled=false;
    }
    else
    {
        document.getElementById("btnLogin").disabled=true;
    }
}