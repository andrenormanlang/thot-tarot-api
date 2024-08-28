# Thot Tarot API 🔮

This project is a RESTful API for managing a Thot Tarot card database. It's built with TypeScript, Express.js, and Drizzle ORM, connecting to a PostgreSQL database. 🚀

## Features ✨

- Fetch all tarot cards 📚
- Fetch a single tarot card by ID 🃏
- Add a new tarot card ➕
- Bulk insert multiple tarot cards 📥

## Prerequisites 📋

- Node.js (v14 or later) 💻
- npm (v6 or later) 📦
- PostgreSQL database 🐘

## Setup 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/andrenormanlang/thot-tarot-api.git
   cd thot-tarot-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add your database connection string:

   ```bash
   DATABASE_URL=postgres://username:password@localhost:5432/your_database
   ```

4. Run database migrations:

   ```bash
   npm run generate
   npm run migrate
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

The server should now be running on `http://localhost:3000`. 🎉

## Database Schema 📊

The `thot_tarot` table has the following structure:

- `id`: Serial (Primary Key)
- `name`: VARCHAR(255)
- `description`: VARCHAR(1000)
- `astrology`: JSONB
- `element`: VARCHAR(50)
- `number`: Serial
- `meanings`: JSONB
- `advice`: VARCHAR(500)
- `question`: VARCHAR(500)
- `confirmation`: VARCHAR(500)

## API Endpoints 🛣️

### GET /cards

Fetches all tarot cards.

### GET /cards/:id

Fetches a single tarot card by ID.

### POST /cards

Adds a new tarot card.

Request body example:

```json
{
  "name": "The Fool",
  "description": "The Fool represents new beginnings, faith in the future, innocence, spontaneity, and a free spirit.",
  "ruling_planet": "Uranus",
  "transitional_phase": "Pisces to Aries",
  "attributes": ["curiosity", "spontaneity", "adventure"]
}
```

### POST /cards/bulk

Bulk inserts multiple tarot cards.

Request body example:

```json
[
  {
    "name": "The Fool",
    "description": "...",
    "ruling_planet": "Uranus",
    "transitional_phase": "Pisces to Aries",
    "attributes": ["curiosity", "spontaneity", "adventure"]
  },
  {
    "name": "The Magician",
    "description": "...",
    "ruling_planet": "Mercury",
    "transitional_phase": "Aries to Taurus",
    "attributes": ["manifestation", "resourcefulness", "power"]
  }
]
```

## Error Handling ⚠️

The API uses standard HTTP status codes for error responses:

- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses will include a JSON body with a `message` field describing the error.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License.
