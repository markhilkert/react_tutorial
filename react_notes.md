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