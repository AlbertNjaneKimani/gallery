
var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://albertnjane:Pa55word@gallery.e6xoyfs.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://albertnjane:Pa55word@gallery.e6xoyfs.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://albertnjane:Pa55word@gallery.e6xoyfs.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;