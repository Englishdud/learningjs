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



for (let i=0; i<5; i++){
    randomnum=9
    console.log('What is you guess 1-10, you have currently have', 5-i , 'guesses remaining')
    guess=parseInt(prompt('So what is your guess? '))
    if (guess == randomnum && guess <= 10){
        console.log('You got it right! ')
        break
    }
    else{
        console.log('Wrong Answer or Incorrect Response')
    }
}