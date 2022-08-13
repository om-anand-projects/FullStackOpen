// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './reRenderApp';
// import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// //Re Render app
// let counter = 1

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App counter={counter} />
//   )
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

//Stateful

import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './stateApp'
import App from './eventHandler'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)