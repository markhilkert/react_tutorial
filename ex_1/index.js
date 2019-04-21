import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
  return (
    <ul>
      <li> Milo </li>
      <li> Johnny </li>
      <li> Otis </li>
    </ul>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)