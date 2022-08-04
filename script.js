number=parseInt(prompt("What is the number you want to cube and square? "))

function sac(numbers){
    answers=numbers * numbers
    answerc=numbers * numbers * numbers
    answerc=String(answerc)
    answers=String(answers)
    answer=("The Cube Is " + answerc + " And The Square Is " + answers)
    return answer
}
X=(sac(number))
console.log(X)
console.log("Done...")