/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';
import uuid from 'uuid';

export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const addSmurf = (name, age, height) => {
	return {
		type: ADD_SMURF,
		payload: {
			name,
			age,
			height,
			id: uuid()
		}
	};
};

export const deleteSmurf = id => {
	return {
		type: DELETE_SMURF,
		payload: id
	};
};

export const fetchSmurfSuccess = smurfs => {
	return {
		type: FETCH_SMURF_SUCCESS,
		smurfs: smurfs
	};
};

export const fetchSmurfFail = error => {
	return {
		type: FETCH_SMURF_FAIL,
		error: error
	};
};

export const fetchSmurfStart = () => {
	return {
		type: FETCH_SMURF_START
	};
};

export const fetchSmurfs = () => {
	return dispatch => {
		dispatch(fetchSmurfStart());
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				console.log(res.data);
				dispatch(fetchSmurfSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchSmurfFail(err));
			});
	};
};
