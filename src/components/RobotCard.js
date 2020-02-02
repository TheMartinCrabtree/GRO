import React, {useEffect, useContext} from 'react';
import {Context} from '../Store';



const RobotCard=(props)=>{
    const robot = props.robotObj
    const [state, dispatch] = useContext(Context);
    
    
    const handleAddToTeam=()=>{

        return dispatch({type: 'ADD_ROBOT', payload: robot});
    };

    const handleRemoveFromTeam=()=>{
        return dispatch({type: 'REMOVE_ROBOT', payload: robot});

    };


    return(
        <section>
            <h4>Robot Name: {robot.firstName} {robot.lastName} </h4>
            <button onClick={ handleAddToTeam } >Add to Team</button>
            <button onClick={ handleRemoveFromTeam } >Remove from Team</button>

        </section>
    )
}

export default RobotCard;