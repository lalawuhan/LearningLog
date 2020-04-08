## Thinking in React

Todo list tree broken into custom components  
- Broken up into Container
  - Search Bar
  - To Do list
      - To do item
      - To do item
      - To do item

## Function Components and JSX
JSX looks like html, but it is a version of javascript compiled by babel

` const name = "John Smith"`

Custom greeting component
```jsx


function Greeting(){
    //return jsx
    //put any javascript expression inside curly braces
    return(
        <div>
            <h1> Hi there, {name} </h1>
        </div>
    )}
```
- To use the greeting

```jsx
function App(){
    //return jsx
    return(
        <div className="App">
            <Greeting />
            //will output Hello John Smith
        </div>
    )}
```

## Passing data with props
- Passing data from parent to child needs props (properties)

```jsx
function Greeting(props){
    return(
        <div>
            <h1> Hi there, {props.name} </h1>
        </div>
    )}
```

```jsx
function App(){
    //two below components can have different props because they are independent
    return(
        <div className="App">
            <Greeting name="Olio"/>
        </div>
        <div>
        <Greeting name="Max'>
        </div>
    )}
```
## Changing Data with State

To describe data you want to change, you import useState from React

`import React, {useState} from 'react';`

useState will give you state that can change and will rerender the application

```jsx
function Greeting(props){
    //useState returns an array, so destructure, array contains 2 things
    //1.value of state
    //2.function that updates that state
    const [count, setCount] = useState(0) //default value of 0
    return(
        <div>
            <h1> Hi there, {props.name} </h1>
            <p>You clicked {count} times.</p>
        </div>
    )}
```

## Automatic Updating

```jsx
function Greeting(props){
    
    const [count, setCount] = useState(0) 
    const updateCount = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1> Hi there, {props.name} </h1>
            <p>You clicked {count} times.</p>
            <button onClick={updateCount}>Click Me</button>
        </div>
    )}
```
If rendered inside two components, they will each have their own state.

## Making a List

```
const SONGS = [
    {id:4, title: 'Umbrella'},
    {id:5, title: 'We Found Love'},
    {id:6, title: 'Diamonds'},
]
```

```jsx
function MyList(props){
return(
    //loop over data
    <div>
    //map takes a function that will return each item in a loop
    props.items.map(item => {
        //on every iteration, set a key so react keeps track + better performance
        return <p key={item.id}>{item.title}</p>
    }
    </div>
)}
```

```jsx
function App(){
    return(
        <div className="App">
          <MyList items={SONGS} />
        </div>
    )}
```

## Styling Components
- You can use regular stylesheets
    - instead of class, use className
- Inline Styling
```jsx
function InlineStyle(){
    return(
        <p style={{fontSize:20, color:'#0000ff'}}>
        Blue Text
        </p>
    )}
```
or declare it above in a const
```jsx
function InlineStyle(){
    const style = {
        fontSize:20, 
        color:'#0000ff'
    }
    return(
        <p style={style}>
        Blue Text
        </p>
    )}
```

## Async Functions and Side Effects

To perform asynchronous functions import useEffect, and use it to tell React when you have side effects

`import React, {useState, useEffect} from 'react';`


```jsx
function GetData(props){
    const [data, setData] = useState({})
    //you need to pass it a function
    useEffect(()=>{
        fetch("https://swapi.co/api/people/" + props.id)
        .then(response => responsejson())
        .then(result => setData(result))
        //second argument to useEffect, which is an array of dependencies
        //any time, props id changes, it will rerun the useEffect to fetch a new person
    }, [props.id]) //not setting this can cause an infinite loop as it will keep rerendering

    const [count, setCount] = useState(0) 
    return(
        <div>
        //&& means will only render data if it exists and not null
            <p>Name : {data && data.name} </p>       
        </div>
    )}
```

```jsx
function App(){
    return(
        <div className="App">
          <GetData id={2}/>
        </div>
    )}
```