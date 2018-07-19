let fs = require('fs'),
  request = require('request');

const download = function(callback) {
  const uri = images.pop(); // take the last one off
  request.head(uri, (err, res, body) => {
    const extension = res.headers['content-type'].split('/').pop();
    const fileName = `${uri.split('/')[3]}.${extension}`;
    console.log('downloading...', fileName);
    request(uri)
      .pipe(fs.createWriteStream('images/screenshots/' + fileName))
      .on('close', callback);
  });
};

var images = [
  'http://wes.io/nslE/content',
  'http://wes.io/nsg8/content',
  'http://wes.io/nsi4/content',
  'http://wes.io/nsbK/content',
  'http://wes.io/nsbz/content',
  'http://wes.io/ntkI/content',
  'http://wes.io/nuqs/content',
  'http://wes.io/nunX/contnet',
  'http://wes.io/nteh/content',
  'http://wes.io/nuda/content',
  'http://wes.io/nyqR/content',
  'http://wes.io/ntqa/content',
];

function start() {
  console.log('done');
  if (images.length) {
    download(start);
  }
}

download(start);
