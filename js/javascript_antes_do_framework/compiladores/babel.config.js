const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        firefox: "17",
        edge: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
