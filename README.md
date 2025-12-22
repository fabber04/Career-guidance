# NUST Career Guidance Platform

A comprehensive career guidance platform for the National University of Science and Technology (NUST), combining the best features from Quora, Glassdoor, and College Confidential.

## Features

- **Program Information**: Browse official program requirements and details
- **Q&A System**: Ask questions and get answers from verified contributors
- **Reviews**: Read and write program reviews with ratings
- **Chat with Students**: Connect directly with current students in programs
- **Career Outcomes**: View salary data and employment statistics
- **Verified Contributors**: Trusted alumni and professionals provide guidance

## Prototype

The prototype is available at: [GitHub Pages](https://fabber04.github.io/literate-octo-waffle/)

### Local Development

To view the prototype locally:

1. Navigate to the prototype directory:
```bash
cd prototype
```

2. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
.
├── documentation/          # Project documentation
│   ├── DATA_MODEL_SPECIFICATION.txt
│   ├── DEVELOPMENT_WALKTHROUGH.txt
│   └── Project Outline.txt
├── prototype/              # UI/UX Prototype
│   ├── index.html
│   ├── styles/
│   │   ├── main.css
│   │   └── components.css
│   ├── scripts/
│   │   └── main.js
│   └── README.md
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

## Design Inspiration

This platform combines design elements from:
- **Quora**: Clean Q&A interface, topic organization, reputation system
- **Glassdoor**: Review cards with pros/cons, ratings, career outcomes
- **College Confidential**: Program-focused forums, student community

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6.4.0
- **Deployment**: GitHub Pages with GitHub Actions

## Contributing

This is a prototype project. For contributions, please follow the development walkthrough in the documentation folder.

## License

This project is for educational purposes.

## Contact

For questions about NUST programs, visit: https://www.nust.ac.zw/

