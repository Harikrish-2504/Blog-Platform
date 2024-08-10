const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://harkrish2504:Q3yyu26h48@cluster0.6emamdo.mongodb.net/ReactBlog?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(CONNECTION_STRING);
    console.log("Database connected", connect.connection.host, connect.connection.name);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
