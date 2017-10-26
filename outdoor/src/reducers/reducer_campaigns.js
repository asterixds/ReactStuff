import _ from "lodash";
import { FETCH_CAMPAIGNS, FETCH_CAMPAIGN ,DELETE_CAMPAIGN, ADD_FRAME} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return  _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}