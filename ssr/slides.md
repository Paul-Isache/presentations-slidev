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
transition: slide-left
# use UnoCSS
css: unocss
---

# Rendering on the web 

<!-- Presentation slides for developers -->

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-tr m-6 flex gap-2">
  <a href="https://github.com/Paul-Isache" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
transition: fade-out
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
    <carbon-logo-twitter /> paul_isache
  </a>
</div>

<style>
  .emoji {
    font-size: 72px;
  }
</style>

---
transition: slide-up
---

# How client side rendering works

```mermaid {scale: 0.52}
sequenceDiagram
  user->>browser: https://apollo.criver.com
  browser->>web_server: load content
  web_server->>browser: load content
  Note left of browser: render content
  user->>browser: interaction on dashboard
  browser->>web_server: get dashboard data
  web_server-->>database: get dashboard data
  database-->>web_server: return dashboard data
  Note left of browser: render content
  web_server->>browser: return dashboard data
```

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-twitter /> paul_isache
  </a>
</div>

---
transition: slide-right
---

# How server side rendering works

```mermaid {scale: 0.52}
sequenceDiagram
  user->>browser: https://apollo.criver.com
  browser->>web_server: load content
  web_server-->>database: get dashboard data
  database-->>web_server: return dashboard data
  web_server->>browser: load content
  Note left of browser: render content
```

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-twitter /> paul_isache
  </a>
</div>


---
transition: slide-right
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
    <carbon-logo-twitter /> paul_isache
  </a>
</div>


---
transition: slide-up
---

# Showcase

<div flex flex-row h-full basis-full justify-center justify-between>
  <div>
    <img h-75 src='src/images/csr.png'>
  </div>

  <div>
    <img h-75 src='src/images/ssr.png'>
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/paul_isache" target="_blank" alt="GitHub"
    class="text-xs slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-twitter /> paul_isache
  </a>
</div>


---
transition: slide-up
---

# Key factors

- TTFB: time to first byte 
- FP: first paint - CSR/SSR
- FCP: first contentful paint - CSR/SSR
- TTI: time to interactive - CSR/SSR

---
transition: slide-up
---

# Advantage disavantages

- Server-side rendering seems to be a simple concept; however, its complexity increases as the complexity of the application increases.
- Rendering a big application on the server-side can be very time consuming and it may increase the loading time due to it being a single bottleneck.


---
transition: slide-up
---

# Combining client and server side rendering

- Server-side rendering seems to be a simple concept; however, its complexity increases as the complexity of the application increases.
- Rendering a big application on the server-side can be very time consuming and it may increase the loading time due to it being a single bottleneck.


---
transition: slide-up
---

# rehydration pun


---
transition: slide-up
---

# what is rehydration and how it works



---
transition: slide-up
---

# best use scanerarios
when to
how to
frameworks


---
transition: slide-up
---
# QA

### Keyboard Shortcuts
|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>
