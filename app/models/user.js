const Sequelize = require("sequelize")

module.exports = sequelize.define("Users", {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false

  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING(25)
  },
  last_name: {
    type: Sequelize.STRING(25)
  },
  resetPasswordToken: {
    type: Sequelize.STRING(100)
  },
  resetPasswordExpiry: {
    type: Sequelize.DATE
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,

})
// "use strict";
// var bcrypt = require('bcrypt-nodejs')
// const sequelize = require("sequelize")

// module.exports = function (sequelize, DataTypes) {
//   var userSchema = sequelize.define('User', {
//     username: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//     }
//   },
//     //   options
//     {
//       timestamps: true, // we don't want timestamp for this table
//       classMethods: {
//         // Class method User.comparePassword() to compare hash vs.
//         // provided password
//         comparePassword: function (password, hash, callback) {
//           // if bcrypt.compare() succeeds it'll call our function with
//           // (null, true), if password doesn't match it calls our function
//           // with (null, false), if it errors out it calls our function
//           // with (err, null)
//           bcrypt.compare(password, hash, function (err, isMatch) {
//             if (err) {
//               return callback(err, null);
//             } else {
//               callback(null, isMatch);
//             }
//           });
//         },
//         associate: function (models) {
//           // TODO: define association of user model
//           // something like User.hasMany(Pen);
//         }
//       }
//     });

//   //   This hook is called when an entry is being added to the back end.
//   //   This method is used to hash the password before storing it
//   //   in our database.
//   //   userSchema.hook('beforeCreate', function(user, options, callback) {
//   //     var SALT_WORK_FACTOR = 10;
//   //     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//   //       if(err) {
//   //         return callback(err, null);
//   //       }
//   //       // generate salt.
//   //       bcrypt.hash(user.password, salt, null, function(err, hash) {
//   //         if(err) {
//   //           return callback(err, null);
//   //         }
//   //         // replace the password with the hash and pass on the
//   //         // user object to whoever should require it.
//   //         user.password = hash;
//   //         return callback(null, user);
//   //       });
//   //     });
//   //   });

//   return userSchema;
// }