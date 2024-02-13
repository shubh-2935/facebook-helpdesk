const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const FacebookController = require('./controllers/FacebookController');
const ConversationController = require('./controllers/ConversationController');
const authMiddleware = require('./authorization/authMiddleware');

// User routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// Facebook routes
router.post('/connect-facebook', FacebookController.connect);
router.delete('/disconnect-facebook', FacebookController.disconnect);

// Conversation routes
router.get('/conversations', ConversationController.getAllConversations);
router.post('/reply', authMiddleware, ConversationController.replyToMessage);

module.exports = router;
