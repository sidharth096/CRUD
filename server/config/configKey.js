import dotenv from 'dotenv'

dotenv.config();

const configKey = {
    BACKEND_PORT: process.env.BACKEND_PORT,
    MONGO_URI: process.env.MONGO_URI,
};

export default configKey;