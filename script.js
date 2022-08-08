// number=parseInt(prompt("What is the number you want to cube and square? "))
//
// function sac(numbers){
//     answers=numbers * numbers
//     answerc=numbers * numbers * numbers
//     answerc=String(answerc)
//     answers=String(answers)
//     answer=("The Cube Is " + answerc + " And The Square Is " + answers)
//     return answer
// }
// X=(sac(number))
// console.log(X)
// console.log("Done...")
// password='123456'
// passwordInput=prompt("What Is the password? ")
//
// if (password == passwordInput) {
//     console.log("Password match")
// }
// else {
//     console.log("Password doesn't match")
// }

// flag=true
// while(flag){
//     math=parseInt(prompt('Math'))
// english=parseInt(prompt('English'))
// science=parseInt(prompt('Science'))
//
// function percentage (maths, englishs, sciences){
//     sum=maths + englishs + sciences
//     ans=(sum / 300) * 100
//     return ans
// }
// answer=percentage(math, english, science)
// console.log(answer)
//
// if (answer >= 80) {
//    console.log('A')
// }
// else if (answer >= 70 && answer <= 79) {
//     console.log('B')
// }
// else if (answer >= 60 && answer <= 69) {
//     console.log('C')
// }
// else if (answer >= 50 && answer <= 59) {
//     console.log('D')
// }
// else if (answer >= 40 && answer <= 49) {
//     console.log('E')
// }
// else {
//     console.log('F')
// }
// option=prompt('Do you want continue? (y/n)')
//
// if (option == 'n'){
//     flag=false
//     console.log('code exited')
//     break
// }
// }


// number=parseInt(prompt("What is the number you want to check today? "))

// if (number % 2 == 0){
//     console.log('This number is even')
// }
// else {
//     console.log('This number is odd')
// }

// number=parseInt(prompt('What is the table you want to look on today'))

// for (let i=1; i<=999; i++ ){
//     console.log(number + "'s table is..", number, '*', i , '=' ,number*i)
// }



// for (let i=0; i<5; i++){
//     randomnum=9
//     console.log('What is you guess 1-10, you have currently have', 5-i , 'guesses remaining')
//     guess=parseInt(prompt('So what is your guess? '))
//     if (guess == randomnum && guess <= 10){
//         console.log('You got it right! ')
//         break
//     }
//     else{
//         console.log('Wrong Answer or Incorrect Response')
//     }
// }

// for (i=1; i<=5; i++) {
//     document.getElementById('cool').innerHTML += "<p>The square of "+i+" is "+i*i+ "</p>"
// }
// array=['num1', 'num2', 'num3', 'num4', 'num5', 'num6']

// for (let i=0; i<array.length; i++) {
//     console.log(array[i])
// }



// function replacer(indexs, replacedby, arrays){
//     arrays[indexs] = replacedby
//     return arrays
// }

// x=replacer(2, 'hello world', ['hi', 'hello', 'bye', 'goodbye'])
// console.log(x)

// function getFirstItem(arrays){
//     indexs=arrays.length - 1
//     X=arrays[indexs]
//     return X
// }
// y=getFirstItem(['hello', 'hi', 'bye', 'goodbye'])
// console.log(y)

// function divisblenums(arrays, number){
//     divisblearray=[]
//     notdivisble=[]
//     for (let i=0; i<arrays.length; i++) {
//         if (arrays[i] % number == 0){
//             divisblearray.push(arrays[i])
//         }
//         else {
//             notdivisble.push(arrays[i])
//         }
//     }
    
//     return [divisblearray, notdivisble]
// }
// console.log(divisblenums([1, 2, 3, 4, 5, 8, 9, 10, 6, 15, 18, 20], 5))

function addNumbersFromArray(arrays){
    sum=0
    for (let i=0; i<arrays.length; i++) {
        sum+=arrays[i]
    }
    return sum
}

x=addNumbersFromArray([1, 2, 3])
console.log(x)