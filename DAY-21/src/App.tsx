import React from "react"
import { Card } from "./components/Card"
import { WeightInput } from "./components/WeightInput"
import { WaterCalc } from "./components/WaterCalc"
import { ThemeButton } from "./components/ThemeButton"
import './App.css'

function App() {
  
  // create state
  const [weight, setWeight] = React.useState<number>(0)

  return (
    <>
      <Card title="คุณควรดื่มน้ำวันละเท่าไหร่ ?" foot="ปริมาณน้ำ = น้ำหนัก(Kg) x 2.2 x 30/2">
        <WaterCalc weight={weight} />
        <WeightInput setWeight={setWeight} />
      </Card>
      <ThemeButton />
    </>
  )
}

export default App