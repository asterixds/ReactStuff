import _ from "lodash";
import { FETCH_FRAMES} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FRAMES:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}