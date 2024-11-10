const Content = require('../models/Content');

// Create new content
exports.createContent = async (req, res) => {
    try {
        const { title, description, type } = req.body;
        const content = new Content({
            title,
            description,
            type,
            createdBy: req.user.id,  // Use authenticated user
        });
        
        await content.save();
        res.status(201).json(content);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all content
exports.getAllContent = async (req, res) => {
    try {
        const content = await Content.find().populate('createdBy', 'username');
        res.json(content);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
