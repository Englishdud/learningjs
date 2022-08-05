// number=parseInt(prompt("What is the number you want to cube and square? "))
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