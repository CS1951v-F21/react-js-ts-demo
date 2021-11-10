import React from 'react';
import './ClassExample.css';

/**
 * These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
 * - constructor()
 * - static getDerivedStateFromProps()
 * - render()
 * - componentDidMount()
 * 
 * componentWillUnmount() is invoked before the component is destroyed
 */

interface IExampleProps{
    /* empty interface */
}

export class ClassExample extends React.Component {

    constructor(props: IExampleProps){
        super(props);
    }

    render() {
        return <div className="classExample-container">
            This is the example class component!
        </div>;
    }

    componentDidMount(){
        /* once the component has mounted */
    }

    componentWillUnmount(){
        /* called before a component is destroyed */
    }
}

