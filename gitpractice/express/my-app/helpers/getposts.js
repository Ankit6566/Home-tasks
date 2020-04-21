const posts = require('./posts');

module.exports = function postDetails(username) {
    const result = posts.filter(entry => {
        return entry.username === username;
    });
    if (result.length !== 1) {
        return null;
    }
    return result[0];
}