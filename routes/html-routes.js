var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // blog route loads blog.html
  app.get("/exercise/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // authors route loads author-manager.html
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
