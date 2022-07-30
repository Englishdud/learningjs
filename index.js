// age=prompt("What is your age?")
// age = parseInt(age)
// console.log("Your age is" , age)
// num1=prompt("Enter a number")
// num2=prompt("Enter another number")
// num1=parseInt(num1)
// num2=parseInt(num2)
// console.log(num1 + num2)
maths=parseInt(prompt("num1"))
englishs=parseInt(prompt("num2"))
sciences=parseInt(prompt("num3"))

function percentage(math,english,science){
    sum=math + english + science
    ans=(sum / 300) * 100
    return ans
}
percentage1=(percentage(maths,englishs,sciences))
console.log(percentage1)