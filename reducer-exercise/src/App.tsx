import { useReducer } from "react"
import themeReducer from "./reducers/themeReducer"

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, { isDark: false, fSize: 16 })
  
  return (
    <div style={{backgroundColor: state.isDark ? 'black' : 'white', color: state.isDark ? 'white' : 'black', fontSize: state.fSize}}>
      <h2>dark mode test</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est delectus ratione quis nihil veritatis hic eveniet, dignissimos vero? Eum quasi excepturi illum assumenda facere voluptatibus, placeat nisi beatae id exercitationem.</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Dark Mode</button>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase Font Size</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrease Font Size</button>
    </div>
  )
}

export default App