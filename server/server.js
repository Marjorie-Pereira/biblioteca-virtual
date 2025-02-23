import express from "express";
import cors from "cors";
import books from "./routes/book.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/book", books);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});