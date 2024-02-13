const Conversation = require("../models/conversation");

module.exports = {
  async getAllConversations(req, res) {
    try {
      // Fetch all conversations from the database
      const conversations = await Conversation.find();
      res.json(conversations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  async replyToMessage(req, res) {
    try {
      const { conversationId, message } = req.body;
      // Find conversation by ID
      const conversation = await Conversation.findById(conversationId);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }
      // Add new message to conversation
      conversation.messages.push(message);
      await conversation.save();
      res.json(conversation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
