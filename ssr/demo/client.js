
let isClient = typeof window !== 'undefined'
let isFirstRender = true

const generateHTML = (data) => {
  let html = `<ul id="hydration" data-fromServer='${JSON.stringify(data)}'>`

  for (const item of data) {
    html += `<li>${item}</li>`
  }

  html += '</ul><input>'
  html += '<button>Add</button>'

  return html
}

export function render(document, { todoList }) {
  if (isClient && isFirstRender) {
    isFirstRender = false

    if (!document.getElementById('hydration') || !document.getElementById('hydration').dataset.fromserver) {
      fetch('http://localhost:3000/data').then(r => r.json())
        .then((json) => {
          window.todoList = json;
         
          setTimeout(() => {
            document.body.innerHTML = generateHTML(json)
            addEventListeners()
          }, 2000)
        })
    } else {
      window.todoList = JSON.parse(document.getElementById('hydration').dataset.fromserver)
    }

    return
  }

  document.body.innerHTML = generateHTML(todoList)
}

export function addEventListeners() {
  document.querySelector('button')
    .addEventListener('click', async () => {
      const item = document.querySelector('input').value
      const response = await fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
      })
      
      const status = await response.json()

      if (status) {
        window.todoList.push(item)
        const ul = document.getElementById('hydration')
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(item))
        ul.appendChild(li)
        document.querySelector('input').value = ''
      }
    })
}
