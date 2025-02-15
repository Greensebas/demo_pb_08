const {users} = require("../data/data")

const authorizer = (req, res, next) => {
    const {id} = req.query;
    const user = users.find(user => user.id === +id); // el + en +id lo convierte en nro
    if(user) {
        req.user = user;
        next();
    }
    else {
        res.status(401).send('<h1 style="color: red">UNAUTHORIZED</h1>')
    }
}

module.exports = authorizer