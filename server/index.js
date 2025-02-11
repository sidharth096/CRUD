import express from 'express';
import configKey from './config/configKey.js';
import connectDB from './config/dbConfig.js';
import router from './routes/index.js';

const app = express();
const PORT = configKey.BACKEND_PORT;


app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/api",router)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})