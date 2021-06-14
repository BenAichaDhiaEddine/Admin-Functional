// import { takeEvery, fork, put, all, call } from "redux-saga/effects";
// import { get, update, post, remove } from "../../helpers/apiMethods";
// import { addNewTeamSuccess, getTeamsSuccess, deleteTeamSuccess, updateTeamSuccess } from "./action";
// import { ADD_NEW_TEAM, GET_ALL_TEAMS, UPDATE_TEAM, DELETE_TEAM } from "./actionTypes";
// const url = "/functionalAdmin/teams";

// function* addNewTeamApi({ payload }) {
//   try {
//     let result = yield call(post, url, payload);
//     yield put(addNewTeamSuccess(result));
//   } catch (error) {
//     console.error(error.message);
//   } 
// }
// function* getAllTeamsApi() {
//   try {
//     let result = yield call(get, url);
//     yield put(getTeamsSuccess(result.data));
//   } catch (error) {}
// } 

// function* deleteTeam( id ) {
//   console.log('id  : ', id.payload);
//   try {
//     let response = yield call(remove, `${url}/${id.payload}`);
//     yield put(deleteTeamSuccess(response));
//   } catch (error) {}
// }
 

// function* updateTeam({payload:{data, id}}) {
//   try {
//   let response = yield call(update,`${url}/${id}`,data);
//     yield put(updateTeamSuccess(response));
//   } catch (error) {}
// }

// export function* watchUpdateConfig() {
//   yield takeEvery(UPDATE_TEAM, updateTeam);
// }

// export function* watchDeleteTeam() {
//   yield takeEvery(DELETE_TEAM, deleteTeam);
// }

// export function* watchAddNewTeam() {
//   yield takeEvery(ADD_NEW_TEAM, addNewTeamApi);
// }

// export function* watchGetAllTeams() {
//   yield takeEvery(GET_ALL_TEAMS, getAllTeamsApi);
// }

// function* TeamsSaga() {
//   yield all([fork(watchAddNewTeam), fork(watchGetAllTeams), fork(watchDeleteTeam), fork(watchUpdateConfig)]);
// }

// export default TeamsSaga;
