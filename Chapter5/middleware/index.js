
class Middleware {
    static putMiddleware(req, res, next) {
      console.log("=== Middleware  ===")
      console.log(req.body)
      const name = req.body.username;
      next()
    }
  
    static Error (err, req, res, next) {
      console.log("Ada yang Error")
      if (err) {
      res.render("Error");
      }
    }
  }
  
  module.exports = Middleware