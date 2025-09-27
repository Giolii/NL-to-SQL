# AI SQL Generator

A full-stack web application that converts natural language descriptions into SQL queries using AI. Built with React (frontend) and Express.js (backend) with OpenAI integration.

## Features

- **Natural Language to SQL**: Describe your query in plain English and get SQL code
- **Real-time Generation**: Instant SQL query generation via AI
- **Clean Interface**: Simple, intuitive web interface
- **REST API**: Backend API for SQL generation

## Tech Stack

### Frontend
- React 19.1.1
- TypeScript
- Vite
- CSS Modules

### Backend
- Express.js 5.1.0
- TypeScript
- OpenAI API
- CORS enabled

## Project Structure

```
ai-sql/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.tsx  # Main application component
│   │   └── ...
│   └── package.json
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── generate.ts  # AI query generation logic
│   ├── api.ts       # OpenAI client configuration
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-sql.git
cd ai-sql
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Set up environment variables:
Create a `.env` file in the `server` directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3005
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will run on `http://localhost:3005`

2. Start the frontend development server:
```bash
cd client
npm run dev
```
The client will run on `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a natural language description of your SQL query in the input field
2. Click "Generate query"
3. The AI will convert your description into SQL code
4. Copy and use the generated SQL query

### Example

**Input**: "Get all users who registered in the last 30 days"

**Output**:
```sql
SELECT * FROM users
WHERE registration_date >= CURRENT_DATE - INTERVAL 30 DAY;
```

## API Endpoints

### `POST /generate`

Generates SQL query from natural language description.

**Request Body:**
```json
{
  "queryDescription": "Your natural language description"
}
```

**Response:**
```json
{
  "response": "Generated SQL query"
}
```

## Development

### Backend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.