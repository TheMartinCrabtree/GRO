import React from 'react';


const RobotCard=(props)=>{
    // comment

    return(
        <section>
            <h4>Robot Name: {props.robotObj.firstName} {props.robotObj.lastName} </h4>

        </section>
    )
}

export default RobotCard;