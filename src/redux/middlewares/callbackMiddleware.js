export default ({ getState, dispatch }) => {
    return (next) => {
        return (action) => {
            const { result, callback, ...reset } = action;
            callback && callback(result);
            next({ result, ...reset });
        };
    };
};
