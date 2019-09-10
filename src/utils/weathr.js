const request = require('request')

const weather = (weatherKey, lat, lon, callback) => {
    const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lon}?units=si`
    request({ url: weatherUrl, json: true }, (err,res) => {
    if (err){callback('Unable to connect to weather service')
    }else if (res.body.error){
        callback('Unable to find loction')
    }else{
        callback(undefined, {
            temperature: res.body.currently.temperature,
            precipProbability: res.body.currently.precipProbability,
            summery: res.body.daily.data[0].summary
        })
    // const temperature = res.body.currently.temperature
    // const precipProbability = res.body.currently.precipProbability
    // const summery = res.body.daily.data[0].summary
    // console.log(`${summery} It is currently ${temperature} degrees out. ther is a ${precipProbability} chance of rain.`)
    }
})

}
module.exports = weather