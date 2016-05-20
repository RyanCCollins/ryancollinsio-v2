
module.exports = {
  db: process.env.MONGO_URI,
  sessionSecret: process.env.SESSION_SECRET,
  tokenSecret: process.env.TOKEN_SECRET,

  cloudinary: {
    uri: process.env.CLOUDINARY_URL,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
  }
};
