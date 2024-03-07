import axios from "axios";

export const GET_USER = "GET_USER";
export const DELETE_USER = "DELETE_USER";
export const LOADING_USER = "LOADING_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUserList = (tableParams) => async dispatch => {
  try {
    dispatch({ type: LOADING_USER });

    const response = await axios.get(`http://localhost:8000/users?name_like=${tableParams?.searchText}&_page=${tableParams.pagination.current}&_limit=${tableParams.pagination.pageSize}&_sort=${tableParams.sortState.columnKey}&_order=${tableParams.sortState.order}`);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.message,
    });
  }
};

// export const searchUser = (tableParams) => async dispatch =>{
//   try {
//     dispatch({ type: LOADING_USER });

//     const response = await axios.get(`http://localhost:8000/users?name_like=${tableParams?.searchText} `);

//     dispatch({
//       type: GET_USER_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USER_FAILURE,
//       payload: error.message,
//     });
//   }
// }


export const deleteUser = (id) => async dispatch =>{
  try {
    dispatch({ type: LOADING_USER });

    const response = await axios.delete(`http://localhost:8000/users/${id}`)

    dispatch(getUserList());
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.message,
    });
  }
}