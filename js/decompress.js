/**
 *
 * */
class Decompress {
    /**
     * @param {String}
     * @returns {String}
     * */
    static getDictionary(data) {
        let c = data.split(DICTDELIM)
            if (undefined === c[1]) {
                return false;
            }
        return c[1];
    }
}