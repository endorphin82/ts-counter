import React from 'react';
import {connect} from "react-redux"
import {increment, decrement} from "./ac";
import {initialState} from "./reducer/count";
import {RootState} from "./reducer";
// import {Dispatch} from "redux";

import './App.css';

interface Props {
    count: number
    increment: (p: number) => void
    decrement: (p: number) => void
}

const App: React.FC<Props> = ({count,increment, decrement}) => {
    const handleClickIncrement = () => {
        increment(1)
    }
    const handleClickDecrement = () => {
        decrement(2)
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

const mapStateToProps = (state: RootState): initialState => ({
    count: state.count.count
})


const mapDispatchToProps = {
    increment, decrement
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect<ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps, any, RootState>(mapStateToProps, mapDispatchToProps)(App);

// type DispatchType = Dispatch<ActionsTypes>

// const mapDispatchToProps = (dispatch: DispatchType) => ({
//     onIncrement: () => dispatch(increment()),
//     onDecrement: () => dispatch(decrement())
// })
