const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's assigned port or default to 3000

// Create a bot instance
const bot = mineflayer.createBot({
  host: "DeadBEDSMP.aternos.me", // Replace with your server IP
  port: 42585,                  // Minecraft server port
  username: "afkbot",  // Bot's username
});

// Web server for uptime monitoring
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Web server is running on port ${PORT}`);
});

// Bot events
bot.on('spawn', () => {
  console.log('Bot connected to Minecraft server.');
});
bot.on('error', (err) => console.error(err));
bot.on('end', () => console.log('Bot disconnected.'));
