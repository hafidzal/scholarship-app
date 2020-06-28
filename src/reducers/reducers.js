import { 
        CONTENT_FETCH_DATA_SUCCESS, 
        CONTENT_FETCH_DATA_FAIL, 
        UNIVERSITY_FETCH_DATA_SUCCESS,
        UNIVERSITY_FETCH_DATA_FAIL
    } from "../actions/actions";

const initialState = {
  contents: null,
  universities: null,
  error: null,
  isLoading: true,
  isUniversityLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_FETCH_DATA_SUCCESS:
      return {  
                ...state,
                contents: action.contents,
                error: action.error,
                isLoading: action.isLoading
            };
    case CONTENT_FETCH_DATA_FAIL:
      return { 
                ...state,
                error: action.error
            };
    case UNIVERSITY_FETCH_DATA_SUCCESS:
      return {  
                ...state,
                universities: action.universities,
                error: action.error,
                isUniversityLoading: action.isUniversityLoading
            };
    case UNIVERSITY_FETCH_DATA_FAIL:
      return { 
                ...state,
                error: action.error
            };
    default:
      return state;
  }
};

export default reducer;