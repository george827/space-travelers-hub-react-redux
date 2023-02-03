const FETCH_MISSIONS = 'GET_MISSIONS_SUCCESS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const getMissionsSuccess = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const initialState = [];

const missions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, ...action.payload];

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
};

const missionsurl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = () => async (dispatch) => {
  const response = await fetch(missionsurl);
  const missions = await response.json();
  const formatMissions = missions.map((data) => {
    const obj = {
      mission_id: data.mission_id,
      mission_name: data.mission_name,
      description: data.description,
      reserved: false,
    };
    return obj;
  });
  dispatch(getMissionsSuccess(formatMissions));
};

export default missions;
