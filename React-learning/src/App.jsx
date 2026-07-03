import { LearnEvent } from './components/LearnEvent.jsx'
import LearnComponent from './components/learnComponent.jsx'
import { LearnJSX } from './components/LearnJSX.jsx'
import { LearnProps } from './components/LearnProps.jsx'

function App() {
  let roll = 101
  return (
    <>
      <LearnComponent />
      <LearnJSX />
      <LearnProps name="Mushib Khan" value={roll}/>
      <LearnEvent />
    </>
  )
}

export default App