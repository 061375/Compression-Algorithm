/** 
 * 
 * @param {String}
 * */
function getDecompressed(file) {
    return Ajax('/php/scrape.php',{
        url:file
    })
}
/** 
 * 
 * */
function getCompressed(file) {
    return Ajax('/php/read.php',{
        url:file
    })
}
/** 
 * 
 * @param {String}
 * @param {String}
 * */
function writeCompressed(file, data) {
    return Ajax('/php/write.php',{
        data:data,
        file:file
    })
}
/** 
 * 
 * @param {String}
 * @param {Object}
 * @returns {Object}
 * */
function Ajax(url,post) {
    //
    var _post = '';
    for(let key in post) {
        if(post.hasOwnProperty(key)) {
            _post = _post + key + '=' + post[key] + '&'
        }
    }
    return new Promise((resolve,reject) => {
        fetch(url, 
        {
                mode:'no-cors',
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: _post
        })
        .then(function(response) {
                return response.text()
        })
        .then(function(text) {
            thedata.raw = text
            resolve(text) 
        })
    })
}