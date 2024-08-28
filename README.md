# Thot Tarot API 🔮

This project is a RESTful API for managing a Thot Tarot card database. It's built with TypeScript, Express.js, and Drizzle ORM, connecting to a PostgreSQL database. 🚀

## Features ✨

- Fetch all tarot cards 📚
- Fetch a single tarot card by ID 🃏
- Add a new tarot card ➕
- Bulk insert multiple tarot cards 📥
- Update tarot card details ✏️
- Delete a tarot card 🗑️

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
- `image_url`: VARCHAR(500)
- `name`: VARCHAR(255)
- `description`: VARCHAR(1000)
- `long_description`: VARCHAR(1000)
- `astrology`: JSONB
- `element`: VARCHAR(50)
- `number`: Serial
- `meanings`: JSONB
- `advice`: VARCHAR(500)
- `question`: VARCHAR(500)
- `confirmation`: VARCHAR(500)
- `drive`: JSONB
- `keywords`: JSONB
- `revelation`: VARCHAR(500)
- `ruling_planet`: VARCHAR(50)
- `transitional_phase`: VARCHAR(50)
- `attributes`: JSONB
- `light_meanings`: JSONB
- `shadow_meanings`: JSONB
- `reversed_meaning`: VARCHAR(500)

## API Endpoints 🛣️

### GET /cards

Fetches all tarot cards.

### GET /cards/:id

Fetches a single tarot card by ID.

### POST /cards

Adds a new tarot card.

```json
{
  "name": "The Fool",
  "number_meaning": "0 as nothing and begin of it all",
  "short_description": "The Fool is usually depicted as a beggar or a vagabond, wearing ragged clothes & stockings without shoes, and carries a stick on his back. He symbolizes true innocence, a perfect state of joy and freedom, the sure feeling to be one with the spirit of life at any time.",
  "long_description": "The Fool is the symbol of true innocence, a perfect state of joy and freedom, the sure feeling to be one with the spirit of life, at any time.The Fool has the number 0, for someone ready to go in any direction, open to all possibilities.  He belongs nowhere, has no past, but an infinite future.  Every moment is a new beginning. In Arabic letters the 0 has the shape of an egg, the symbol for the origin of life.  The Fool is change, motion and the readiness to jump into life, with no cares ever.  The Fool knows no difference between possibility and reality, the zero means a total lack of hope and fear, the Fool suspects and plans nothing. He reacts directly to the current situation, nothing is calculated, nothing is hidden.In most decks the Fool is shown with an animal, as a symbol of nature, the animal soul in perfect harmony with the spirit that just follows its instincts.  The Fool is courage, optimism and the belief in life and himself.  When times are hard, and we suffer the pressure of ‘being reasonable’ or denying our instincts, the Fool reminds us that our inner person knows best what to do.In its negative aspect, the card can say that its qualities are blocked or reversed.  Irresponsibility, mad projects, recklessness – the careless human who covers himself with some artificial madness, for distrusting his instincts and fearing standstill and silence.Always trust your instincts",
  "image_url": "https://res.cloudinary.com/dytiufsuu/image/upload/v1724869722/thot_tarot/00-The_Fool_fkip0b.jpg",
  "ruling_planet": "Uranus",
  "transitional_phase": "Pisces to Aries",
  "attributes": [
    "curiosity",
    "spontaneity",
    "madness"
  ],
  "element": "Air",
  "light_meanings": [
    "the positive break up of structures and limitations",
    "selfless idealism",
    "endless fantasy",
    "optimism",
    "trust to instincts",
    "beginnings",
    "innocence"
  ],
  "shadow_meanings": [
    "the negative loss of structures",
    "useless daydreaming",
    "infantility"
  ],
  "reversed_meaning": "The Fool Reversed can show that you are taking too many risks and acting recklessly. In your attempt to live ‘in the moment’ and be spontaneous and adventurous, you may do so in total disregard of the consequences of your actions and engaging in activities that put both yourself and others at risk. Look at the bigger picture and consider how you can keep the free spirit of The Fool without harming others.",
  "advice": "You are ready for a new start, perhaps for a quality change. Let yourself go, take a break even if fear tries to hold you back again and again. Trust the voice of your heart.",
  "question": "What do you have to do to get rid of it? What is the role of the 'tiger of fear' in your life? How do you imagine the bold jump into something new? Where’s your heart calling?",
  "confirmation": "Now I’m following my heart’s suggestions. I’m open and I’m going wherever you may lead me.",
  "drive": [
    "changes",
    "movement",
    "the innocence of a child",
    "spontaneity",
    "free spirit",
    "]"
  ],
  "keywords": [
    "openess",
    "trust",
    "risk-taking",
    "loyalty to ourselves",
    "freedom",
    "independence",
    "creativity",
    "performance",
    "leapfrogging",
    "follow-up of the heart"
  ],
  "revelation": ""
}
```

## PUT /cards/

Updates an existing tarot card.

## DELETE /cards/

Deletes a tarot card.

## POST /cards/bulk

Bulk inserts multiple tarot cards.

Request body example:

```json
[
  {
    "name": "The Fool",
    "description": "...",
    "ruling_planet": "Uranus",
    "transitional_phase": "Pisces to Aries",
    "attributes": ["curiosity", "spontaneity", "adventure"],
    "...."
  },
  {
    "name": "The Magician",
    "description": "...",
    "ruling_planet": "Mercury",
    "transitional_phase": "Aries to Taurus",
    "attributes": ["manifestation", "resourcefulness", "power"],
   "...."
  }
]
```

Request body example:

## Error Handling ⚠️

The API uses standard HTTP status codes for error responses:

- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses will include a JSON body with a `message` field describing the error.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.
