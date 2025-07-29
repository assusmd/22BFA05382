const axios = require('axios');

const LOG_URL = "http://20.244.56.144/evaluation-service/logs";

async function Log(stack, level, pkg, message, token) {
  try {
    const res = await axios.post(
      LOG_URL,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    console.log("Log Created:", res.data.logID);
  } catch (err) {
    console.error("Log Failed:", err.message);
  }
}

module.exports = Log;
