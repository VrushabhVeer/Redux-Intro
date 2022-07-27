const handleInc = () => {
    return ({ type: "INCREMENT", payload: 1 });
};

const handleDec = () => {
    return ({ type: "DECREMENT", payload: 1 });
};

export { handleInc, handleDec };