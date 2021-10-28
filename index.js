async function getWeather(event){
    event.preventDefault()
    const weatherSearchLocation = event.target[0].value
    //place your own Accuweather API key in apiKey
    const apiKey = ""
    const fetchParams = {
        method: 'GET'
    }
    async function getAPIData(url,params){
        const response = await fetch(url,params)
        const data = await response.json()
        return data
    }

    locationKeyURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${weatherSearchLocation}`
    const locationKey = await getAPIData(locationKeyURL,fetchParams)
    console.log(locationKey[0].Key)
    currentConditionsURL = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey[0].Key}?apikey=${apiKey}`
    currentConditions = await getAPIData(currentConditionsURL,fetchParams)
    console.log(currentConditions[0].Temperature.Imperial.Value)
    console.log(currentConditions[0].WeatherText)

    temp = currentConditions[0].Temperature.Imperial.Value
    weather = currentConditions[0].WeatherText

    document.getElementById('currentCondTemp').innerHTML = temp
    document.getElementById('currentCondWeatherText').innerHTML = weather
    
    
    
}