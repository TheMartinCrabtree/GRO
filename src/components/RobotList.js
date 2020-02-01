import React, {useEffect, useContext} from 'react';

import {Context} from '../Store';
import robotData from '../robots';

const RobotList=()=>{
    const [state, dispatch] = useContext(Context);

    useEffect(()=>{
        dispatch({type: 'SET_ALL_ROBOTS', payload: robotData})
    }, []);

    return(
        <section>
            <h3>Choose from this list of robots: </h3>

        </section>
    );
};

export default RobotList;
