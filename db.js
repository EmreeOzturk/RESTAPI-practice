const mongoose = require("mongoose");
const connDB = () => {
  mongoose.connect(
    process.env.DB_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (!err) console.log("MongoDB Connect Succeeded");
      else console.log("Error in DB connection" + err);
    }
  );
};

connDB.Promise = Promise;

module.exports = {
  connDB,
};
