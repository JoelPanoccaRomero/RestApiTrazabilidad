import mongoose from "mongoose";

// const MONGO_URI = "mongodb://localhost/restapits";mongodb+srv:
const MONGO_URI = "mongodb+srv://sa:lqs@cluster0.mvhxb.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.set("useFindAndModify", false);
mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
