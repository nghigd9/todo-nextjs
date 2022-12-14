import mongoose from 'mongoose';
//  M*h%HHEre2iO

// const DB_URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";
// const DB_URL = 'mongodb://nghi:M*h%HHEre2iO@cluster0.rwpca.mongodb.net/test';
const uri =
    'mongodb+srv://nghi:nghi1234@cluster0.rwpca.mongodb.net/?retryWrites=true&w=majority';
const DB_URL = uri;

if (!DB_URL) {
    throw new Error(
        'Please define the DB_URL environment variable inside .env.local'
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        };
        cached.promise = mongoose.connect(DB_URL, options).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
};

export default dbConnect;
