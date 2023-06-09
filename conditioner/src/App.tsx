import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [conditioner, setConditioner] = useState(false);
  const [controller, setController] = useState(false);
  const [window, setWindow] = useState(false);
  const [powerSocket, setPowerSocket] = useState(false);
  const [temperature, setTemperature] = useState(false);

  useEffect(() => {
    setConditioner(controller && window && powerSocket && temperature)
  }, [controller, window, powerSocket, temperature])
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
      <span style={{marginBottom: 20}}>
        Conditioner {conditioner.toString()}
      </span>
      <button onClick={()=>setController(!controller)}>Controller {controller.toString()}</button>
      <button onClick={()=>setWindow(!window)}>Window {window.toString()}</button>
      <button onClick={()=>setPowerSocket(!powerSocket)}>Power socket {powerSocket.toString()}</button>
      <button onClick={()=>setTemperature(!temperature)}>Temperature {temperature.toString()}</button>
    </div>
  )
}

export default App
