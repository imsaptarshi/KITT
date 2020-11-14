import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    prefix: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
        maxlength: 3
    },
}, {
    timestamps: true,
});

const Settings = mongoose.model("Settings", userSchema);

module.exports = Settings;