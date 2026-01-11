import { Controller, Get, Header } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/html')
  getWelcome(): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LearnAPI - HTTP Methods Practice</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      min-height: 100vh;
      color: #fff;
      padding: 40px 20px;
    }
    .container { max-width: 900px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 40px; }
    .logo {
      font-size: 3rem;
      font-weight: bold;
      background: linear-gradient(90deg, #e94560, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .tagline { color: #8892b0; margin-top: 10px; font-size: 1.2rem; }
    .card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 30px;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
    h2 { color: #e94560; margin-bottom: 20px; }
    h3 { color: #64ffda; margin: 15px 0 10px; }
    .endpoint {
      background: rgba(0, 0, 0, 0.3);
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      font-family: 'Courier New', monospace;
    }
    .method {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: bold;
      margin-right: 10px;
      min-width: 70px;
      text-align: center;
    }
    .get { background: #61affe; }
    .post { background: #49cc90; }
    .put { background: #fca130; }
    .patch { background: #50e3c2; color: #000; }
    .delete { background: #f93e3e; }
    code {
      background: rgba(100, 255, 218, 0.1);
      padding: 2px 8px;
      border-radius: 4px;
      color: #64ffda;
    }
    .btn {
      display: inline-block;
      background: linear-gradient(90deg, #e94560, #ff6b6b);
      color: #fff;
      padding: 12px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin: 10px 10px 0 0;
      transition: transform 0.2s;
    }
    .btn:hover { transform: translateY(-2px); }
    .btn-secondary {
      background: transparent;
      border: 2px solid #64ffda;
      color: #64ffda;
    }
    pre {
      background: #0d1117;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 15px 0;
      border: 1px solid #30363d;
      font-size: 14px;
    }
    .footer { text-align: center; margin-top: 40px; color: #8892b0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🚀 LearnAPI</div>
      <p class="tagline">Practice HTTP Methods with a Real REST API</p>
      <div style="margin-top: 20px;">
        <a href="/api" class="btn">📚 Swagger Docs</a>
        <a href="/items" class="btn btn-secondary">📦 View Items</a>
      </div>
    </div>

    <div class="card">
      <h2>📖 Available Endpoints</h2>
      <div class="endpoint"><span class="method get">GET</span><code>/items</code> - Get all items</div>
      <div class="endpoint"><span class="method get">GET</span><code>/items/:id</code> - Get single item by ID</div>
      <div class="endpoint"><span class="method post">POST</span><code>/items</code> - Create new item</div>
      <div class="endpoint"><span class="method put">PUT</span><code>/items/:id</code> - Update entire item</div>
      <div class="endpoint"><span class="method patch">PATCH</span><code>/items/:id</code> - Partial update</div>
      <div class="endpoint"><span class="method delete">DELETE</span><code>/items/:id</code> - Delete item</div>
    </div>

    <div class="card">
      <h2>💻 Frontend Example</h2>
      <h3>Fetch All Items (GET)</h3>
      <pre>fetch('/items')
  .then(res => res.json())
  .then(data => console.log(data));</pre>
      
      <h3>Create Item (POST)</h3>
      <pre>fetch('/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Product',
    description: 'Product description',
    price: 99.99
  })
}).then(res => res.json());</pre>
      
      <h3>Delete Item (DELETE)</h3>
      <pre>fetch('/items/1', { method: 'DELETE' })
  .then(res => res.json());</pre>
    </div>

    <div class="footer">
      <p>Built with ❤️ using NestJS • In-Memory Storage (resets on restart)</p>
    </div>
  </div>
</body>
</html>`;
  }
}
