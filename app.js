let areaOfRectangle = (length,width) =>{
       
    let area = (length*width);
    return area;
  }

  console.log(areaOfRectangle(4,7));
 
 
   
  let areaOfTriangle = (base,height) =>{
      
   let area = (base*height)/2;
   return area;
 }

 console.log(areaOfTriangle(40,54));

 let areaOfCircle = ( radius  ) =>{
      
   let area = 3.142*(radius*radius)
   return area;
 }

 console.log(areaOfCircle(80));

let findNumberSign = (num) => {
    if (num>0){
        return "positive";
    }
    else if (num<0){
        return "negative";
    } 
    
    {
        return "zero";
    }
}
console.log (findNumberSign(78));
console.log(findNumberSign(0))
console.log(findNumberSign(-323));



const findLeapYear = (year) => {
    if (year % 4==0) {
        return "leap year"
    }
    else if (year % 4!=0){
        return "not a leap year"
    }
    
}

console.log(findLeapYear(2024));





let ageOfUsers = (age) =>{
    if(age<15){
        return "They are not eligible to vote"
    }
    else if(age<=18 || age<=65 ){
        return "They are  eligible to vote"
    }
    else { return "They are  eligible for senior citizens benefits"
}
       
}
console.log(ageOfUsers(43));
console.log(ageOfUsers(10));
console.log(ageOfUsers(90));



let findWeekdays =(weekNumber) =>{
    let week= ("sundays" ,"Monday" ,'tuesday' ,'wed' ,'thurs' , 'fri' ,'sat');
    if (weekNumber >=1 && weekNumber <=7) {
        return week=(weekNumber-1);
    }
    else{
         return 'invalid number number must greater than equals to one and less than equals to seven'; 
    }
}
console.log(findWeekdays(7));

let getDiscount = (totalAmount) => {
   switch(true){
    case (totalAmount >= 3000):{ console.log ("discount is 10%");
    break;}
   
    case  (totalAmount >= 5000):{ console.log ("discount is 5%");
    break;}
   
    case  (totalAmount >= 10000):{ console.log ("discount is 3%");
    break;}
    default:{
        console.log("pardon there will be no discount");
    }

    }
   }
console.log(getDiscount(50875));
console.log(getDiscount(5000));

const sumNumber = (num) =>{
    let i;
    let sum=0;
    for (i=0 ; i< num; i++){
        sum +=i;
        console.log(sum);
    }
    console.log(sum);
}
// sumNumber(30);
sumNumber(90);


const generateTables = (num)  => {
    for (let i= 1; i <= 10; i++){
     console.log (num  + "x" + i + "=" +(i*num));
    }
}
generateTables(20);


const FindWord= (word) =>  {
    
    
}

