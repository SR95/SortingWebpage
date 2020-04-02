const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const models = require('../database/models');
const jwt = require('jsonwebtoken');

const saltRounds=10;

router.post('/login', async (req, res) => {
    const secret = process.env.JWT_SECRET;
    const userName = req.body.userName;
    const password = req.body.password;
    const examplePassword = 'password';

    //no username or password provided
    if (!userName || !password) {
        return res.send({
            error: 'User name and password required.'
        })
    }
    const users = await models.Users.findAll({
        where: {
            username: 'bob'
        }
    })
    const user = users[0];
    if (!user) {
        res.status(401);
        return res.send({
            error: 'Invalid username or password'
        });
    }

    try{
        const compareRes = await bcrypt.compare(examplePassword, user.hashedPassword);
        if (compareRes) {
            const token = jwt.sign(
                {
                    data: {
                        username: userName,
                        userId: user.id
                    }
                },
                secret,
                { expiresIn: 60 * 60 }
            );
            return res.send({ token });
        }
        else {
            res.status(401);
            return res.send({
                error: 'Invalid username or password'
            });
        }
    }
    catch (ex) {
        //logger.error(ex);
        console.error(ex);
        res.status(400);
        return res.send({ error: ex });
    }
});

router.post('/signup', async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    console.log("username:"+req.body.userName+" email:"+req.body.email+" password"+req.body.password);
    const examplePassword = 'password';

    try {
        const hashedPassword = await bcrypt.hash(examplePassword, saltRounds)
        console.log("hPassword:" + hashedPassword)
        await models.User.create({
            userName,
            email,
            hashedPassword
        })
        return res.send({ message: 'User created' });
    }
    catch (ex) {
        //logger.error(ex);
        console.error(ex);
        res.status(400);
        return res.send({ error: ex });
    }
});

module.exports = router;