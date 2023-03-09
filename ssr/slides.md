---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: 'src/images/initial.png'
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  what is SSR

# persist drawings in exports and build
drawings:
  persist: false

# page transition
transition: slide-up
# use UnoCSS
css: unocss
---

# Rendering on the web 

<!-- Presentation slides for developers -->

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    What is SSR? <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-tr m-6 flex gap-2">
  <a href="https://github.com/Paul-Isache" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
transition: slide-up
---

# A few things about me

- developer for over a decade
- focused on JavaScript and cloud architecture
- working with NodeJS since version 0.14

-  <carbon-logo-twitter /> @paul_isache
-  <carbon-logo-github /> Paul-Isache


<div class="abs-tr m-26 flex gap-2">
  <img class="inline-block h-40 w-40 rounded-full ring-2 ring-white" src="src/images/author.JPG" alt=""/>
</div>
 
<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>

---
transition: slide-up
---

# Rendering types

<div>
  <h3 v-click="1">CSR - server side rendering</h3>
  <p v-click="3">
    Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.
  </p>
</div>

<div>
  <h3 v-click="2">SSR - server side rendering</h3>
  <p v-click="4">
    Server rendering generates the full HTML for a page on the server in response to navigation. This avoids additional round-trips for data fetching and templating on the client, since it’s handled before the browser gets a response.
  </p>
</div>

<div class="m-25"  v-click="5">
 <p class="emoji">🤔</p>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>

<style>
  .emoji {
    font-size: 72px;
  }
</style>


---
transition: slide-up
layout: 'cover'
background: 'src/images/confused.jpeg'
background-size: '100%'
# apply any windi css classes to the current slide
class: 'text-center'
---

# How does it really work 🤷🏻‍♂️

<div class="abs-bl m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
    Genereated using https://deepai.org/
  </a>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>


---
transition: slide-up
---

# Some useful acronyms

- TTFB: time to first byte - measures the time it takes for the network to respond to a user request with the first byte of a resource
- FP: first paint - is the time between navigation and when the browser first renders pixels to the screen, rendering anything that is visually different from the default background color of the body
- FCP: first contentful paint - measures the time from when the page starts loading to when any part of the page's content is rendered on the screen
- TTI: time to interactive - measures the time from when the page starts loading to when it's visually rendered, its initial scripts (if any) have loaded, and it's capable of reliably responding to user input quickly

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>

---
transition: slide-up
---

# CSR web perfomance
<div flex flex-row h-full basis-full justify-center justify-between>
  <div >
    <img h-75 src='src/images/csr.png'>
   
  </div>

  <div w-100>
     <img src='src/images/csr-tti.jpg'>
     <div>
      <ul>
       <li>slow TTI due to the load of JavaScript bundle</li>
       <li>code splitting and lazy load can reduce the TTI</li>
      </ul>
     </div>
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>

---
transition: slide-up
---

# SSR web performance
<div flex flex-row h-full basis-full justify-center justify-between>
  <div >
    <img h-75 src='src/images/ssr.png'>
  </div>
  <div w-100>
     <img h-40 src='src/images/ssr-tti.jpg'>
     <div>
      <ul>
       <li>generaly reduced FP and FCP</li>
       <li>fast TTI as the JavaScript bundle should be lite</li>
      </ul>
     </div>
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>

---
transition: slide-up
---

# SSR dis/advantage

- Server rendering generally produces a fast First Paint (FP) and First Contentful Paint (FCP). Running page logic and rendering on the server makes it possible to avoid sending lots of JavaScript to the client, which helps achieve a fast Time to Interactive (TTI). Good browser optimizations like streaming document parsing.

- Good for SEO 

- Reduced compatiblity issues, as it does not extensively rely on the client-sid JavaScript libraries

- Improved data security. As within the API responses some informations are not rendered within the UI but they are sent as part of the response

- Server-side rendering seems to be a simple concept; however, its complexity increases as the complexity of the application increases.


---
transition: slide-up
layout: 'cover'
background: 'src/images/gremlin.png'
background-size: '100%'
# apply any windi css classes to the current slide
class: 'text-center'
---

# Which one to pick
<div class="abs-tl m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
    Genereated using https://deepai.org/
  </a>
</div>

<div class="abs-bl m-6 flex gap-2">
  #cs-team #punIntended 
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>


---
transition: slide-up
background: 'src/images/deepthink.jpeg'
class: 'text-center'
layout: 'cover'
---

# CSR or SSR 🤔?

<div>
 <h2 v-click="1">Depends on use-case, do your research first 👩‍🔬👨‍🔬</h2>
 <h2 v-click="2">Best ideal case, a combination of both solutions, using rehydration 🤯</h2>
</div>


<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>



---
transition: slide-up
layout: 'cover'
background: 'src/images/rehydration.jpg'
background-size: '100%'
class: 'text-center'
---

# rehydration 😱

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-twitter /> @paul_isache
  </a>
</div>



---
transition: slide-up
---

# What is rehydration?

<div>
  <p>Rehydration is the attaching event handlers and data to the HTML generated by SSR on the client-side.</p>
  <p>Rehydration ensures that the HTML rendered on the client-side is interactive and behaves as expected. Without rehydration, the client-side JavaScript would have to re-fetch data and re-create event listeners, which would lead to slower page load times and a poor user experience.</p>
  <p>Rehydration is often used in conjunction with SSR frameworks such as React, Next.js, Remix or Gatsby</p>
</div >


---
transition: slide-up
layout: 'cover'
background: 'src/images/rehydration.jpg'
background-size: '100%'
class: 'text-center'
---

<div>
  <a href="https://github.com/nearform/the-fastify-ssr-workshop/tree/feat/walkthrought" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
     <carbon-logo-github /> GitHub example
  </a> <br/>
  https://github.com/nearform/the-fastify-ssr-workshop/tree/feat/walkthrought
</div>

---
transition: slide-up
background: 'src/images/q&a.jpeg'
layout: 'cover'
background-size: '100%'
class: 'text-center'
---
# Q&A
