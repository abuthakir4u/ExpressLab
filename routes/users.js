const express = require('express');
const router = express.Router(); 


router.get("/", (req, res) => {
    //http://localhost:3000/users?name=abc12
    console.log("Query parameter name", req.query.name);
    res.send("User List")
})


router.post("/", (req, res) => {
    const isValid = false;
    if (isValid) {
        users["100"] = req.body.userName;
        res.redirect('/users/100');
    } else {
        console.log("Error");
        res.render("users/new", {firstName: req.body.firstName, lastName: req.body});
    }
    console.log('Input userName', req.body.firstName);
})

router.get("/new", (req, res) => {
    res.render("users/new", {firstName: "test"});
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        console.log(req.params.id);
        res.send(`get user by id ${req.params.id}`)
    })
    .put((req, res) => {
        console.log(req.params.id);
        res.send(`update user by id ${req.params.id}`)
    })
    .delete((req, res) => {
        console.log(req.params.id);
        res.send(`delete user by id ${req.params.id}`)
    })


const users = {
    "10" : "Abu",
    "20" : "Kamal",
    "30" : "Hameed"
};
router.param('id', (req, res, next, id) => {
    console.log('id matched', id);
    req.user = users[id];
    next();
})

module.exports = router