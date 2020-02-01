import React from 'react';


const RobotCard=(props)=>{
    // comment

    return(
        <section>
            <h4>Robot Name: {props.robotObj.firstname} {props.robotObj.lastname} </h4>

        </section>
    )
}

export default RobotCard;