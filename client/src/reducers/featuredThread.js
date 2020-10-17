export default (state = { featuredThread: "test", threadRoute: "/test" }, action) => {
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