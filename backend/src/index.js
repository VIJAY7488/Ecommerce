const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PORT, URI } = require('./config');
const authRouter = require('./routes/auhtRoutes');



const app = express();

mongoose.connect(URI)
.then(() => console.log("Db is connected successfully"))
.catch((error) => console.log(error));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true
}));

app.use('/api/v1', authRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});