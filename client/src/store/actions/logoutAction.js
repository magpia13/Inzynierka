export const LOGOUT = 'LOGOUT';


export default (history) => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
    });
    history.push("/");
  };
}    