import React, { useReducer } from 'react';
const UserContext = React.createContext();
const userReducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, userCode: action.payload.userCode, userToken: action.payload.userToken, isAuthenticated: true };
  }
};
export const UserProvider = ({ children }) => {
  const [userInfo, dispatch] = useReducer(userReducer, {});
  const setUser = (userCode, userToken) => {
    dispatch({ type: 'setUser', payload: { userCode, userToken } });
  };
  return <UserContext.Provider value={{ data: userInfo, setUser }}>{children}</UserContext.Provider>;
};
export default UserContext;
