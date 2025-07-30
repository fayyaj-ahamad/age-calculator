
let currntDate = document.getElementById("current-date");
let dateOfBirth = document.getElementById("date_of_birth");
let calculate = document.getElementById("calculate");
let resetage = document.getElementById("resetAge");
let year = document.getElementById("year");
let months = document.getElementById("month");
let days = document.getElementById("day");


let date = new Date();
let currnt_date = String(date.getDate()).padStart(2, '0');
let currnt_month = String(date.getMonth() + 1).padStart(2, '0'); 
let currnt_year = date.getFullYear();

let formattedDate = `${currnt_year}-${currnt_month}-${currnt_date}`;
currntDate.value = formattedDate;


const calculateAge = () =>{
    calculate.onclick = () =>{   
    const dobValue = dateOfBirth.value;
    const todayValue = currntDate.value
    const dob = new Date(dobValue);
    const today = new Date(todayValue);
        
    if(!dobValue){
        alert("Please Fill DOB !");
        return;
    }
        let age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let day = today.getDate() - dob.getDate();

    if (day < 0) {
      month--;
      console.log("month",month)
      day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      console.log(day) 
    }

    if (month < 0) {
      age--;
      month += 12;
    }

    year.innerHTML = age;
    months.innerHTML = month;
    days.innerHTML = day;
    console.log(`Age: ${age} Years, ${month} Months, ${day} Days`);
}
}

const resetAge = () =>{
    resetage.onclick = ()=>{
    dateOfBirth.value = "";
    year.innerHTML = "Years";
    days.innerHTML = "Days";
    month.innerHTML = "Months";
    }
}
resetAge();
calculateAge();