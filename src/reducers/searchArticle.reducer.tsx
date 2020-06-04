import actionType from '../actions/actionTypes';

// eslint-disable-next-line

export const searchArticlesInitials = {
    foundArticles: [],
    savedArticle: [],
    deleteArticle:false
}

function SearchArticleReducer(state = searchArticlesInitials, action: any) {
    switch (action.type) {

        case actionType.GETARTICLES:
            return {
                ...state,
                foundArticles: action.payload && Object.keys(action.payload).length > 0 && Object.keys(action.payload.data).length > 0 ? action.payload.data.data.articalDetailsArr : []
            }
        case actionType.SAVEARTICLES:
            return {
                ...state,
                savedArticle: action.payload && Object.keys(action.payload).length > 0 && Object.keys(action.payload.data).length > 0 ? action.payload.data.data.articalDetailsArr : [],
                foundArticles: []
            }
        case actionType.GETUSERARTICLES:
            return {
                ...state,
                foundArticles: action.payload && Object.keys(action.payload).length > 0 && Object.keys(action.payload.data).length > 0 ? action.payload.data.data.articalDetailsArr : [],
                deleteArticle:false
            }
        case actionType.DELETEARTICLE:
            return {
                ...state,
                deleteArticle: action.payload && Object.keys(action.payload).length > 0 && Object.keys(action.payload.data).length > 0 ?action.payload.data.success :false,
                foundArticles:[]
            }


        default:
            return state
    }
}
export default SearchArticleReducer
