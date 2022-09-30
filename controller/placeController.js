const places = require("../models/place");
const getPlaces = (req, res) => {
  places
    .find()
    .then((placesDBb) => {
      res.json(placesDBb);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
const addPlaces = (req, res) => {
  places
    .create({
      placeName: req.body.placeName,
    })
    .then((newPlace) => {
      res.status(201).json(newPlace);
    })
    .catch((err) => {
      if (err) {
        res.send(err);
      }
    });
};
const getPlaceByID = (req, res) => {
  places
    .findById(req.params.id)
    .then((place) => {
      res.status(200).json(place);
    })
    .catch((err) => {
      if (err) {
        res.send(err);
      }
    });
};
const updatePlaceByID = (req, res) => {
  const newPlace = req.body.placeName;
  places
    .findByIdAndUpdate(req.params.id, {placeName: newPlace}, { new: true })
    .then((place) => {
      res.status(200).json(place);
    })
    .catch((err) => {
      res.send(err);
    });
};
const deletePlaceByID = (req, res) => {
    places.findByIdAndDelete(req.params.id).then((place) => {
        res.status(200).json(place);
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
  getPlaces,
  addPlaces,
  getPlaceByID,
  updatePlaceByID,
  deletePlaceByID
};
