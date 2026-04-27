const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  const html = `
  <html>
    <head>
      <title>CI/CD Dashboard</title>
      <style>
        body {
          font-family: Arial;
          background: #0f172a;
          color: white;
          text-align: center;
          padding: 50px;
        }
        .card {
          background: #1e293b;
          padding: 20px;
          border-radius: 10px;
          margin: 20px auto;
          width: 300px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        h1 {
          color: #38bdf8;
        }
      </style>
    </head>
    <body>
      <h1>🚀 CI/CD Pipeline Dashboard</h1>

      <div class="card">
        <h3>📅 Current Time</h3>
        <p>${new Date().toLocaleString()}</p>
      </div>

      <div class="card">
        <h3>💻 Server Info</h3>
        <p>${os.hostname()}</p>
      </div>

      <div class="card">
        <h3>⚡ Status</h3>
        <p>Deployment Successful ✅</p>
      </div>

      <div class="card">
        <h3>🔥 Version</h3>
        <p>v1.0.0</p>
      </div>

    </body>
  </html>
  `;
  res.send(html);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});