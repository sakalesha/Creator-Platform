const mongoose = require('mongoose');

// Define a schema for the dashboard data
const dashboardDataSchema = new mongoose.Schema({
  userStats: {
    totalUsers: Number,
    activeUsers: Number,
    newSignupsToday: Number,
    totalPosts: Number,
    activePosts: Number
  },
  upcomingContent: [{
    title: String,
    platform: String,
    scheduledDate: Date,
    status: String
  }],
  recentActivities: [{
    activity: String,
    timestamp: Date,
    user: String
  }],
  platformEngagement: [{
    platform: String,
    views: Number,
    likes: Number,
    comments: Number
  }]
});

// Create a model from the schema
const DashboardData = mongoose.model('DashboardData', dashboardDataSchema);

module.exports = DashboardData;
