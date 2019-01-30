function decompress(file) {
    Decompress.reverseCypher(()=>{
        let p = getCompressed(file)
        p.then((data) =>{
            let c = Decompress.getCompressed(data)
            //console.log(c);
            let d = Decompress.getDictionary(data)
            //console.log(d);
            Decompress.extractDictionary(d,(d) => {
                console.log(d);
                Decompress.rebuildText(d,c)
            })
        })
    })
}
/**
 *
 * */
class Decompress {
    /**
     * @param {String}
     * @returns {String}
     * */
    static getCompressed(data) {
        let c = data.split(DICTDELIM)
            if (undefined === c[0]) {
                return false;
            }
        return c[0];
    }
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
    /** 
     * 
     * @param {String}
     * @returns {Object}
     * */
    static extractDictionary(d, callback) {
        
        let re = {}

        // get each "word" or "phrase"
        d = d.split(DICTWORDDELIM)
        for(let i=0; i<d.length; i++) {
            // split key from location data
            if(d[i].indexOf(DICTKEYVALDELIM) > -1) {
                let w = d[i].split(DICTKEYVALDELIM)
                // get individual position data
                // remove any empties
                let p = Helpers.removeFromArray(w[1].split(MAIN),"")
                
                for(let j=0; j<p.length; j++) {
                    // something to hold TEMP
                    let pp = ''
                    // make sure this isn't empty ( unlikely as we handle that above)
                    if(p[j] != '') {
                        for(let k=0; k<p[j].length; k++) {
                            let current = p[j].substring(k,k+1)
                            let next = p[j].substring(k+1,k+2)
                            switch(current) {
                                case SQUAREDELIM:
                                    pp = pp + Decompress.getSquared(next)
                                    k++
                                break;
                                case TENDELIM:
                                    pp = pp + Decompress.getByTen(next,10)
                                    k++
                                break;
                                case HUNDREDDELIM:
                                    pp = pp + Decompress.getByTen(next,100)
                                    k++
                                break;
                                case THOUSANDDELIM:
                                    pp = pp + Decompress.getByTen(next,1000)
                                    k++
                                break;
                                default:
                                    pp = pp + Decompress.getNumberFromCypher(current)
                            }
                        }
                        p[j] = parseInt(pp)
                    }
                }
                re[w[0]] = p
            }
        }
        if(typeof callback === 'function') 
            callback(re)
        return re

    }
    /** 
     * 
     * @param {String}
     * @returns {Number}
     * */
    static getSquared(p) {
        p = Decompress.getNumberFromCypher(p)
        return p * p
    }
    /** 
     * 
     * @param {String}
     * @param {Number}
     * @returns {Number}
     * */
    static getByTen(p,n) {
        p = Decompress.getNumberFromCypher(p)
        return p * n
    }
    /** 
     * 
     * */
    static getNumberFromCypher(s) {
        if(undefined !== REVERSECYPHER[s]) {
            return parseInt(REVERSECYPHER[s])
        }else{
            return s
        }
    }
    /** 
     * 
     * @param {Object}
     * @param {String}
     * @returns {String}
     * */
    static rebuildText(dict,data) {
        for(let key in dict) {
            if(dict.hasOwnProperty(key)) {
                for(let i=0; i<dict[key].length; i++) {
                    data = Helpers.insertString(data,key,dict[key][i])
                }
            }
        }
        console.log(data);
    }
    /** 
     *
     * @param {Function}
     * */
    static reverseCypher(callback) {
        for(let key in CYPHER) {
            if(CYPHER.hasOwnProperty(key)) {
                REVERSECYPHER[CYPHER[key]] = key
            }
        }
        if(typeof callback === 'function')
            callback()
    }
}