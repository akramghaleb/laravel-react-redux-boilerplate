import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'
import { Counter } from '../components/Counter';

const Test = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>This is test component</h1>
            <Counter />
        </>
    )
}

export default Test
