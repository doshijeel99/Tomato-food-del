import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://doshijeel99:pass123@cluster0.felaxhz.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}