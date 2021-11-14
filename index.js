var dates = document.getElementById("dates").value;
var gender = document.getElementById("Gender").value;

function formInput(){
    if(dates.trim() === "" || gender.trim() === ""){
        alert("Fill all inputs");
        return false;
    }

}