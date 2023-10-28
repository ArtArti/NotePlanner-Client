module.exports = {
    //...
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
  