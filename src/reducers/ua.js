const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

export const ua = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_UA_REQUEST':
      return {
        isFetching: true,
        data: [],
        error: false
      }
    case 'LOAD_UA_SUCCESS':
      return {
        isFetching: false,
        data: action.data,
        error: false
      }
    case 'LOAD_UA_ERROR':
      return {
        isFetching: false,
        data: [],
        error: true
      }
    default:
      return state
  }
}

export default ua
