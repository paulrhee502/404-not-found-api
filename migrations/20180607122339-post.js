'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('post', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: 'int',
      notNull: true
    },
    name: {
      type: 'text',
      notNull: true
    },
    body: {
      type: 'text'
    },
    photoLink: {
      type: 'text'
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('post', callback);
};


exports._meta = {
  "version": 1
};
