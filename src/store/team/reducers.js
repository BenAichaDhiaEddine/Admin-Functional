// import {
//     ADD_NEW_TEAM,
//     ADD_NEW_TEAM_SUCCESS,
//     GET_ALL_TEAMS,
//     GET_ALL_TEAMS_SUCCESS,
//     UPDATE_TEAM,
//     UPDATE_TEAM_SUCCESS,
//     DELETE_TEAM,
//     DELETE_TEAM_SUCCESS,
// } from "./actionTypes";

// const teamsInitState = {
//     loading: false,
//     categoriesList: [],
// };

// const TeamsReducer = (state = teamsInitState, action) => {
//     let { type, payload } = action;

//     switch (type) {
//     case GET_ALL_TEAMS:
//         return { ...state, loading: true };
//     case GET_ALL_TEAMS_SUCCESS:
//         return { ...state, loading: false, teamsList: payload };
//     case ADD_NEW_TEAM:
//         return { ...state, loading: true };
//     case ADD_NEW_TEAM_SUCCESS:
//         return { ...state, loading: false, teamsList: payload };
//     case UPDATE_TEAM:
//         return { ...state, loading: true };
//     case UPDATE_TEAM_SUCCESS:
//         return { ...state, loading: false, teamsList: payload };
//     case DELETE_TEAM:
//         return { ...state, loading: true };
//     case DELETE_TEAM_SUCCESS:
//         return { ...state, loading: false , teamsList: payload};        
//     default:
//         return state;
//     }
// };

// export default TeamsReducer ; 
