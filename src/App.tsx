import React from 'react';
import {connect} from "react-redux"
import './App.css';
import {decrement, increment} from "./ac";

const App: React.FC<any> = ({count, increment, decrement}): any => {
    const handleClickIncrement = () => {
        increment()
    }
    const handleClickDecrement = () => {
        decrement()
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <code>{count}</code>
                </p>
                <button onClick={handleClickIncrement}>
                    +1
                </button>
                <button onClick={handleClickDecrement}>
                    -2
                </button>
            </header>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    count: state.count.count
})

// @ts-ignore
export default connect<typeof App>(mapStateToProps, {increment, decrement})(App);
