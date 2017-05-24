import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([ action.payload.data ]);
			return [ action.payload.data, ...state ]; // insert array at the top [ city, city, city, ...]
	}
	return state;
}