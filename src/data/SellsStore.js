import { create }  from 'zustand';

import data from '../json/sells.json';

const createSelectors = (_store) => {
    let store = _store;
    store.use = {};
    for (let k of Object.keys(store.getState())) {
        ;
        store.use[k] = () => store((s) => s[k]);
    }
    return store;
};

const useSellesStore = createSelectors( create((set) => (
    {
        sells: data
    }
)));

export default useSellesStore;
