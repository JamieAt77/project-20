# Items

A full-stack app: Vite + React frontend, Express backend. The homepage lists the items served by the backend.

## Run it

```bash
cd backend && npm install && npm start     # http://localhost:4000
cd frontend && npm install && npm run dev  # http://localhost:5173
```

The Vite dev server proxies `/api` to the backend on port 4000.

## API

| Method | Path | Body | Response |
| --- | --- | --- | --- |
| GET | `/api/items` | — | `{ items: [ { id, text } ] }` |
| GET | `/api/health` | — | `{ ok: true }` |

## Data

The items are held in memory by the server and reset when it restarts.
