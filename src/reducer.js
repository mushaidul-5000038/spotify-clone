export const initialState = {
    user : null,
    playlists : [],
    playing: false,
    item: null,
    response: null,
    // token: 'BQAH4iwuix0NeOhtoUXktXzbW0TJc7zq0APXZVIYqymun9kYGmqP-pyvtCCdncghMS-AyQMHNEkBym9aTpC8u_VQ2F8DKpqPV6FDOsilAA2fQbVfEzV33hdz-vjxXDRmZ1anavPwz9VPD43b-TS5fy2fLqGicul0unVp7XQBiR0YulRh'
}

const reducer = ( state,action )=>{
 console.log(action)


 
 switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        }
    case 'SET_PLAYLIST':
        return{
            ...state,
            response:action.response
        }
    
        default:
            return state
   }
}

export default reducer