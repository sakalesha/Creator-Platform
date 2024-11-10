const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

// Register User
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        // Generate JWT token
        const token = jwt.encode({ id: user._id }, process.env.JWT_SECRET);
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.encode({ id: user._id }, process.env.JWT_SECRET);
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
