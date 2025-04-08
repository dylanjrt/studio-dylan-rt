# Dylan's (me!) Sanity Content Studio

A customized Sanity.io content management system (CMS) for managing structured content for my website. This studio is configured with custom schemas for managing home page content and thoughts/blog posts.

## Features

- **Home Page Management**: Structured content type for managing the main page content
- **Thoughts/Blog System**: Flexible content type for managing blog posts or thoughts with rich text and images
- **Real-time Editing**: Live preview and real-time collaboration capabilities
- **TypeScript Support**: Fully typed schema definitions and configurations

## Tech Stack

- [Sanity.io](https://www.sanity.io/) - Headless CMS platform
- React 18
- TypeScript
- Styled Components

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd dylan-rt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the development server:
```bash
npm run dev
```

The studio will be available at `http://localhost:3333`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Sanity
- `npm run deploy-graphql` - Deploy GraphQL API
- `npm run lint` - Lint and fix code style issues

## Content Structure

### Home Page (`homeType`)
- Page title
- Main paragraph (block content)
- Last updated timestamp

### Thoughts (`thoughtType`)
- Title
- URL-friendly slug
- Rich text content with support for:
  - Text blocks
  - Images
  - Videos (with optional captions and autoplay settings)

## Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting with custom configuration:
  - No semicolons
  - 100 character line width
  - No spaces in brackets
  - Single quotes

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is private and unlicensed.

## Support

For more information and documentation:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Join Sanity Community](https://slack.sanity.io/)
