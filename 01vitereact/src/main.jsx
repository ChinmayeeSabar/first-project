import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


/*function Myapp(){
    return(
        <h1>Custom App!</h1>
    )
}*/

/*const reactElement = {
    type: 'a',
    props: {
        href: 'http://geeksforgeeks.org',
        target: '_blank'
    },
    children: 'click me to visit gfg'
}*/

/*const anotherElement = (
    <a href='http://google.com' target='_blank'>visit the link</a>
)*/

const anotherUser = 'hello pari'

//Creation of an element by React
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
