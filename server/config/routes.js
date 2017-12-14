const path = require("path");

const users = require('./../controller/users.js')

module.exports = app => {
    app.post("/register", users.register);
    app.post("/login", users.login);
    app.get("/logout", users.logout);
    app.post("/addbike", users.addbike);
    app.get("/getAllBikes", users.getAllBikes);
    app.get("/getAllMyBikes", users.getAllMyBikes);
    app.post("/update", users.update);
    app.post("/delete", users.delete);
    app.get("*" , ( req,res ) => res.sendFile(path.resolve("./client/dist/index.html")));
}