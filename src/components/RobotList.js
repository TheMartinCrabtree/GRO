import React, {useEffect, useContext} from 'react';
import RobotCard from './RobotCard';

import {Context} from '../Store';
import robotData from '../robots';

const RobotList=()=>{
    const [state, dispatch] = useContext(Context);

    useEffect(()=>{
        console.log("hit dispatch form robotlist")
        dispatch({type: 'SET_ALL_ROBOTS', payload: robotData.robots})
    }, []);

  
    function displayRobotCards(){
        console.log("hit displayRobotCards", state)
        return state.allRobots.map((robotObj)=>{
            console.log("robot card id", robotObj.id)
            return <RobotCard key={robotObj.id} robotObj={robotObj} />
        })
    }

    return(
        <section>
            <h3>Choose from this list of robots: </h3>
            { displayRobotCards() }
        </section>
    );
};

export default RobotList;
