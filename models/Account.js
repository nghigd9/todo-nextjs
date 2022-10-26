import mongoose from 'mongoose';

const accountSchmea = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.models.Task || mongoose.model('Account', accountSchmea);
