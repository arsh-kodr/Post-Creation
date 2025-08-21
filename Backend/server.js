const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectToDB = require("./src/db/db");

connectToDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
