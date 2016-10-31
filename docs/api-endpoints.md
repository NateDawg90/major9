# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks
- `GET /api/tracks`
 -  For track searching
- `GET /api/track/:id`
  - Retrieves track information without pulling the file itself
- `POST /api/track/:id`
- `PATCH /api/track/:id`
  - Upload track Info
- `DELETE/api/track/:id`

### Download
- `GET /api/file/:id`
  - Will be able to download albums and individual files


### Album
- `GET /api/albums`
 -  For album searching
- `GET /api/album/:id`
  - Retrieves album information without pulling the file itself
- `POST /api/album/:id`
- `PATCH /api/album/:id`
  - Upload album Info
- `DELETE/api/album/:id`


### Tags
- `GET /api/tags`
- `POST /api/tags`
- `DELETE /api/tags`
