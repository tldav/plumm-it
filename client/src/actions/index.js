import { getThreads } from "../api";

export const setFeaturedThread = (thread, threadRoute) => ({
    type: "SET_FEATURED_THREAD",
    thread,
    threadRoute
});

export const updateThreads = (payload) => {
    return { type: "UPDATE_THREADS", payload };
}

export const retrieveThreads = (payload) => {
    return (dispatch) => {
        getThreads().then(thr => dispatch(updateThreads(thr.data)));
    };
} 