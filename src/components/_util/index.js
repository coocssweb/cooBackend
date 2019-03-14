export default () => {
    class Util {
        isEqualArray (array, otherArray) {
            if (array.length !== otherArray.length) {
                return false;
            }

            let isEqual = true;
            for (let index of array.keys()) {
                if (array[index] !== otherArray[index]) {
                    isEqual = false;
                    break;
                }
            }

            return isEqual;
        }
    }

    if (!Util.instance) {
        Util.instance = new Util();
    }

    return Util.instance;
};
