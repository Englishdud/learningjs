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
//         console.log('all are the same')
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
//     shorter=shorter.join('')
//     longer=longer.join('')
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


function addition(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    answer=num1+num2
    alert(answer)
}
function subtraction(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    answer=num1-num2
    alert(answer)
}
function division(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    answer=num1/num2
    alert(answer)
}
function multiplication(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    answer=num1*num2
    alert(answer)
}