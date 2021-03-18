//ロジックなど

const axios = require('axios');
const API_KEY = "d50a2226aa33bb572177e560ebd83f32";
const Weather = require('../models/Weather');


exports.renderHomePage = (req,res) => {
    res.render("index", {weather : ""});
}

exports.getWeather = (req,res) => {
    // console.log(req.body.city);
    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const weather = new Weather(req.body.city);
    weather.validateUserInput();

    if(weather.errors.length) {
        res.render('index', {
            error: 'bangke'
        });
    }else {
        axios.get(url).then((response)=>{
            const { temp: temperature } = response.data.main
            const { name: location } = response.data
            // console.log(`It is Currently ${response.data.main.temp} in ${response.data.name}.`);
            console.log('ada data');
            res.render('index',{
                weather : `It is Currently ${temperature} in ${location}.`
            });
        }).catch((error) => {
            console.log(error);
        }) 
    }
}

exports.renderAboutPage = (req,res) => {
    res.render("about");
}