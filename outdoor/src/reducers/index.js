import { combineReducers } from 'redux';
import campaignsReducer from './reducer_campaigns';
import campaignReducer from './reducer_campaign';
import frameReducer from './reducer_frames';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
  campaign: campaignReducer,
  frames: frameReducer,
  form: formReducer
});

export default rootReducer;
