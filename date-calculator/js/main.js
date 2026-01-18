function addBusinessDays(startDate, days){
    let daysAdded=0;
    const futureDate = new Date(startDate);
    
    while (daysAdded < days) {
        futureDate.setDate(futureDate.getDate() + 1);
        const day = futureDate.getDay();
        if (day !== 0 && day !== 6){
            daysAdded++;
        }
    }
    return futureDate;
}

function isWeekend(date){
    const dayOfWeek = new Date(date).getDay();
    return (dayOfWeek==0 || dayOfWeek==6);
}

function addCalendarDays(startDate, days){
    const futureDate = new Date(startDate);
    futureDate.setDate(futureDate.getDate()+days);
    return futureDate;
}

// module.exports = { addCalendarDays, addBusinessDays };

const certificateGracePeriod = 10;
const checksLower=10, checksHigher=14;
const debitCardLower=7, debitCardHigher=10;

const today = new Date();
const max=180, min=30;

//CD output
// console.log(`If a CD matures today you will have until ${addCalendarDays(certificateGracePeriod)} (10 Calendar days) to make any changes`)

//Checks output
// console.log(`${checksLower} days from today is ${addBusinessDays(checksLower)}\n${checksHigher} days from today is ${addBusinessDays(checksHigher)}}`);
//Debit card output
// console.log(`${debitCardLower} business days from today would be ${addBusinessDays(today, debitCardLower)}`);

const pastDate = new Date(today);
// pastDate.setDate(today.getDate() - (Math.floor(Math.random() * (max - min + 1)) + min));
// const randomFutureNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`${randomFutureNumber} business days from ${pastDate} would be ${addBusinessDays(pastDate, randomFutureNumber)} not including holidays`);
// console.log(`${67} business days from ${pastDate} would be ${addBusinessDays(pastDate, 67)} not including the start date and not including holidays`);

document.addEventListener("DOMContentLoaded", () => {
    const daysInput = document.getElementById("daysInput");
    const button = document.getElementById("calculateBtn");
    const result = document.getElementById("result");
    const dayType = document.getElementById("dayType");

    button.addEventListener("click", () =>{
        const days = Number(daysInput.value);
        if(Number.isNaN(days)){
            result.textContent = "Please Enter a Valid Number!";
            return;
        }
        const today = new Date();
        const resultDate = new Date();
        if(dayType.value=="calendar"){
            result.innerHTML=addCalendarDays(today, days);
        } else {
            result.innerHTML=addBusinessDays(today, days);
        }
        
    })
});