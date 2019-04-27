# Random Notes from Javascript

## Styling

When invoking CSS in JSX, change it from kebob-case to lowerCamelCase.

```html
    <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
```

Or, put it in a variable...

```
function App() {
  
  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00"
  }
  
  return (
    <h1 style={styles}>Hello World!</h1>
  )
}
```

## Props

Props are the properties that you give to JSX tags.

It's like in HTML, it's like the `href="https://google.com"` in `<a href="https://google.com">This is a link</a>`

Here's an example:

```
<ContactCard 
                name="Mr. Whiskerson" 
                imgUrl="http://placekitten.com/300/200" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
```

And here's what the contact card component looks like:

```
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
```

It's a strong convention to call them props.

A more general way to write this that will be helpful when  we're importing data in JSON format:

```
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
```

You would then need to change the function to `props.contact.name` instead of `props.name`.


## States

```
this.handleChange = this.handleChange.bind(this)

handleChange(id) {
  const updatedTodos = prevState.todos.map(todo => {

    })
}
```

## Conditional Rendering

