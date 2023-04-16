document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById('new-task-description');

 let form = document.querySelector('form')
 form.addEventListener('submit',(e) =>{
    e.preventDefault()
    handleTodo(newTask.value);

    form.reset()
  })
});


function handleTodo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
   p.appendChild(btn);
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}