# Note Taker

## Description

Note Taker is a simple yet powerful application that allows users to write, save, and delete notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.

<img src="Screenshot 2024-09-14 225858.png" alt="Site Screenshot">

## Features

- Create new notes with a title and text content
- View existing notes
- Delete unwanted notes
- Responsive design for use on various devices

## Installation

Visit the live link at: https://note-taker-ybje.onrender.com/

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## API Routes

- GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.
- POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.
- DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

This project was completed as part of the [UC Berkeley Coding Bootcamp] curriculum.
Starter code was provided by the bootcamp, with key functionalities implemented by [Alejandro Turrietta].
Assisted by Amazon Q
