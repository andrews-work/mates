const mysql = require('mysql');

// Create a MySQL pool to handle database connections
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Define the User model
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  save(callback) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      connection.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [this.username, this.password],
        (err, results) => {
          connection.release();

          if (err) {
            console.error(err);
            return callback(err);
          }

          callback(null, results.insertId);
        }
      );
    });
  }

  static findByUsername(username, callback) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      connection.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (err, results) => {
          connection.release();

          if (err) {
            console.error(err);
            return callback(err);
          }

          if (results.length === 0) {
            return callback(null, null);
          }

          const user = new User(
            results[0].username,
            results[0].password
          );

          callback(null, user);
        }
      );
    });
  }
}

module.exports = User;