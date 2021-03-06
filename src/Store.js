import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
// TO BE USED AS A GLOBAL CONTEXT


const initialState = {
    allRobots: [],
    robotHanger: []
};

const Store=({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState);

    return(
        <Context.Provider  value={[state, dispatch]}  >
            { children }
        </Context.Provider>
    );
    
};

export const Context = createContext(initialState);

export default Store;