const route = require("express").Router()
const Main = require("../controller/controller")
const Middleware = require("../middleware/index")


route.get("/", Main.homepage)
route.get("/game", Main.gamepage)
route.get("/login", Main.loginpage)
route.post("/login", Main.loginmethod)
route.get("/daftar", Main.methoddaftar)
route.post("/daftar", Main.methoddaftarbaru)


module.exports = route