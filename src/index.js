const express = require("express");
const router = require('./routes/index')

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is runing on port ${process.env.PORT || 3000}`);
});
