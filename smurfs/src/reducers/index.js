/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import * as actionTypes from '../actions/index';

const initialState = {
	smurfs: [
		{
			name: 'Test',
			age: 100,
			height: '6cm',
			id: 100
		}
	],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null,
	loading: false
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

const fetchSmurfStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchSmurfSuccess = (state, action) => {
	return updateObject(state, { smurfs: action.smurfs, loading: false });
};
const fetchSmurfFail = (state, action) => {
	return updateObject(state, { loading: false });
};

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_SMURF:
			return { ...state, smurfs: state.smurfs.concat(action.payload) };
		case actionTypes.DELETE_SMURF:
			return { ...state, smurfs: state.smurfs.filter(task => task.id !== action.payload) };
		case actionTypes.UPDATE_SMURF:
			return {
				...state,
				smurfs: state.smurfs.map(task => {
					if (task.id === action.payload) {
						return {
							...task,
							isNotComplete: !task.isNotComplete
						};
					}
					return task;
				})
			};
		case actionTypes.FETCH_SMURF_START:
			return fetchSmurfStart(state, action);
		case actionTypes.FETCH_SMURF_SUCCESS:
			return fetchSmurfSuccess(state, action);
		case actionTypes.FETCH_SMURF_FAIL:
			return fetchSmurfFail(state, action);
		default:
			return state;
	}
};

export default smurfReducer;
