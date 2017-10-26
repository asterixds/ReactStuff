import axios from 'axios';

export const FETCH_CAMPAIGNS = "fetch_campaigns";
export const FETCH_CAMPAIGN = "fetch_campaign";
export const CREATE_CAMPAIGN = "create_campaign";
export const DELETE_CAMPAIGN = "delete_campaign";
export const FETCH_FRAMES = "fetch_frames";
export const SELECT_FRAME = "select_frame";

const ROOT_URL = 'http://localhost:3000';
const API_KEY ='';

export function fetchCampaigns() {
    const request = axios.get(`${ROOT_URL}/campaigns${API_KEY}`);
    return {
        type: FETCH_CAMPAIGNS,
        payload: request
    };
}
export function createCampaign(values,callback) {
    const request = axios.post(`${ROOT_URL}/campaigns${API_KEY}`,values)
        .then(() => callback());
    return {
        type: CREATE_CAMPAIGN,
        payload: request
    };
}

export function fetchCampaign(id) {
    const request = axios.get(`${ROOT_URL}/campaigns/${id}${API_KEY}`);
  
    return {
      type: FETCH_CAMPAIGN,
      payload: request
    };
  }


export function fetchFrames() {
    const request = axios.get(`${ROOT_URL}/assets${API_KEY}`);
    return {
        type: FETCH_FRAMES,
        payload: request
    };
}

export function selectFrame(frame) {
    console.log("Frame: " + frame);
    return {
        type: SELECT_FRAME,
        payload: {frame}
    };
}