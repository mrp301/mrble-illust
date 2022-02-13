const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias["@"] = path.join(__dirname);
    config.module.rules.push({
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
  images: {
    domains: ["storage.cloud.google.com", "images.ctfassets.net"],
  },
};
