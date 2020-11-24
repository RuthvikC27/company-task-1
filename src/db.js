const {
    DataStore
} = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    Users: store.collection('users')
};