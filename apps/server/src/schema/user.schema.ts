import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const email = new Schema({
  address: {
    type: String,
    lowercase: true,
    required: true,
    index: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

export const UserSchema = new Schema({
  email: {
    type: email,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    firstName: String,
    lastName: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.comparePassword = function(password: string) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
