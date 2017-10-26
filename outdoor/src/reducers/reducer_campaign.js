import _ from "lodash";
import {  FETCH_CAMPAIGN} from "../actions";
import {  SELECT_FRAME} from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CAMPAIGN:
      return action.payload.data;
    case SELECT_FRAME:
      const campaign = state;
      campaign.frames.push(action.payload.data);
      return campaign;
    default:
      return state;
  }
}