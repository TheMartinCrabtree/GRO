import React, {useEffect, useContext} from 'react';

import {Context} from '../Store';
import robotData from '../robots';

const RobotList=()=>{
    const [state, dispatch] = useContext(Context);

    useEffect(()=>{
        dispatch({type: 'SET_ALL_ROBOTS', payload: robotData})
    }, []);

    return(
        <p>the robot list will populate here</p>
    );
};

export default RobotList;
