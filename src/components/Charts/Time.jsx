import  { useState } from 'react'
import './index.css'
import { useCurrency } from '../../context/useContext'

function Time() {
    const { setDays } = useCurrency(1)
    const [isClicked, setIsClicked] = useState(1)

    function handleClick(e) {
        if (e.target.textContent === '24 Hours') {
            setDays(1)
            setIsClicked('1')
        } else if (e.target.textContent === '30 Days') {
            setDays(30)
            setIsClicked('30')
        } else if (e.target.textContent === '3 Months') {
            setDays(90)
            setIsClicked('90')
        } else {
            setDays(365)
            setIsClicked('365')
        }


    }

    return (
        <div className='btns'>
            <button onClick={(e) => handleClick(e)} className={isClicked === '1' ? 'click-btn' : "btn"}>
                24 Hours
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '30' ? 'click-btn' : "btn"}>
                30 Days
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '90' ? 'click-btn' : "btn"}>
                3 Months
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '365' ? 'click-btn' : "btn"}>
                1 Year
            </button>

        </div>
    )
}

export default Time