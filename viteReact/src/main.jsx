import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp(){
//     return(
//         <div>
//             <h1>custom app of react</h1>
//         </div>
//     )
// }

// const reactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "click me to visit google",
//   };

const anotherName='ignore those wo ignore you'

  const anoterElement=(
    <a href="https://google.ccom" target='_blank'>visit me</a>
  )

  const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target: "_blank" },
    'click me to visit brave',
     anotherName
  )


ReactDOM.createRoot(document.getElementById('root')).render(

    // anoterElement
    // reactElement
    // <MyApp/>
    <App/>

)

