import React from 'react';
import './FunctionalExample.css'

interface IExampleProps{
 /* empty interface */
}

export const FunctionalExample = (props: IExampleProps) => {
    // deconstruct props
    const {/** this should be filled in as props are added **/} = props

    return (
        <div className="functionalExample-container">
            This is the example functional component!
        </div>
    )
}