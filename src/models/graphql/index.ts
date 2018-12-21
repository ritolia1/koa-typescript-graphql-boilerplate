import fs from 'fs';

const typeDefs: string[] = [];
const fileList = fs.readdirSync(__dirname);

fileList.forEach((fileName: any) => {
  if (fileName.indexOf('.type.ts') > -1) {
    typeDefs.push(require(`${__dirname}/${fileName}`).default);
  }
});

export default typeDefs;
