console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

printOdds(8)
function printOdds(count){
for(let i = 0; i <= count; i++){
    if(i % 2 != 0)
    {
       console.log(`${i} Is a odd number`);
    }
    else
    {
        console.log("This is a even number");
    }
}
}

function checkAge(userName, age){
    var aboveSixteen = `Congrats ${userName}, you can drive`
    var belowSixteen = `Sorry ${userName}, you need to wait until you're 16`
    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}
checkAge("John", 20)
checkAge("Tj", 14)


function axis(x, y){
if(x > 0 && y > 0){
    return "Quadrant 1";
}
else if(x > 0 && y < 0){
    return "Quadrant 2"
}
else if(x < 0 && y < 0){
    return "Quadrant 3"
}
else if(x < 0 && y > 0){
    return "Quadrant 4"
}
else if(x == 0 && y != 0){
    return "X axis"
}
else if(x != 0 && y == 0){
    return "Y axis"
}
else{
    return "origin";
}
}
console.log(axis(2, 6))
console.log(axis(3, -8))
console.log(axis(-5, -9))
console.log(axis(-4, 4))
console.log(axis(0, -2))
console.log(axis(5, 0))
console.log(axis(0, 0))

function isAValidTriangle(x, y, z){
return x + y > z && x + z > y && y + z > x;
}



function triangle(x, y, z){ 
    let isValid = isAValidTriangle(x, y, z)

    if(isValid){
   
        if(x == y && y == z){
        return "equilateral triangle"
        }
         else if(x == y || y == z || x == z){
        return "isosceles triangle"
        }
         else if(x != y && y != z && x != z){
         return "scalene triangle"
        }
   
    } else{
        return "Not a valid triangle";
      }
}  
console.log(triangle(3, 3, 3))
console.log(triangle(1, 2 , 2))
console.log(triangle(2, 3 , 4))
console.log(triangle(1, 1, 2))



function dataPlan(planLimit, day, usage) {
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usage / day;
    let suggestedAverageUse = planLimit / 30;
    let howMuchDataLeft = planLimit - usage;
    let projectedUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsage = howMuchDataLeft / daysLeftOnPlan;

    if(averageDailyUse > suggestedAverageUse){
        console.log(`${day} day(s) used, ${daysLeftOnPlan} day(s remaining
        What you are using :  ${averageDailyUse.toFixed(2)} GB/ day.
        You are exeeding your average daily use/
        What you should use:  (${suggestedAverageUse.toFixed}) GB/day),
        continuing this high usage, you'll exceed your data plan by 
        ${projectedUsage} GB.
        To stay below your data plan, use no more than ${suggestedAverageUse.toFixed(2)} GB/day.`);    
    }
    else if(averageDailyUse < suggestedAverageUse) {
        console.log(`${day} days used, ${daysLeftOnPlan} days remaining
        Average daily use: ${averageDailyUse.toFixed(2)}
        You are under your average daily use (${averageDailyUse.toFixed(2)} GB/day),
        continuing this usage, you'll be under your data plan by
        ${projectedUsage} GB. `)
    }
    else {
        console.log(`Your average daily use is ${averageDailyUse.toFixed(2)} GB/day, you are on target.`)
    }

}

dataPlan(50, 12, 25);
