const http = require('http');

http.get('http://localhost:3000/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.message && json.message.includes('Hello')) {
        console.log('TEST_OK');
        process.exit(0);
      } else {
        console.error('TEST_FAIL: unexpected response');
        process.exit(1);
      }
    } catch (e) {
      console.error('TEST_FAIL: invalid json');
      process.exit(1);
    }
  });
}).on('error', err => { console.error('TEST_FAIL', err); process.exit(1); });