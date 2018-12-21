import fs from 'fs';

let resolvers: any = {};
const fileList = fs.readdirSync(__dirname);

fileList.forEach((fileName: any) => {
  if (fileName.indexOf('.resolver.ts') > -1) {
    resolvers = Object.assign({}, resolvers, require(`${__dirname}/${fileName}`).default);
  }
});

export default resolvers;
