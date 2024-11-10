const jwt = require('jwt-simple');

// Middleware to authenticate JWT token
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded token data to request
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};

// Middleware for role-based access control
const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};

module.exports = { authenticate, checkRole };
