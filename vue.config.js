module.exports = {
  lintOnSave: true,
  devServer: {
    public: '0.0.0.0:8080',
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
};
