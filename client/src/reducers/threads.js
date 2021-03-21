const testData = require("../thread-contents.json");

export default (state =  testData, action) => {
    switch (action.type) {
        case "UPDATE_THREADS":
            return {
                ...state,  threads: action.payload
            };
        default: 
        return state;
    }
}