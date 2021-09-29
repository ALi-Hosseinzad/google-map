import { LOC_FETCH } from "../action/Action";
import { cacheData } from "../../client/cookieManager";

export const locInitState = {
  location: null,
};

const locReducer = (state = locInitState, action) => {
  switch (action.type) {
    case LOC_FETCH.SUCCESS: {
      cacheData("location", action?.payload?.location);
      return {
        ...state,
        location: action.payload.location,
      };
    }
    default:
      return state;
  }
};

export { locReducer };
