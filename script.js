// function addNumbersFromArray(arrays){
//     sum=0
//     for (let iteration=0; iteration<arrays.length; iteration++) {
//         sum+=arrays[iteration]
//     }
//     return sum
// }

// x=addNumbersFromArray([5, 5, 5])
// console.log(x)


// function lastNumber(arrays){
//     length=arrays.length
//     indexs=length - 1
//     answer=arrays[indexs]
//     return answer
// }

// x=lastNumber([5, 5, 8])
// console.log(x)

// function addLength(array1, array2){
//     array1Length=array1.length
//     array2Length=array2.length
//     difference=array1Length - array2Length
//     if (array1Length == array2Length){
//         console.log("all are the same")
//     }
//     else {
//         if(array1Length < array2Length) {
//             shorter=array1
//             longer=array2
//         }
//         else{
//             shorter=array2
//             longer=array1
//         }
        
//     }
//     for (i=shorter.length-1; i<longer.length-1; i++){
//         shorter.push(0)
//     }
//     shorter=shorter.join("")
//     longer=longer.join("")
//     sum = parseInt(shorter) + parseInt(longer)
//     console.log(shorter, longer)
//     console.log(sum)
    // if (array1Length < array2Length){
    //     for (i=array1Length; i<=array2Length; i++){
    //         array1.push(0)
    //     }
    // }
// }

// addLength([1,2,3], [1,4,5,6,7,8,9])

// function submitTest(){
//     value = document.getElementById("name").value
//     alert(value)}


// function addition(){
//     num1=document.getElementById("num1").value
//     num2=document.getElementById("num2").value
//     num1=parseInt(num1)
//     num2=parseInt(num2)
//     answer=num1+num2
//     document.getElementById("ans").innerHTML=answer
// }
// function subtraction(){
//     num1=document.getElementById("num1").value
//     num2=document.getElementById("num2").value
//     num1=parseInt(num1)
//     num2=parseInt(num2)
//     answer=num1-num2
//     document.getElementById("ans").innerHTML=answer
// }
// function division(){
//     num1=document.getElementById("num1").value
//     num2=document.getElementById("num2").value
//     num1=parseInt(num1)
//     num2=parseInt(num2)
//     answer=num1/num2
//     document.getElementById("ans").innerHTML=answer
// }
// function multiplication(){
//     num1=document.getElementById("num1").value
//     num2=document.getElementById("num2").value
//     num1=parseInt(num1)
//     num2=parseInt(num2)
//     answer=num1*num2
//     document.getElementById("ans").innerHTML=answer
// }
// const sleep = setTimeout(birthday, 4000)

// function birthday(){
//     document.getElementById("demo").innerHTML = "Happy Birthday"
// }

const numButtons = document.querySelectorAll("[number]")
const operatorButtons = document.querySelectorAll("[operation]")
const equalsButton = document.querySelector("[equal]")
const deleteButton = document.querySelector("[delete]")
const allclearButton = document.querySelector("[allclear]")
const preButton = document.querySelector("[previous]")
const currentButton = document.querySelector("[current]")

nums=[]

function nine(){
    num=document.getElementById("output").value='9'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function eight(){    
    num=document.getElementById("output").value='8'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function seven(){
    num=document.getElementById("output").value='7'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function six(){
    num=document.getElementById("output").value='6'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function five(){
    num=document.getElementById("output").value='5'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function four(){
    num=document.getElementById("output").value='4'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function three(){
    num=document.getElementById("output").value='3'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function two(){
    num=document.getElementById("output").value='2'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function one(){
    num=document.getElementById("output").value='1'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function zero(){
    num=document.getElementById("output").value='0'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)
}
function division(){
    num=document.getElementById("output").value='/'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)    
}
function multiplication(){
    num=document.getElementById("output").value='*'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)    
}
function addition(){
    num=document.getElementById("output").value='+'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)        
}
function subtraction(){
    num=document.getElementById("output").value='-'
    nums.push(num)
    document.getElementById("output").innerHTML = (nums)    
}
function equal(){   
    output=parseFloat(nums)
    nums.slice(0,nums.length)
    console.log(output)
}