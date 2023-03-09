# Hooks

## How NOT to use Hooks

- Do not place them in a conditional or a loop (ex: 1)
- Do not place them in global namespace (ex: 2)

Ex: 1
```jsx
  if (true) {
    useState("some value")
  }
```
> This will cause a possible infinite loop
`Error: React Hook "useState" is called conditionally`

Ex: 2
```jsx
import './App.css';
useState()

function App() { }
```
`Error: React Hook "useState" cannot be called at the top level`    

## useEffect() Hook

A catch-all for componentDidMount, componentDidUpdate, and componentWillUnmount class-based lifecycle methods. It allows us to specify a re-render outside of the normal render lifecycle.

### Using useEffect()

```jsx
useEffect(() => { }, [])
```
- callback function holds the side effect we want to trigger
- dependency ([ ]) holds WHEN the side effect will cause a re-render
    - no dependency - re-render every time
    - empty dependency - re-render occurs only once
    - including state variable - re-render occurs when the variable changes

## Conditional Rendering

