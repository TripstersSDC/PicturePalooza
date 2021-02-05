/* eslint-disable quotes */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/pictures.csv`);
ws.write(`picid, fkitemid, largePics, thumbnails\n`, 'utf-8');
let itemid = 1;
for (let i = 1; i <= 10000000; i += 1) {
  const random = Math.floor(Math.random() * (1000 - 1) + 1);
  const largePics = `https://sdc-thumbnail-photos.s3.amazonaws.com/thumbnailPhotos/image${random}.jpg`;
  const thumbnails = `https://sdc-thumbnail-photos.s3.amazonaws.com/thumbnailPhotos/image${random}.jpg`;
  const record = `${i}, ${itemid}, ${largePics}, ${thumbnails}`;
  ws.write(`${record}\n`, 'utf-8');
  if (i % 9 === 0) {
    itemid += 1;
  }
  if (i % 100000 === 0) {
    console.log(`process: ${i / 100000}%`);
  }
}
ws.end();
