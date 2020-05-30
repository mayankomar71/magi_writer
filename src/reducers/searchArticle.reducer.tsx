import actionType from '../actions/actionTypes';

export const searchArticlesInitials = {
   foundArticles:[]
}

function SearchArticleReducer(state = searchArticlesInitials, action: any) {
    switch (action.type) {

        case actionType.GETARTICLES:
            return {
                ...state,
                foundArticles:action.payload && Object.keys(action.payload).length>0 && Object.keys(action.payload.data).length>0?action.payload.data.data.articalDetailsArr:[]
            }

        default:
            return state
    }
}
export default SearchArticleReducer
