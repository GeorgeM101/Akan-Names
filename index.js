var dates = document.getElementById("dates");
var gender = document.getElementById("Gender");

function formInput() {
    if (dates.value === "" || Gender.value === ""){
    alert("Input all fields");
    return false;
    }else {
        var dateArray = dates.value.split('-');
        var century = parseInt((dateArray[0]/100))+1;
        var years = parseInt(dateArray[0].substr(2,4));
        var days = parseInt(dateArray[2]);
        var months = parseInt(dateArray[1]);



        // alert(century);
        var maleNames= ["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        // var calcDates= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
        if(gender.value == "Male"){
        var calcDates= ( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(months+1)/10)) + days ) %7;
        var indexes = Math.floor(calcDates); 
         alert(maleNames[indexes]+" "+ daysOfWeek[indexes]);
            return false
        }else {
            var calcDates= ( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(months+1)/10)) + days ) %7;
        var indexes = Math.floor(calcDates); 
         alert(femaleNames[indexes]+" "+ daysOfWeek[indexes]);
            return false
        }
        alert(years);
        return false;
    }   
    
}

