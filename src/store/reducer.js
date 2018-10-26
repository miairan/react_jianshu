import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes';

const stateDefault = {
    focused: false
}

const reducer = (state=stateDefault, action) => {
    if (action.type === INPUT_FOCUS) {
        state.focused = true;
        return state;
    }
    if (action.type === INPUT_BLUR) {
        state.focused = false;
        return state;
    }
    return state;
};

export default reducer;
