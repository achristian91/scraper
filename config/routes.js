module.exports = function(router) {
    //Renders the home page
    router.get("/", function(req, res) {
        res.render("home");
    });

    //Renders the saved pages
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}