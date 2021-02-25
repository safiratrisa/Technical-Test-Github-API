const initialState = {
    repos: []

  }
  const reposReducer = (state = initialState, action) => {
      if (action.type === 'GET_REPOS'){
      return {
        ...state,
        repos: action.payload
      }
    }
    else {
      return state
    }
  }
  export default reposReducer