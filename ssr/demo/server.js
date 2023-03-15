import Fastify from 'fastify'
import { createReadStream } from 'fs'
import { readFile } from 'fs/promises'
import { Window } from 'happy-dom'
import { render } from './client.js'
import FastifyStatic from  '@fastify/static'
import path from 'path'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const buildDir = __filename.split('/')
buildDir.pop()
const __dirname = path.dirname(buildDir.join('/'));
const app = Fastify({ logger: true })
const html = await readFile('./client.html', 'utf8')
const todoList = ['Do laundry', 'Respond to emails', 'Write report']

app.get('/client.js', (_, reply) => {
  reply.type('text/javascript')
  reply.send(createReadStream('./client.js'))
})

app.register(FastifyStatic, {
  root: path.join(__dirname, '/demo')
})

app.get('/ssr', (_, reply) => {
  const window = new Window()
  const document = window.document
  reply.type('text/html')
  render(document, { todoList })
  reply.send(`${html}${document.body.innerHTML}`)
})

app.get('/data', (_, reply) => {
  reply.send(todoList)
})

app.post('/add', (req, reply) => {
  todoList.push(req.body.item)
  reply.send(true)
})
await app.listen({ port: 3000 })
