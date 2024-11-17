# CareerAI

A modern web application built with Next.js that helps users with their career development and job search process.

## Technologies Used

- **Framework**: Next.js 14
- **Authentication**: Clerk
- **UI Components**: 
  - Radix UI
  - Tailwind CSS
  - Shadcn/ui
- **Database**: Prisma ORM
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/medevs/careerai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add necessary environment variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable UI components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and shared logic
- `/prisma` - Database schema and migrations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Features

- Modern, responsive UI with Tailwind CSS
- Authentication and user management with Clerk
- Type-safe development with TypeScript
- Server-side rendering with Next.js
- Database integration with Prisma

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
