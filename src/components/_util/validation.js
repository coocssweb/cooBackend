export const required = (tip, value) => {
    if (!value.toString().trim().length) {
        return tip || '请输入必填项';
    }
};
