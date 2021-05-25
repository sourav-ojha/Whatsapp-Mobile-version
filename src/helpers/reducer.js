let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : null;

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).credential.accessToken
  : null;

export const initialState = {
  user:  user || null,
  token: token || null,
  loading: false,
  errorMessage: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
  REQUEST_LOGIN: "REQUEST_LOGIN",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        token: action.user.refresh_token,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


