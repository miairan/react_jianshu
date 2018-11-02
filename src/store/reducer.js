import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes';

const stateDefault = {
    focused: false
}

const reducer = (state=stateDefault, action) => {
    if (action.type === INPUT_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === INPUT_BLUR) {
        return {
            focused: false
        }

    }
    return state;
};

export default reducer;
