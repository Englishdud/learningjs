todoList=[]

function addToList(){
    text=document.getElementById('todoList1').value
    todoList.push(text)
    document.getElementById('todoList1').value=''
   document.getElementById('input').innerHTML+='<li>'+text+'</li>'
}