---
title: Concurrent React
publishedAt: 04/1/2025
referrers: ['sebastian', 'john carmack']
tags: ['recipe', 'react', 'internal', 'flight-rule', 'starter-kit']
featured: true
except: the render power
---

## roadmap

- React FIBER
- Linked list
- render then commit
- useState Hook
- WORK Loo
- createRoot()
- time slicing
- suspense

github.com/pumber/didact



```ts
function useState(initialValue) {
  var _val = initialValue
  function state() {
    return _val
  }
  function setState(newVal) {
    _val = newVal
  }
  return [state, setState]
}

```


```ts index.ts
const {render, createTextElement, createElement} from './utils'

const React = { createElement}

function App(){
    return (
        <h1> hello world</h1>
    )
}

const textEl = createTextElement("hello world")

const rootEl = createElement('h1', undefined, textEl)
const container = document.getElementById("root")
render(rootEl, container)


```


JSX support

`@babel/preset-react`


## Depth-first in turn Render

:::code-group

```ts render in turn
export function render(element, container){
    if(typeof element.type === 'function')

    const dom =
        element.type === 'TEXT_ELEMENT'
        ? document.createTextNode("")
        : document.createElement(element.type)

    const isProp = key => key !== 'children'
    Object.keys(element.props)
        .filter(isProp)
        .forEach(name => {
            dom[name] = element.props[name]
        })
    element.props.children?.forEach(child => render(child, dom))

    container.appendChild(dom)
}
```
```ts

```


::: code-group



- React Element creator helper

```ts
export type ReactElement = {
    type:
    props: {
        onEvent
        attributes
        children
    }
}

```


```ts
export function createTextElement(text){
    return {
        type: 'text',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

export function createElement(type, props, ...children){
    return {
        type,
        props: {
            children: children.map(child =>
                typeof child === 'object' ? child: createTextElement(child)
            )
        }
    }
}
```







## Fiber and Fiber Render


Render then commit

React stores an internal data structure(called fiber) that tracks all the current component instances that exist in the application.


- linkList to parent, sibling, and child components
- internal metadata that React uses to track the rendering process
- hooks

```ts
export type Fiber {
    dom
    type
    props
    // Link list need to construct fiber tree
    parent:  Fiber | null;
    child: Fiber | null;
    sibling: Fiber | null;
    alternate:
    effectTag
    hooks:
}
```

[see the full definition of `Fiber` type ](https://github.com/facebook/react/blob/v18.0.0/packages/react-reconciler/src/ReactInternalTypes.js#L64-L193)



If I can't use recursion, how do I traverse through the tree? Learn to use the singly linked list tree traversal algorithm. E.g. parent first, depth first:


```ts
let root = fiber;
let node = fiber;
while (true) {
  // Do something with node
  if (node.child) {
    node = node.child;
    continue;
  }
  if (node === root) {
    return;
  }
  while (!node.sibling) {
    if (!node.return || node.return === root) {
      return;
    }
    node = node.return;
  }
  node = node.sibling;
}


```

requestIdleCallback


```js
let wipRoot,
    nextUnitOfWork = null

wipRoot = {
    dom: container
    props: {
        children: [<App/>]
    }
}

nextUnitOfWork = wipRoot

while (nextUnitOfWork){
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
}

commitWork(wipRoot.child)
```

### Fiber Render - render then commit

```js

export function performUnitOfWork(fiber, resetWipFiber=){
    const isFunctionComponent = fiber.type instanceof Function
    if(isFunctionComponent) {
        const children = [fiber.type(fiber.type)]
    } else {
        if(!fiber.dom) fiber.dom = createDom(fiber)
    }
    if(fiber.child) return fiber.child
    let nextFiber = fiber
    while(nextFiber) {
        if(nextFiber.sibling) return nextFiber.sibling
        nextFiber = nextFiber.parent
    }
}

```



```js
export function commitWork(fiber){
    if(!fiber) return
    let domParentFiber = fiber.parent
    while(!domParentFiber.dom) {
        domParentFiber = domParentFiber.parent
    }
    const domParent = domParentFiber.dom
    if(fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
        domParent.appendChild(fiber.dom)
    } else if (fiber.effectTag === "UPDATE") {
        updateDom(fiber.dom, fiber.alternate.props)
    } else if (fiber.effectTag === 'DELETION') {
        commitDeletion(fiber, domParent)
    }

    commitWork(fiber.child)
    commitWork(fiber.sibling  )
}

```


```js
function createDom(fiber) {
    const dom =
        fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode("")
        : document.createElement(fiber.type)
    updateDom(dom, {}, fiber.props)

}
```

May be paused, aborted or restarted by React.

```js
let wipRoot,
    nextUniOfWork = null
function render(el, _container) {
    wipRoot = {
        dom: container
        props: {
            children: [el]
        }
    }

    let nextUnitOfWork = wipRoot
    while(nextUnitOfWork){
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    commitWork(wipRoot.child)
}

```


- refactor


```js

function createRoot(container) {
    return {
        render(el) {
            wipRoot = {
                dom: container
                props: {
                    children: [el]
                }
            }

            let nextUnitOfWork = wipRoot
            while(nextUnitOfWork){
                nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
            }
            commitWork(wipRoot.child)
        }
    }
}

```


- workloop + timeslicing

paused, resumable rendering


dleDeadline: timeRemaining() method


![](/oss/time-slicing-render.png)



decouple framework code with app code


referrer: https://tkdodo.eu/blog
link: Application monitoring sentry, analysis
link: built with(https://trends.builtwith.com/media/online-video-platform/traffic/Entire-Internet)
link: wappalyzer(https://www.wappalyzer.com/)
master: Azar Raskin, guillermo rauch

## meet the team

Dan Abramov from our team just spoke at JSConf Iceland 2018 with a preview of

sebmarkbage

Brian Vaughn
https://pomb.us/

https://sophiebits.com/
Engineering at Notion. Before that, was VP of Engineering at Humu and managed the React team at Facebook.

https://x.com/reactjs


https://www.brandondail.com/

https://react.dev/community/team

## about react

data change is root of all evils

- cost-effective render process or Manual DOM operation to sync with state in data model(tend to drop frames)
- top-level event delegation
- provides hooks for custom update logic

open source project never finished， it is abandoned
npm trend




data fetching
generate html
routing
code-spliting

remix next astro nuxt
trend react，vite conf， state of js

react dom ， react router， redux
 plugin Arch
flux one way data flow pattern
eventemiiter
middleware
store dispatcher action view
usecase guide
flux-inspired lib（flux war）
you don’t need Flux if you don’t care about immediately reflecting changes in the UI
If you’re okay with data appearing out of sync until the next refresh,
make data changes easy to reason about

Say users can follow each other, and when following succeeds, we need to update “followers” counter of one user and “following” counter of another user, as well as “is following” and “is follower” boolean fields to re-render the button state.
We want to do this optimistically and without waiting for server response. This means we first increment the counters and update boolean flags, then send a request to server, and if it fails, we roll back both the counters and the flags. Simple huh?
The trouble is, humans do have a knack of choosing precisely those things that are worst for them.
cache data in memory
update/invalidate that cache

react redux design philosophy
hooks for time travel，replay，record
recent posted
tags
series
most popular

ongoing confusion over when, why, and how React will re-render components, and how use of Context and React-Redux will affect the timing and scope of those re-renders




Further Information" section for reference
up-to-date refer







## philosophy on how to build User interface

simplicity art of organizing complexity - Edsger Dijkstra


### reactive programming
Data binding syncs state in your View with state in your data model so you don't have to.

ember.js, backbone.js
build around observable idea
event emitter  - trigger a callback whenever a value change
computed property - recomputed value whenever their dependencies change


```ts build rotten tomatoes
[
    {
        title: 'Bartell-Widlerman",
        upvotes: 92,
        downvotes:62
    }
]

function totalVotes(company){
    return company.get('upvotes') + company.get('downvotes')
}

var Company = Ember.Object.extend({
    score: function() {
        return this.get('upvotes') * 100 /  totalVotes(this).toFixed(2)
    }.property('upvotes', 'downvotes')
})


var AppModel = Ember.Object.extend({
    topCompanies: function(){
        return this.get('companies').sort(function(a,b){
            return totalVotes(b) - totalVotes(a)
        }).slice(0, 3)
    }.property('companies.@each.upvotes', 'companies.@each.downvotes')
})

var appModel = AppModel.create({
    companies: getCompaniesJSON(100).map(function(json){
        return Company.create(json)
    })
})
```


leaking

Angular: Dirty Checking

the point is not that we can't build applications this way,
we can't preformant applicatios this way,
the points is we can do it simpler way


## React way: A less leaky polyfill for reactive DOM

```ts
function totalVotes(company){
    return company.upvotes + company.downvotes
}

function renderRow(compnay){
    return DOM.li({className: 'item'},
        company.title, ' ',
        (company.upvotes * 100 / totalVotes(company).toFixed(2), '%')
    )
}


function renderApp(companies)P
    return DOM.ul({className: 'list'},
        companies.sort(function(a,b) {
            return totalVotes(b) - totalVotes(a)
        })
        .slice(0,3)
        .map(renderRow)
    )

var appModel = renderComponent(renderApp(appModel), document.body)
```

## Render process

- The "Render Phase" - calculating the change should apply to DOMS
- The "Commit phase" is the process of applying those changes to the DOM
 run hooks
- The "Cleanup phase - Runs before a component is removed.Prevents memory leaks
### Render Phase

Pure and has no side effects. May be paused, aborted or restarted by React.


when data changes,components that have been flagged as need to re-render.

For each flagged component, React will call either FunctionComponent(props) (for function components), or classComponentInstance.render() (for class components) , and save the render output for the next steps of the render process



synchronous sequence.

dom diff  to avoid applying changes to the DOM.
reconciliation





[know the flow](https://julesblom.com/writing/react-hook-component-timeline#quiz)


["act like we're redrawing the entire app on every update" - Pete Hunt](https://www.slideshare.net/slideshow/react-preso-v2/26589373)



Re-render on every change? That seems expensive.
And doesn't mess up form fields and scroll positions
You can't just throw out the DOM and rebuild it on each update
It's too slow and you'll lose form state and scroll position


react build a virtual DOM and events system

Update on data changed

- build a new virtual DOM subtree
- diff it with the old one
- compute the minimal set of DOM mutations and puts them in a queue
-  and batch executes all updates


####  generate change apply to DOM

- insert html string
- safe inert(xss vulnerability) : render function `createElement()` or `h()`, all JSX are compiled to render function call expression`React.createElement()`
- virtual dom - dom representation - `vDOM` or `ReactElement`
- UI design friendly to contribute code, `JSX` or vue SFC`template`
`createElement()` returns `React elements`, which are plain JS objects that describe the intended structure of the UI


expressive power of a language
Practical expressivity is a measure of ideas expressible concisely(简洁)
and readily(轻而易举) in a language

- Key value observable entangles app code with observable
- Angular-style/ Angular-like dirty checking forces everything through $scope, $watch and directives
- Virtual DOM needs a signal to something have changed


`O(v) vs O(m)`
Size of your view vs size of your data model
infinite scroll sortable data table which could only show 10 rows
search om mobile device you might have 100 or 200 cached results but you're only showing five in the viewport


If you're going to keep making the performance argument,
you'll eventually lose

tradeoff:
worst case: easy to optimize to with one frame at the end without
breaking out abstraction


###  Commit Phases
- The "Commit phase" is the process of applying those changes to the DOM
 run hooks

#### Lifecycle & hook flow

Mount

evalute local variables, initialize hooks

- Insert DOM nodes

- set DOM refs
- useLayoutEffect setups
- DOM paint
- useEffect setups


Update

render phase:
evaluate local variables

commit phase: Can work with DOM, run side effects, schedule updates.

- update DOM nodes
- Unset DOM refs
- useLayoutEffect cleanups
- Set DOM refs
- useLayoutEffect setups
- DOM paint
- UseEffect cleanups
- useEffect setups


Unmount

- useLyaoutEffect cleanups
- Unset DOM refs
- Remove DOM nodes
- useEffect cleanups


 React 18 added "Concurrent Rendering" features like useTransition.
phase to allow the browser to process events
 React will either resume, throw away, or recalculate that work later

for more hooks flow
[Timeline of a React Component With Hooks](https://julesblom.com/writing/react-hook-component-timeline)
[](https://wavez.github.io/react-hooks-lifecycle/)
[Dan Abramov’s diagram ](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

There's a mutable + change tracking approach and there's an immutability + referential equality testing approach

## build components, not template (reusable)

- components are reusable
- components are unit testable

abstraction layer
separate of concern
reduce coupling, increase cohesion

symptoms of coupling: hard to maintain
track down call side refs


single responsibility principle

classify, group function belong together into module




Human intellectual power are rather geared to static relations
and power to visualize process evolving in time are relatively poorly developed.For some reason we should di( as  wise  programmers aware of  our limitations) our utmost to shorten the conceptual gap between the static program and dynamic process, to make the corespondent between the program(spread out in text space) , and the process(spread out in time) are as trivial as possible

trace flow of program
process over time




## Purity in React


- Mutate a variable binding, unless that binding was "newly created".
- Mutate a property on an object, unless that object was "newly created"
- Mutate a property on this except in the constructor.

- Call Math.random() or Date.now() since these read values that later change.
- Issue a network request (POST), file system or other I/O that writes to a persistent store. E.g. impression logging, create, updates or deletes.



## Component Metadata and Fibers






## Component


state, props, context


## Suspense

Joseph Savona
concurrent mode and Suspense



## What's missing

Fragments / portals / context/ refs

devtools/ dev mode warning


priority queue/ expiration
server side rendering
error boundaries
synthetic events
memoization
suspense + suspenseList
hooks useTransition + useDeferredValue

keys


## component lifecycle

setup/establishing initial state of the component

invoke once the component is mounted to the DOM
fetch data
setup listeners
render DOM node

component local stage change, receiving new props

componentDidMount
componentDidUpdate
componentWillUnmount: cleanup listener



```tsx
const styles = {
    container: {
        display: 'flex',
        position: 'relative',
    }.
    content: {
        fontSize: '20px',
        position: 'absolute',
        left: '0',
        right: '0',
        textAlign: 'center',
        marginTop: '20px'
    },
    tooltip: {
        fontSize: '14px',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: 100%,
        textAlign: 'center',
        marginTop: '50px'
    }
}

export class Loading extends React.Component {
    constructor(props: {speed: number, text: string}) {
        super(props);
        this.state = { content: props.text, hoveringLoading: false };
    }

    componentDidMount() {
        const { text, speed } = this.props;
        this.handler = setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState( ({content}) => ({content}: content + "."));
        }, speed);
    }

    componentWillUnmount() {
        clearInterval(this.handler);
    }

    mouseOver = (id: string) => {
        this.setState({[id]: true});
    }
    mouseOver = (id: string) => {
        this.setState({[id]: false});
    }

    render() {
        const {isHoveingIndicator } = this.state
        return (
           <p>{this.state.content}</p>
           <li
                onMouseOver={() =>  this.mouseOver('hoveringLoading')}
                onMouseOut={() =>  this.mouseOut('hoveringLoading')}
            >
                {this.hovering && <div style={styles.tooltip} > loading indicator </div>}
           </li>
        )
    }
}
Loading.defaultProps = {
    speed: 1000,
    text: 'Loading'
}
```




