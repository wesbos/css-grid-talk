let fs = require('fs'),
  request = require('request');

const download = function(callback) {
  const uri = images.pop(); // take the last one off
  request.head(uri, (err, res, body) => {
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log('downloading...', fileName);
    request(uri)
      .pipe(fs.createWriteStream(`images/screenshots/${  fileName}`))
      .on('close', callback);
  });
};

var images = [
  'http://wes.io/t0jF/content',
  'http://wes.io/t1UT/content',
  'http://wes.io/t14p/content',
  'http://wes.io/t14p/content',
  'http://wes.io/t14p/content',
  'http://wes.io/t1f8/content',
  'http://wes.io/t4Kv/content',
  'http://wes.io/t2oA/content',
  'http://wes.io/t2wZ/content',
  'http://wes.io/t4kr/content',
  'http://wes.io/t3DW/content',
];

function start() {
  console.log('done');
  if (images.length) {
    download(start);
  }
}

download(start);
