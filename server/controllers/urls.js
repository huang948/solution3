const Link = require("../models/Link");
const { nanoid } = require("nanoid");

exports.createShortUrl = async (req, res, next) => {
  const { url } = req.body;
  try {
    let link = await Link.findOne({ url });
    if (link) {
      res.status(200).json({ success: true, shortUrl: link.shortUrl });
    } else {
      link = await Link.create({
        url,
        shortUrl: `http://www.localhost:5000/urls/${nanoid(6)}`,
      });
      res.status(201).json({ success: true, shortUrl: link.shortUrl });
    }
  } catch (error) {
    next(error);
  }
};

exports.getLongUrl = async (req, res, next) => {
  try {
    const link = await Link.findOne({
      shortUrl: `http://www.localhost:5000/urls/${req.params.id}`,
    });
    if (link) {
      res.redirect(301, link.url);
    } else {
      res.status(400).json({ success: false, error: "No urls found" });
    }
  } catch (error) {
    next(error);
  }
};
