import React from 'react';
 import {rootReducerCombined,initialStateCombined} from './reducers/rootReducer';

export const Store = React.createContext({});
const { Provider } = Store;




export default function StoreProvider(props: any) {
    const [state, dispatch] = React.useReducer(rootReducerCombined, initialStateCombined);

    const value = { state, dispatch };
    return <Provider value={value}>{props.children}</Provider>
};

