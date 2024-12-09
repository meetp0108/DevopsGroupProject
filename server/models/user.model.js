// Change from ES Module syntax to CommonJS
const bcrypt = require('bcrypt');
const { model, Schema } = require('mongoose');



const saltRounds = 10;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      validate: [
        (password) => password && password.length >= 6,
        "Password should be longer",
      ],
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// Use a pre-save hook to hash the user's password before saving the user
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

// Create an instance method to validate the user's password
userSchema.methods.authenticate = function (password) {
  return this.password === bcrypt.hashSync(password, saltRounds);
};

const User = model("User", userSchema);

module.exports = User;  // Use `module.exports` for CommonJS
