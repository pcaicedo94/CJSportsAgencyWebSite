# Videos Folder

This folder contains player highlight videos for the CJ Sports Agency website.

## Usage

Place player highlight videos here before connecting to YouTube. The videos can be referenced in the `players-data.js` file.

## Supported Formats

- MP4 (recommended)
- WebM
- OGG

## Naming Convention

Use the player's name or ID for easy reference:
- `juan-caicedo.mp4`
- `mathiaz-zapata.mp4`
- `kennet-pinto.mp4`
- `felipe-ayala.mp4`
- `simon-hedman.mp4`
- `jomar-poblete.mp4`

## Example Usage

In `players-data.js`, you can reference local videos like:

```javascript
videoUrl: "videos/juan-caicedo.mp4"
```

Or use YouTube embeds:

```javascript
videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
```
