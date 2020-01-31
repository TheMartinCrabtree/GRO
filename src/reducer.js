const Reducer=(state, action)=>{
    switch(action.type){
        case 'SET_ALL_ROBOTS':
            return{
                ...state,
                allRobots: action.payload
            };
        case 'ADD_ROBOT':
            return{
                ...state,
                robotHanger: state.robotHanger.push(action.payload)
            };
        case 'REMOVE_ROBOT':
            return{
                ...state,
                robotHanger: state.robotHanger.filter((robot)=>{
                    robot.id !== action.payload
                })
            };
        default:
            return state;
    }

}

export default Reducer;