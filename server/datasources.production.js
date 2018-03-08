// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// Use the same environment-based configuration as in staging
require('dotenv').config()

module.exports = {
  db: {
    connector: 'mongodb',
    hostname: process.env.MONGODB_HOST || '127.0.0.1',
    port: process.env.MONGODB_PORT || 27017,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
    database: process.env.MONGODB_NAME,
  }
}