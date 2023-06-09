import './App.css'
import {DatePicker, DatePickerProps} from "antd";
import {useEffect, useState} from "react";

function App() {

    const [difference, setDifference] = useState(0);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    useEffect(() => {
        if (!to || !from) return;
        const milPerDay = 60*60*24;
        const value = Math.round((to - from - 1)/milPerDay);
        setDifference( value < 0 ? 0 : value);
    }, [to, from])

    const onChangeFrom: DatePickerProps['onChange']  = (date) => {
        if(!date) { setDifference(0); return;}
        setFrom( date.unix());
    }

    const onChangeTo: DatePickerProps['onChange']  = (date) => {
        if (!date) {
            setDifference(0);
            return;
        }
        setTo(date.unix());
    }

  return (
    <>
      <DatePicker picker="date" onChange={onChangeFrom}/>
      <DatePicker picker="date" onChange={onChangeTo}/>
        {difference}
    </>
  )
}

export default App
