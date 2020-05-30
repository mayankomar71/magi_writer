import combineReducers from 'react-combine-reducers';
import loginReducer, { loginReducerInitials } from './login.reducer'
import searchArticleReducer, {searchArticlesInitials } from './searchArticle.reducer'

export const [rootReducerCombined, initialStateCombined] = combineReducers({
    loginReducer: [loginReducer, loginReducerInitials],
    searchArticleReducer: [searchArticleReducer, searchArticlesInitials],
});

