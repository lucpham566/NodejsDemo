// getting-started.js
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://lucpham566:Lucpham2001@cluster0.cc4pz.mongodb.net/test"
    );
    console.log("kết nối thành công");
  } catch (error) {
    console.log(error);
    console.log("kết nối thất bại");
  }
}

module.exports = { connect };
