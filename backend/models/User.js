const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["CAA_Department", "Head_Department", "AR_Faculty", "CAA_Faculty", "Dean_Faculty", "AR_Campus", "Rector"], 
    required: true 
  },
  
  privateKey: { type: String }, // Store private key for signing
  createdAt: { type: Date, default: Date.now }
});