
document.addEventListener("DOMContentLoaded", () => {
    const daysInput = document.getElementById("daysInput");
    const button = document.getElementById("calculateBtn");
    const result = document.getElementById("result");
    const dayType = document.getElementById("dayType");
    const includeHolidays = document.getElementById("includeHolidays");

    button.addEventListener("click", () =>{
        const days = Number(daysInput.value);
        if(Number.isNaN(days)){
            result.textContent = "Please Enter a Valid Number!";
            return;
        }
        const today = new Date();
        const resultDate = new Date();
        if(dayType.value == "calendar"){
            result.innerHTML = addCalendarDays(today, days);
        } else {
            result.innerHTML = addBusinessDays(today, days) + " > " + includeHolidays.checked;
        }
    })
});

console.log(getNthWeekdayOfMonth(4, 0, 1, 2026));