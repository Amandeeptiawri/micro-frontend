const { dependencies } = require("./package.json");
module.exports = {
name: "email",
filename: "remoteEntry.js",
remotes: {},
exposes: {"./Email": "/src/App.tsx",},
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
