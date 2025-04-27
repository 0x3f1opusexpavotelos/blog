---
title: Concurrent React
publishedAt: 04/1/2025
tags: ['hook']
referrers: ['sebastian', 'john carmack']
---

initialize the state of component inside of the constructor method
as the state property of instance


bind all the method to component instance inside of the class constructor method


createClass React.Component

Class field autobinding

component coupled with the lifecycle methods


keep repos in sync with props


follow the flow of high order component
```tsx
function withRepos(Component) {
  return class WithRepos extends React.Component {
    state = {
      repos: [],
      loading: false
    }
    componentDidMount() {
     this.getRepos(this.props.id);
    }

    componentDidUpdate(prevProps) {
      if(prevProps.id !== this.props.id) {
        this.getRepos(this.props.id);
      }
    }

    getRepos = (id) => {
      this.setState({loading: true})
      fetchRepos(id)
        .then((repos) => {
          this.setState({ repos });
        })
        .catch((error) => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      )
    }

  }

}

```

```tsx
// code reuse and composition
// trigger rerun to sync with repo
function useRepos(id) {
  const [repos, setRepos]  = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
  setLoading(true)
    fetchRepos(id)
      .then(repos => {
        setRepos(repos)
        setLoading(false)
      })
}, [id])

  return {repos, loading}
}

```

useState preserve value across component render and trigger render of the component
useRef preserve value across component render and won't trigger re-render of the component


closure preserve across function call



## useContext

pass props down all the way through the component tree
provider declare the state available to through component tree


consumer subscribe to the state provided by the provider


```tsx
import LocalContext from '@/context/LocalContext';

// wrap component in a consumer component to access, change  the state
// component subscribes to the state will render with new state
export default function Blog() {
  return (
    <LocalContext.Consumer>
        {(locale) => <Post locale={locale} />}
      </LocalContext.Consumer>
  )
}

```


```tsx
// reference identity
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        locale: 'en',
        toggleLocale: () => {
          this.setState((prevState) => ({
            locale: prevState.locale === 'en' ? 'zh' : 'en',
          }));
        },

     };
  }



  render() {
    return (
      <LocalContext.Provider value={this.state}>
        <Blog />
      </LocalContext.Provider>
    );
  }
}
```

```tsx
rebder() {
  return (
  <LocalContext.Provider value={}>
  </LocalContext.Provider>
  )
}

```


component tree

## useEffect




side effect: state change can be observer outside of its local env

DOM, api request

- add a effect
- skip a effect, invoke
- clean up the effect

### effect execution order
effect won't run effect before DOM updates  browser re-paint


### Skipping invoke side effect
only invoke the effect once on the initial render
opt-out re-invoke effect on subsequent re-render,


```tsx
React.useEffect(() => {
  // will be invoked on the initial render
  // and all subsequent re-renders
})
React.useEffect(() => {
  // will be invoked on the initial render
  // and when the "id" or "authed" changes
})

React.useEffect(() => {
  // will only be invoked on the initial render
}, [])

```

### sideEffect cleanup phase



cleanup when component remove from DOM


```ts
React.useEffect(() => {
  return () => {
    // previous cleanup effect will be invoke
    //  just before reinvoke the new effect on a re-render
    // AND just before removing the component from the DOM
  }
})




```



dispatch type of action occured instead of dispatching value directly
how state change respond to that action is implementation detail
extra payload
map action to state transitionl separate
 how state update from what action occured
manage of complety
separate of concern
layof abstraction
transition event
preserve value with usestate
not change to the dom are painted

Critical rendering path
drop frames， frame budge
interaction blocking，render blocking
responsiveness
time slicing， courrent redner
main thread scheduling

event loop processing model
render queue
task queue
ui event
event handler
animation frame callbacks
executed at the beginning of a rendering frame.
idlecallback
taskcallback
render-blocking
visibility statehidden
suppressed for view transitions

The DOM manipulation task source
The user interaction task source
The networking task source
The navigation and traversal task source
The rendering task source

run sideeffect with useEffect
skip invoke effect
only run effect on/when initial render
sync with external system not as a way to change value
side effect and pure function
react render， not dirty check

component are not always pure
opt-out default render behavior
value of current state
referential equality replace not merge
component  own and manage local state
lift state and pass down through props
compose ui state， event handler
escape hatcher

ignore if the response is not latest one
which response will resolve first
whatever resolve last

add event listener once on initial render

rendering without

