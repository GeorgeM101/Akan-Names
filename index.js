var dates = document.getElementById("dates");
var gender = document.getElementById("Gender");

function formInput() {
    if (dates.value === "" || Gender.value === ""){
    alert("Input all fields");
    return false;
    }else {
        var dateArray = dates.value.split('-');
        var century = parseInt((dateArray[0]/100))+1;
        alert(century);
        var calcDates= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
        return false;
    }   
    
}

