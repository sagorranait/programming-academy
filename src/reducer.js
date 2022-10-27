export const initialState = {user: null, loading: true}

export const actionTypes = { SET_USER: "SET_USER", SET_LOAD: "SET_LOAD"}

const reducer = (state, action) => {
   switch(action.type){
      case actionTypes.SET_USER:
         return{ ...state, user: action.user};
      
      case actionTypes.SET_LOAD:
         return{ ...state, loading: action.loading};
      
      default:
      return state;
   }
}

export default reducer;