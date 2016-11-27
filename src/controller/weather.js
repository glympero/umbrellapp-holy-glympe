import mongoose from 'mongoose';
import { Router } from 'express';
import Weather from '../model/weather';

export default({ config, db }) => {
  var countries = [{
    "_id":519188,
    "name":"Novinki",
    "country":"RU",
    "coord":{
      "lon":37.666668,
      "lat":55.683334
    },
    "weather":[
      {
      "id":802,
      "main":"Clouds",
      "description":
      "scattered clouds",
      "icon":"03d"
      }
    ],
    "main":{
      "temp":297.15,
      "pressure":1020,
      "humidity":33,
      "temp_min":297.15,
      "temp_max":297.15
    }
  },{
    "_id":1283240,
    "name":"Kathmandu",
    "country":"NP",
    "coord":{
      "lon":85.316666,
      "lat":27.716667
    },
    "weather":[
      {
      "id":802,
      "main":"Clouds",
      "description":
      "scattered clouds",
      "icon":"03d"
      }
    ],
    "main":{
      "temp":297.15,
      "pressure":1020,
      "humidity":33,
      "temp_min":297.15,
      "temp_max":297.15
    }
  }]

  var weatherDetails = [
    {"city":
      {
        "id":1283240,
        "name":"Kathmandu",
        "findname":"KATHMANDU",
        "country":"NP",
        "coord":{
          "lon":85.316666,
          "lat":27.716667},
          "zoom":7
        },
        "time":1394871602,
          "main":{
            "temp":297.15,
            "pressure":1020,
            "humidity":33,
            "temp_min":297.15,
            "temp_max":297.15
          },

        }
    ]

  let api = Router();

  // 'v1/weather/add' - Create
  api.post('/add', (req, res) => {
    let newWeather = new Weather();
    newWeather.name = req.body.name;
    newWeather.country = req.body.country;
    newWeather.city_id = req.body.city_id;

    newWeather.save(err => {
      if(err) {
        res.send(err);
      }
      res.json({ "message": "Weather saved successfully"});
    });
  });

  // 'v1/weather/' - Read
  api.get('/', (req, res) => {
    Weather.find({}, (err, weathers) => {
      if (err) {
        res.send(err);
      }
      res.json(weathers);
    });
  });

  // 'v1/weather/:id' - Read 1
  api.get('/:id', (req, res) => {
    Weather.findById(req.params.id, (err, weather) => {
      if (err){
        res.send(err);
      }
      res.json(weather);
    });
  });

  //Search weather by name
  api.get('/SearchBy/:name', (req, res) => {
    var countryFound = countries.forEach(entry => {
      if (entry.name === req.params.name){
        res.send(entry)
      }
    });
  });

  //Search weather by name
  api.get('/SearchBy/:lon/:lat', (req, res) => {
    var countryFound = countries.forEach(entry => {
      if(entry.coord.lon == req.params.lon && entry.coord.lat == req.params.lat){
        res.send(entry)
      }
    });
  });

  // 'v1/weather/:id' - Update
  api.put('/:id', (req, res) =>{
    Weather.findById(req.params.id, (err, weather) => {
      if (err) {
        res.send(err);
      }
      weather.name = req.body.name;
      newWeather.country = req.body.country;
      newWeather.city_id = req.body.city_id;
      weather.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Weather ifno updated successfully" })
      });
    });
  });

  // 'v1/weather/:id' - Delete
  api.delete('/:id', (req, res) => {
    Weather.remove({
      _id: req.params.id
    }, (err, weather) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Weather successfully removed"});
    });
  });

return api;
}
