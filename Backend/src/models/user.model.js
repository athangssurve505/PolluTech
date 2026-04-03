const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["industry", "regulator", "public", "admin"],
    default:"public",
    required: true,
  },

  industryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Industry",
    required: function () {
      return this.role === "industry";
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});


const userModel = mongoose.model("users",userSchema);

module.exports = userModel;