import React, { useState, useEffect } from 'react';
import api from '../utils/API';
const threads = require('../thread-contents.json');

const Context = React.createContext();

export const ContextProvider = props => {

    const [ realThreads, setRealThreads ] = useState();

    useEffect(() => {
        const getDaThreads = async () => {
            try {
                const response = await api.findAllThreads()
                setRealThreads(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getDaThreads();
    }, [])

    const value = {
        threads,
        realThreads
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;