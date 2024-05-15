import { useState } from 'react'
import Title from "../../shared/components/Title.js";
import Buttons from "../../shared/components/Buttons.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Title title={"ReactJs"}/>
        <Buttons onClick={() => alert("This is ReactJs")}>Hello</Buttons>
    </>
  )
}

export default App
