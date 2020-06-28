export const CONTENT_FETCH_DATA_FAIL = "CONTENT_FETCH_DATA_FAIL";
export const CONTENT_FETCH_DATA_SUCCESS = "CONTENT_FETCH_DATA_SUCCESS";
export const UNIVERSITY_FETCH_DATA_FAIL = "UNIVERSITY_FETCH_DATA_FAIL";
export const UNIVERSITY_FETCH_DATA_SUCCESS = "UNIVERSITY_FETCH_DATA_SUCCESS";


export const fetchContentSuccess = (contents) => {
    return {
        type: CONTENT_FETCH_DATA_SUCCESS,
        contents: contents,
    }
}

export const fetchContentError = (error) => {
    return {
        type: CONTENT_FETCH_DATA_FAIL,
        error: error
    }
}

export const fetchUniversitySuccess = (universities) => {
    return {
        type: UNIVERSITY_FETCH_DATA_SUCCESS,
        contents: universities,
    }
}

export const fetchUniversityError = (error) => {
    return {
        type: UNIVERSITY_FETCH_DATA_FAIL,
        error: error
    }
}
  
export const fetchData = () => {
    return (dispatch) => {
        return fetch('https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*')
            .then(response => response.json())
            .then(res => dispatch(
                { type: "CONTENT_FETCH_DATA_SUCCESS", contents: res.data[0], error: 'no error', isLoading: false }))
            .catch(err => dispatch(
                { type: "CONTENT_FETCH_DATA_FAIL", error: "Unable to fetch data" }))
    }
}

export const fetchDataUniversities = () => {
    return (dispatch) => {
        return fetch('https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*')
            .then(response => response.json())
            .then(res => dispatch(
                { type: "UNIVERSITY_FETCH_DATA_SUCCESS", universities: res.data[0], error: 'no error', isUniversityLoading: false }))
            .catch(err => dispatch(
                { type: "UNIVERSITY_FETCH_DATA_FAIL", error: "Unable to fetch data" }))
    }
}