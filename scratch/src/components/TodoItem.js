import React from "react"

const TodoItem = (props) =>
  <div>
    <input 
      type="checkbox" 
      checked={props.item.completed}
      text={props.item.text}
      onClick={ () => props.handleChange(props.item.id) }
    />
    <p> { props.item.text } </p>
  </div>

export default TodoItem