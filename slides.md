---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://images.unsplash.com/photo-1606318005254-bdb2bcd14d34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjY4Njc2Mjc5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Nx monorepo
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Nx monorepo

Using Nx in real life

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/Paul-Isache/nx-slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

- 👨🏻‍💻 **Developer** - for over 10 years
- 🚀 **Javascript enthusiast**. JS everywhere
- Jumped into Full Stack Javascript development, back when NodeJS was at version 0.8
- Fastify JS fanboy

<br/><br/><br/><br/><br/>

**Social**
- **<carbon-logo-github />** https://github.com/Paul-Isache/
- **<carbon-logo-twitter />** https://twitter.com/paul_isache
- **<carbon-logo-medium />** https://medium.com/@paulisache

---

# What is Nx?

<div v-click="1">
  Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.
  [learn more](https://nx.dev)
</div>

<br/>
<div v-click="2">
  <h1> What is a monorepo 🤯? </h1>
  A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.
  <br/><br/>
</div>
<div v-click="3">
  <img
    v-motion
    src="components/mono.png"
  />
</div>

---
layout: image-right
image: components/comparison.png
class: comparison
---

# Is this the only tool 🤔?
<br/><br/><br/>
<div v-click="1">
   <h3> No 🙈 </h3>
</div>
<br/>
<div v-click="2" >
  There are other tools similar but, Nx seems to be the one that has most the most features.
  <br/><br/>
  You can check the other tool comparison on https://monorepo.tools.
</div>

---

# Benefits
<br/><br/><br/><br/>
- 👀 improve visibility between services
- 🗣 code sharing, reduce duplication
- 📚 code standardization. one config to rule them all
- 👨🏻‍💻 depency update made easier, as the package json is in root and the package will reference that version
- 👻 improve collaboration, easier to design and maintain

---
layout: two-cols
---

# Affected files 
<br/><br/><br/><br/>
<div>
  <ul>
    <li>Nx detectes affeted files </li>
    <li>will execute according task (build, lint or test) against that package</li>
    <li>will cache certain tasks, has a hashing system </li>
  </ul>
</div>

::right::

<div flex flex-col h-full basis-full justify-center>
  <img  src="components/affected.png"/>
</div>
---
layout: image-right
image: https://images.unsplash.com/photo-1543285198-3af15c4592ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80
---

# Workspace generator 

```bash {all|2|8-19|all} 
# nx workspace-generator <gen_name> <service_name>
nx workspace-generator testgenerator first_service

>  NX  Generating /Users/pauli/Documents/
presentations/nx/demo/dist/out-tsc/tools/
generators/workspace-generators.json:
testgenerator

CREATE packages/first_service/README.md
CREATE packages/first_service/.babelrc
CREATE packages/first_service/src/index.ts
CREATE packages/first_service/src/lib/testmock
.spec.ts
CREATE packages/first_service/src/lib/testmock.ts
CREATE packages/first_service/tsconfig.json
CREATE packages/first_service/tsconfig.lib.json
CREATE packages/first_service/project.json
CREATE packages/first_service/.eslintrc.json
CREATE packages/first_service/jest.config.ts
CREATE packages/first_service/tsconfig.spec.json
```
<!-- 
<arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> -->

<style>
code {
  overflow: hidden
}
</style>

---
layout: two-cols
---

# Result


::right::

<img h-lg block src="components/structure.png" height="400px"/>


---

# Downsides

- build and release pipelines will get a bit more complex
- depending on the team experience there might be an accomodation period
- git tags and a good branching strategy will be required to be in place

---

# Real life impressions

- reduce confusions what goes where
- easy spin-up of a a new service or package
-  

---
layout: center
class: text-center
---

# Q&A
