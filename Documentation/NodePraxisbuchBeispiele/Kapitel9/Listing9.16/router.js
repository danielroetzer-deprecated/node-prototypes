module.exports = function (app) {
    app.route('/user')
        .get(function (req, res) {
            // fetch user data
            res.send('Userdata');
        })
        .post(function (req, res) {
            // create user
            res.send('User created');
        })
        .put(function (req, res) {
            // update user
            res.send('User updated');
        })
        .delete(function (req, res) {
            // delete user
            res.send('User deleted');
        });
};