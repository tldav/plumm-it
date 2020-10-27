export default (state = { }, action) => {
    switch (action.type) {
        case "SET_FEATURED_THREAD":
            return {
                thread: action.thread,
                threadRoute: action.threadRoute
            }
            default:
                return state;
    }
}