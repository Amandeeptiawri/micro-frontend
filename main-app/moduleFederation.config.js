const { dependencies } = require("./package.json");
module.exports = {
name: "mainapp",
filename: "remoteEntry.js",
remotes: {

    chat: "chat@http://localhost:3010/remoteEntry.js",
    email: "email@http://localhost:3009/remoteEntry.js",
},
exposes: {},

shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
}
