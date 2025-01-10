# React Text-to-Speech Converter

A simple React application that allows users to input text, and then converts that text into speech using the browser's built-in speech synthesis API. This project also allows users to customize voice settings such as pitch, rate, and voice type.

## Features

- **Text-to-Speech**: Converts user input text to speech.
- **Voice Settings**: Customizable voice rate, pitch, and language.
- **History**: Keeps track of previous queries and answers.
- **Dark Mode**: Toggle between light and dark themes for better user experience.
- **API Integration**: Fetches answers to user queries from a generative language model (Google Gemini API).
- **Toast Notifications**: Display success messages after speaking the text.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **SpeechSynthesis API**: Native browser API to convert text into speech.
- **Axios**: For making API calls to fetch answers from an external server.
- **Netlify**: Used for deploying the project online.

## Setup and Installation

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/username/my-react-app.git
cd my-react-app
