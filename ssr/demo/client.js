
let isClient = typeof window !== 'undefined'
let isFirstRender = true

export function render (document, { todoList }) {
  console.log(isClient, isFirstRender)
  if (isClient && isFirstRender) {
    isFirstRender = false
    
    if(!document.querySelectorAll("li")?.length){
      fetch('/data').then(r => r.json())
        .then((json) => { window.todoList = json })
    } else{ 
      window.todoList = JSON.parse(document.getElementById('hydration').dataset.fromserver)
    }

    return
  } 

  let html = `<ul id="hydration" data-fromServer='${JSON.stringify(todoList)}'>`
  for (const item of todoList) {
    html += `<li>${item}</li>`
  }
  html += '</ul><input>'
  html += '<button>Add</button>'

  console.log(html)

  document.body.innerHTML = html
}

export function addEventListeners () {
  document.querySelector('button')
    .addEventListener('click', async () => {
    	const item = document.querySelector('input').value
      window.todoList.push(item)
      const response = await fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
      })
      const status = await response.json()
      if (status === 0) {
        const ul = document.getElementById('hydration')
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(item))
        ul.appendChild(li)
        document.querySelector('input').value = ''
      }
    })
}
