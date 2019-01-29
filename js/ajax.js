function getData() {
    fetch("scrape.php", 
    {
            mode:'no-cors',
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'url=' + URLTARGET
    })
    .then(function(response) {
            return response.text()
    })
    .then(function(text) {
            thedata.raw = text
            runcompress()
    })
}