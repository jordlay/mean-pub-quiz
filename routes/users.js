const expresss = require('express');
const router = expresss.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');

// Register
router.post('/register', (req,res,next) => {
    let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
    });

    User.addUser(newUser, (err,user) => {
    if (err) {
        res.json({success: false, msg: 'Failed to Register User'});  
    } else {
        res.json({success: true, msg: 'User Registered'})
    }
    });

});

// Edit Email
router.post('/editEmail', (req,res,next) => { 
    const user = req.body;
        User.editEmail(user, (err, user) => {
            if (err) {
                res.json({success: false, msg: 'Failed to Edit Email'});  
            } else {
                res.json({success: true, msg: 'Email Edited'})
            }
        });
});

// Edit Password
router.post('/editPassword', (req,res,next) => { 
    const user = req.body;
        User.editPassword(user, (err, user) => {
            if (err) {
                res.json({success: false, msg: 'Failed to Edit Password'});  
            } else {
                res.json({success: true, msg: 'Password Edited'});
            }
        });
});

// Delete User
router.post('/deleteUser', (req,res,next) => { 
    const user = req.body;
        User.deleteUser(user, (err, user) => {
            if (err) {
                res.json({success: false, msg: 'Failed to Delete User'});  
            } else {
                res.json({success: true, msg: 'User Deleted'});
            }
        });
});

// Check Exisiting Username
router.post('/existingUsername', (req,res,next) => {
    const username = req.body.username;
    User.getUserByUsername(username, (err,user) => {
        if (err) {throw err;}
        if (!user) {
            return res.json({success: false, msg: 'Username not found'});
        } else {
            return res.json({success: true, msg: 'Username already exists'});
        }
    });
});

// Check Existing Email
router.post('/existingEmail', (req,res,next) => {
    const email = req.body.email;
    User.getUserByEmail(email, (err,user) => {
        if (err) { throw err; }
        if (!user) {
            return res.json({success: false, msg: 'User with that email not found'});
        } else {
            return res.json({success: true, msg: 'User with that email exists'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err,user) => {
        if (err) {throw err;}
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) { throw err;}
            if (isMatch) {
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 
                });

                res.json({
                    success: true,
                    token: 'JWT '  + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}),(req,res,next) => {
    res.json({user: req.user});
});

module.exports = router;