import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios("https://api.quotable.io/random?minLength=100&maxLength=140");

    const content = response.data.content;
    const writer = response.data.author;
    res.render("index.ejs", { quote: content, author: writer });
   
  } catch (error) {
    console.log(error);
  }
});
app.post("/next", async (req, res) => {
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
