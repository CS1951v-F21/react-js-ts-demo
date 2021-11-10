import React, { useState } from 'react';
import './TimeExample.css'

interface ITimeProps{
 /* empty interface */
}

export const TimeExample = (props: ITimeProps) => {
    // deconstruct props
    const {/** this should be filled in as props are added **/} = props


    /* Example to demonstrate setInterval */
    const setIntervalExample = ():JSX.Element => {
        const intervalCallback = () => {
            setCount(count + 1)
            console.log('I got called by setInterval()')
            console.log(new Date())
        }

        const click = () => {
            console.log('clicked interval button')
            setInterval(intervalCallback, 3000)
        }

        return (<div className="timeButton" onClick={() => click()}>
            Set Interval
        </div>)
    }

    /* Example to demonstrate setTimeout */
    const setTimeoutExample = ():JSX.Element => {

        const timeoutCallback = () => {
            console.log('I got called by setTimeout()')
            console.log(new Date())
        }

        const click = () => {
            console.log('clicked timeout button')
            setTimeout(timeoutCallback, 3000)
        }

        return (<div className="timeButton" onClick={() => click()}>
            Set Timeout
        </div>)
    }

    const [count, setCount] = useState<number>(0)

    return (
        <div className="timeExample-container">
            {count}
            {setTimeoutExample()}
            {setIntervalExample()}
        </div>
    )
}