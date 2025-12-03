# BK Secured - Banking Security Platform

A comprehensive banking security and fraud detection platform built with Next.js, React, and TypeScript. This application provides real-time monitoring, transaction analysis, and security alerts for financial institutions.

## Features

- 🔐 **Secure Authentication** - Multi-factor authentication and secure session management
- 📊 **Real-time Dashboard** - Live monitoring of transactions and security events
- 🚨 **Alert System** - Intelligent fraud detection and security alerts
- 📈 **Analytics** - Comprehensive reporting and risk assessment
- 🌍 **Location Tracking** - Monitor transaction locations and detect anomalies
- 🔒 **Risk Assessment** - Advanced risk scoring and threat detection
- 📱 **Responsive Design** - Modern UI optimized for all devices

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leandre000/bk-secured.git
cd bk-secured
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
bk-secured/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── components/        # React components
│   ├── dashboard/         # Dashboard pages
│   └── page.tsx           # Home page
├── lib/                    # Utility libraries
│   ├── api.ts             # API client
│   ├── auth.ts            # Authentication utilities
│   ├── config.ts           # Configuration
│   ├── types.ts            # TypeScript types
│   └── websocket.ts        # WebSocket client
├── public/                 # Static assets
└── README.md              # This file
```

## Configuration

The application uses environment variables for configuration. See `.env.example` for available options.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

For security concerns, please email security@example.com instead of using the issue tracker.

## Support

For support, email support@example.com or open an issue in the repository.

## Acknowledgments

- Next.js team for the amazing framework
- All contributors who have helped improve this project
