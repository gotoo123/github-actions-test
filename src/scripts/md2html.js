const marked = require('marked');
const path = require('path');
const fs = require('fs');

const fileList = fs.readdirSync(path.resolve(__dirname, '../assets/md'));
fileList.forEach((name) => {
  const fileName = name.replace('.md', '');
  const file = marked.parse(
    fs.readFileSync(path.resolve(__dirname, `../assets/md/${fileName}.md`), {
      encoding: 'utf8',
    })
  );
  // 这里replace操作是因为文件按行写入，无法将变量整体作为一个字符串；（导入方式: dangerouslySetInnerHTML={{__html: xxx}}）
  // 多一个\n是因为md的代码片段中可能会含有换行的情况，而\n对于innerHTML识别无影响；
  const content = `export const ${fileName} = '${file}'`.replace(
    /\n/g,
    "\\n'\n+'"
  );
  fs.writeFileSync(
    path.resolve(__dirname, `../assets/docs/${fileName}.jsx`),
    content
  );
});
