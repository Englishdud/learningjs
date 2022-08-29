page=0

questionsArray = [{ question: 'What is the capital of Canada', ans: ["Toronto", "Ottawa", "Montreal"] }, { question: 'Capital Of the United States', ans: ["Washington DC", "New York", "New Jersey"] }, { question: 'When was Javascript Created?', ans: ['1967', '1898', '1995'] }]
document.getElementById('question').innerHTML = questionsArray[0].question
document.getElementById('ans1').innerHTML = questionsArray[0].ans[0]
document.getElementById('ans2').innerHTML = questionsArray[0].ans[1]
document.getElementById('ans3').innerHTML = questionsArray[0].ans[2]
console.log(questionsArray[0].question)

function next(){
    if (page < questionsArray.length-1){
        page = page+1
            document.getElementById('question').innerHTML = questionsArray[page].question
            document.getElementById('ans1').innerHTML = questionsArray[page].ans[0]
            document.getElementById('ans2').innerHTML = questionsArray[page].ans[1]
            document.getElementById('ans3').innerHTML = questionsArray[page].ans[2]
    }
    else{
        
    }
}
function back(){
    if (page > 0){
        page = page-1
        document.getElementById('question').innerHTML = questionsArray[page].question
        document.getElementById('ans1').innerHTML = questionsArray[page].ans[0]
        document.getElementById('ans2').innerHTML = questionsArray[page].ans[1]
        document.getElementById('ans3').innerHTML = questionsArray[page].ans[2]
        console.log(page)
    }
    else {
        page=0 
    }

}