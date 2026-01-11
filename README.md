# 🚀 LearnAPI

A simple REST API for learning HTTP methods. Perfect for frontend students to practice making API requests.

## Features

- ✅ **In-Memory Storage** - No database setup required
- ✅ **CORS Enabled** - Works with any frontend
- ✅ **Swagger Docs** - Interactive API documentation
- ✅ **Full CRUD** - Create, Read, Update, Delete operations
- ✅ **Sample Data** - Pre-loaded items to get started

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run start:dev

# Start production server
npm run start
```

**🌐 API:** http://localhost:3000  
**📚 Swagger:** http://localhost:3000/api

---

## API Endpoints

| Method   | Endpoint      | Description          |
| -------- | ------------- | -------------------- |
| `GET`    | `/items`      | Get all items        |
| `GET`    | `/items/:id`  | Get single item      |
| `POST`   | `/items`      | Create new item      |
| `PUT`    | `/items/:id`  | Update entire item   |
| `PATCH`  | `/items/:id`  | Partial update       |
| `DELETE` | `/items/:id`  | Delete item          |

---

## Item Structure

```json
{
  "id": 1,
  "name": "Laptop",
  "description": "Powerful laptop for development",
  "price": 999.99
}
```

---

## Frontend Examples

### JavaScript (Fetch API)

```javascript
// GET - Fetch all items
const items = await fetch('http://localhost:3000/items').then(r => r.json());

// POST - Create new item
await fetch('http://localhost:3000/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Monitor', description: '27 inch 4K', price: 399.99 })
});

// PUT - Update item
await fetch('http://localhost:3000/items/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Gaming Laptop', description: 'RGB keyboard', price: 1499.99 })
});

// PATCH - Partial update
await fetch('http://localhost:3000/items/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ price: 899.99 })
});

// DELETE - Remove item
await fetch('http://localhost:3000/items/1', { method: 'DELETE' });
```

### Axios

```javascript
import axios from 'axios';

const API = 'http://localhost:3000';

// GET
const { data } = await axios.get(`${API}/items`);

// POST
await axios.post(`${API}/items`, { name: 'Keyboard', description: 'Mechanical', price: 129.99 });

// PUT/PATCH
await axios.put(`${API}/items/1`, { name: 'Updated', description: 'New desc', price: 199.99 });

// DELETE
await axios.delete(`${API}/items/1`);
```

---

## Deployment

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

Build and run:
```bash
npm run build
docker build -t learnapi .
docker run -p 3000:3000 learnapi
```

### Railway / Render / Fly.io

1. Push code to GitHub
2. Connect repository to your platform
3. Set build command: `npm run build`
4. Set start command: `npm run start:prod`
5. Deploy!

---

## HTTP Methods Explained

| Method   | Purpose                     | Idempotent | Has Body |
| -------- | --------------------------- | ---------- | -------- |
| `GET`    | Read/retrieve data          | ✅ Yes     | ❌ No    |
| `POST`   | Create new resource         | ❌ No      | ✅ Yes   |
| `PUT`    | Replace entire resource     | ✅ Yes     | ✅ Yes   |
| `PATCH`  | Partial update              | ✅ Yes     | ✅ Yes   |
| `DELETE` | Remove resource             | ✅ Yes     | ❌ No    |

---

## Status Codes

| Code  | Meaning              |
| ----- | -------------------- |
| `200` | OK - Success         |
| `201` | Created              |
| `400` | Bad Request          |
| `404` | Not Found            |
| `500` | Server Error         |

---

## License

MIT © 2026
# learn-api
