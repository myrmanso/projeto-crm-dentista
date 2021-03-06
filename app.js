require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const userSessionValidationMiddleware = require("./middlewares/userSessionValidation.middleware");

const index = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes");
const schedule = require("./routes/schedule.routes");
const dentist = require("./routes/dentist.routes");
const patient = require("./routes/patient.routes");

// require database configuration
require("./configs/db.config");
require("./configs/session.config")(app);

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.static(path.join(__dirname, "public")));
/* app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); */

app.use("/", index);
app.use("/", authRoutes);
app.use("/agenda", schedule);
app.use(userSessionValidationMiddleware);
app.use("/dentist", dentist);
app.use("/patient", patient);

module.exports = app;
