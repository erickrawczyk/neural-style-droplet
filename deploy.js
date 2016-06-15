'use strict';
const fs      = require('fs');
const request = require('request');

const apiKey   = require(__dirname + '/api-key.json');
const userData = fs.readFileSync('cloud-config.yml', 'utf-8');

var payload = {
  "name": "ubuntu",
  "region": "nyc3",
  "size": "16gb",
  "image": "ubuntu-14-04-x64",
  "ssh_keys": [1708668],
  "backups": false,
  "ipv6": false,
  "user_data": userData,
  "private_networking": null
}

var req = {
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  url: 'https://api.digitalocean.com/v2/droplets',
  body: JSON.stringify(payload)
}

request.post(req, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body));
  }
});
