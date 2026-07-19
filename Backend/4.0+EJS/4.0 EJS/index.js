import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = new Date();
    const dayNumber = today.getDay();

    let type = "";
    let adv = "";

    if (dayNumber === 0 || dayNumber === 6) {
        type = "weekend";
        adv = "It's time to relax.";
    } else {
        type = "weekday";
        adv = "It's time to work hard.";
    }

    res.render("index", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});