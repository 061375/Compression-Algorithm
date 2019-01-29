/** 
* gets the text data in this case from a website URL
* @returns {Void}
* */
function compress(file) {
    let p = getDecompressed(file)
    p.then((data) =>{
        thedata.raw = data
        runcompress(file)
    })
    
}
/** 
* 
* */
function runcompress(file) {
       Dictionary.first(thedata.raw,function(re) {
          thedata = re;
          Dictionary.compress(function(){
             console.log('The RAW data length: ',thedata.raw.length);
             console.log('The COMPRESSED data length: ',thedata.compressed.length);
             console.log('The length of the DICTIONARY: ',JSON.stringify(thedata.found).length);
             
             
             buildOut(function(){
                console.log('The final output length ( Data and Dictionary ): ',thedata.out.length);
                console.log('All the data as a string: ',thedata.out);
                writeCompressed(file.replace('.txt','.c.txt'),thedata.out)
             });
          });
       });
}
/** 
* 
* @param {Function}
* */
function buildOut(callback) {
       let out = thedata.compressed + DICTDELIM;
       for(let key in thedata.found) {
               if(thedata.found.hasOwnProperty(key)) {
                       out += key+DICTKEYVALDELIM+thedata.found[key]+DICTWORDDELIM;
               }
       }
       thedata.out = out;
       if(typeof callback === 'function')
               callback();
}