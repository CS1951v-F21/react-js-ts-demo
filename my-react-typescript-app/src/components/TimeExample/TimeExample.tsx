import React from 'react';
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
            console.log('I got called by setInterval()')
        }

        const click = () => {
            console.log('clicked interval button')
            setInterval(intervalCallback, 3000)
        }

        return (<div className="button" onClick={() => click()}>
            Set Interval
        </div>)
    }

    /* Example to demonstrate setTimeout */
    const setTimeoutExample = ():JSX.Element => {

        const timeoutCallback = () => {
            console.log('I got called by setTimeout()')
        }

        const click = () => {
            console.log('clicked timeout button')
            setTimeout(timeoutCallback, 3000)
        }

        return (<div className="button" onClick={() => click()}>
            Set Timeout
        </div>)
    }

    return (
        <div className="timeExample-container">
            {setTimeoutExample()}
            {setIntervalExample()}
        </div>
    )
}