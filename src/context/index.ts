// ts环境下需下载@types/webpack-env
const files = require.context("./files", true, /\.ts/);

const importAll = (contextLoader: __WebpackModuleApi.RequireContext) => {
  contextLoader.keys().forEach((id) => console.log(contextLoader(id)));
};

importAll(files);
