const express = require("express");
const router = express.Router();
const placeController = require("../../controller/placeController.js");

router.get("/", placeController.getPlaces);
router.get("/:id", placeController.getPlaceByID);
router.post("/", placeController.addPlaces);
router.put("/:id", placeController.updatePlaceByID);
router.delete("/:id", placeController.deletePlaceByID)

module.exports = router;
