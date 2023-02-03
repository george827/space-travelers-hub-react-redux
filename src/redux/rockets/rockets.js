const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';
const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const initialState = [];

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, ...action.payload];

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });

    default:
      return state;
  }
};

export default rockets;

export const getRocketsApi = () => async (dispatch) => {
  const response = await fetch(rocketsUrl);
  const rockets = await response.json();
  const theRockets = rockets.map((data) => {
    const obj = {
      id: data.id,
      rocketName: data.name,
      description: data.description,
      flickrImages: data.flickr_images,
      reserved: false,
    };
    return obj;
  });
  dispatch(getRockets(theRockets));
};
