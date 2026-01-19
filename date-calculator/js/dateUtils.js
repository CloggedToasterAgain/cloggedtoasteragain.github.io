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

function getNthWeekdayOfMonth(occurance, dayOfWeek, month, year){
    let futureDate = new Date(year, month - 1, 1);
    let occuranceCounter = 0;
    if(occurance > 5){
        return "Error! Cannot have more than 5 occurances of a day in a month";
    } else {
        while (occuranceCounter < occurance) {
            futureDate.setDate(futureDate.getDate() + 1);
            const day = futureDate.getDay();
            if(day == dayOfWeek){
                occuranceCounter++;
            }
        }
        return futureDate;
    }
    console.log(futureDate);
    
}