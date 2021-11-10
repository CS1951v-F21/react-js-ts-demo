import React from 'react';
import './PromiseExample.css'

interface IPromiseProps{
 /* empty interface */
}

export const PromiseExample = (props: IPromiseProps) => {
    // deconstruct props
    const {/** this should be filled in as props are added **/} = props

    const promiseExample = () => {
        const handleResolved = (value: unknown) => {
            console.log('the promise was resolved and returned: ' + value)
        }

        const handleRejected = () => {
            console.log('the promise was rejected')
        }

        /* This is the promise which takes a callback function */
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('donut');
            }, 300);
        });
          
        /* If it is resolved */
        myPromise.then(handleResolved, handleRejected);
    }

    const asyncFunction = async():Promise<string> => {
        /* let us imagine that this is a function that takes a long time
        for example a gateway function */
        return 'chocolate'
    }

    const awaitAsync = async () => {
        const funcResp:string = await asyncFunction();
        console.log('when we await the asyncFunction we get a usable response: ' + funcResp)
    }



    return (
        <div className="promiseExample-container">
            <div className="promiseButton" onClick={() => promiseExample()}>
                Promise
            </div>
            <div className="promiseButton" onClick={() => awaitAsync()}>
                Async
            </div>
        </div>
    )
}