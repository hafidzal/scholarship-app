// import {fetchContentStarting, fetchContentSuccess, fetchContentError} from '../actions/actions';

// function fetchContent() {
//     return dispatch => {
//         dispatch(fetchContentStarting());
//         fetch('https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
//             }
//             console.log('res: ', res.data[0]);
//             dispatch(fetchContentSuccess(res.data[0].id));

//             return res;
//         })
//         .catch(error => {
//             dispatch(fetchContentError(error));
//         })
//     }
// }

// export default fetchContent