import React, { useReducer, createContext } from "react";
import { locInitState, locReducer } from "../reducer/Reducer";
import { getCachedData } from "../../client/cookieManager";

const LocDispatchContext = createContext();
const LocStateContext = createContext();

function LocationProvider(props) {
  const { children } = props;
  const location = getCachedData("location");
  const [state, dispatch] = useReducer(locReducer, {
    ...locInitState,
    location,
  });
  return (
    <LocStateContext.Provider value={state}>
      <LocDispatchContext.Provider value={dispatch}>
        {children}
      </LocDispatchContext.Provider>
    </LocStateContext.Provider>
  );
}

function useLocState() {
  const context = React.useContext(LocStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}
function useLocDispatch() {
  const context = React.useContext(LocDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}
export { LocationProvider, useLocState, useLocDispatch };
