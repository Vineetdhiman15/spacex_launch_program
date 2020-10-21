import axios from 'axios';
import { AJAX_METHOD_GET, GET_COMPONENTS_DATA_URL, LAUNCH_SUCCESS_FILTER} from '../../constants/constants';

export const getData = response => ({
	type: 'GET_DATA',
	payload: response
});

export function getDataOnLoad() {
	return function (dispatch) {
		return axios({
			method: AJAX_METHOD_GET,
			url: GET_COMPONENTS_DATA_URL,
		}).then(response => {
			dispatch(getData(response.data));
		}).catch(error => { console.log('Error : ', error.message) });
	};
}

export function getLaunchData(launch) {
	return function (dispatch) {
		return axios({
			method: AJAX_METHOD_GET,
			url: `${LAUNCH_SUCCESS_FILTER}${launch}`,
		}).then(response => {
			dispatch(getData(response.data));
		}).catch(error => { console.log('Error : ', error.message) });
	};
}

export function getLandData(launch, land) {
	return function (dispatch) {
		return axios({
			method: AJAX_METHOD_GET,
			url: `${LAUNCH_SUCCESS_FILTER}${launch}&land_success=${land}`,
		}).then(response => {
			dispatch(getData(response.data));
		}).catch(error => { console.log('Error : ', error.message) });
	};
}

export function getAllData(launch, land, year) {
	return function (dispatch) {
		return axios({
			method: AJAX_METHOD_GET,
			url: `${LAUNCH_SUCCESS_FILTER}${launch}&land_success=${land}&launch_year=${year}`,
		}).then(response => {
			dispatch(getData(response.data));
		}).catch(error => { console.log('Error : ', error.message) });
	};
}