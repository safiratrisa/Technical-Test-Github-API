const initialState = {
    repos: [],
    user: {
      name: ''
    },
    error: ''
  }
  const reposReducer = (state = initialState, action) => {
      if (action.type === 'GET_REPOS'){
      return {
        ...state,
        repos: action.payload
      }
    } else if (action.type === 'GET_USER') {
      return {
        ...state,
        user: action.payload
      }
    } else if (action.type === 'GET_USER_ERROR') {
      return {
        ...state,
        error: action.payload
      }
    }
    else {
      return state
    }
  }
  export default reposReducer