import express from "express";
import path from "path";

const PORT = 3003;
const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (rep, res) => {
    res.render("index");
  });


app.listen(PORT, () => {
    console.log(`${PORT} SERVER START!>< `);
});