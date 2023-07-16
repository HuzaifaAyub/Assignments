function addNumbers (num1,num2){
    return num1 + num2;
}
var result = addNumbers(2,58);
console.log(result);

    
for (
    var i = 1; i <= 10; i++
)
{
    console.log(i);
}
function factorial(number) {
    if (number === 0 || number === 1) { 
    return 1 ;
}
var result = 1;
for ( var i = 2 ; i<= number; i++) {
    result *= i;
}
return result;
}

//Example
var inputNmuber = 5;
var result = factorial(inputNmuber);
console.log(result);
//Even numbers
var number = 1;

while (number <= 20) {
    if (number % 2===0) {
        console.log(number);
    }
    number++
}
  function calculateSum(numbers){
    var sum = 0;
    for (var i = 0 ; i < number.lenght; i++){
        sum += numbers[i];
    }
    return sum;
  }
  // Example
  var numbers = [1,2,3,4,5];
  var result = calculateSum(numbers);
  console.log(result);
  function fibonacciSequence(number)
  {
    var sequence = [0,1];
    for (var i = 2; i <= number; i++) {
        var nextNumber = sequence[i - 1] + sequence[i - 2];
        if (nextNumber <= number){
            sequence.push(nextNumber);
        } else {
            break;
        }

    }
    return sequence
  }

  function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt (number); i++){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
  }
   
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


  let areaOfCircle2 = ( radius  ) =>{
       
    let area = 3.142*(Ma)
    return area;
  }

  console.log(areaOfCircle(80));


  