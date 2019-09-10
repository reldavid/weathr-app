const request = require('request')
const geocode = (mapKey, address, callback) => {
    const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapKey}&limit=1`

    request({ url: mapUrl, json: true}, (err,res) => {
        if(err){callback('Unable to log into loction service')
        }else if(res.body.features.length === 0){
            callback('Unable to find loction')
        }else{
            callback(undefined, {
                longitude: res.body.features[0].center[0],
                latitude:res.body.features[0].center[1],
                location:res.body.features[0].place_name
            })    
        }
    })
}
module.exports = geocode