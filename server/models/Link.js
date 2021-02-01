const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: [true, "Please provide a url"],
    match: [
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      "Please provide a valid url",
    ],
  },
  shortUrl: {
    type: String,
    unique: true,
    required: true,
  },
});

const Link = mongoose.model("Link", LinkSchema);

module.exports = Link;
