const reducer = (prevState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...prevState, counter: prevState.counter + action.payload };
        case "DECREMENT":
            return { ...prevState, counter: prevState.counter - action.payload };
        default:
            return prevState;
    }
};

export { reducer };
