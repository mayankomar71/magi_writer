import combineReducers from 'react-combine-reducers';
import loginReducer, { loginReducerInitials } from './login.reducer'


export const [rootReducerCombined, initialStateCombined] = combineReducers({
    loginReducer: [loginReducer, loginReducerInitials],
});

