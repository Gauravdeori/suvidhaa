# SUVIDHA - Smart Urban Digital Helpdesk Assistant

A touch-first, accessible public kiosk web application for unified civic services.

## Features

✅ **Multi-language Support** - English, Hindi, and Marathi
✅ **Touch-Optimized UI** - Large buttons and clear navigation
✅ **Multiple Authentication** - Mobile OTP, Aadhaar, and Guest mode
✅ **4 Service Modules** - Electricity, Gas, Water, and Waste Management
✅ **Request Management** - Step-by-step form with document upload
✅ **Status Tracking** - Visual timeline with real-time updates
✅ **Digital Receipts** - QR codes and print functionality
✅ **Admin Panel** - Request management and status updates
✅ **Auto-logout** - 3-minute inactivity timer for security

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Demo Credentials

### User Login
- **Mobile OTP**: Enter any 10-digit number, then any 6-digit OTP
- **Aadhaar**: Enter any 12-digit number
- **Guest Mode**: Click "Continue as Guest"

### Admin Login
- **Username**: admin
- **Password**: admin123

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── common/         # Reusable UI components
│   ├── dashboard/      # Main dashboard
│   ├── services/       # Service modules
│   ├── status/         # Status tracking
│   ├── receipt/        # Receipt generation
│   └── admin/          # Admin panel
├── contexts/           # React contexts
├── services/           # Mock data & business logic
├── utils/              # Helper functions
├── i18n/               # Translations
└── App.jsx             # Main app with routing
```

## Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **qrcode.react** - QR code generation

## Usage Guide

### For Citizens

1. **Login** - Choose authentication method
2. **Select Service** - Choose from 4 service categories
3. **Submit Request** - Fill multi-step form
4. **Get Receipt** - Receive ticket ID and QR code
5. **Track Status** - Monitor request progress

### For Administrators

1. **Login** - Use admin credentials
2. **View Dashboard** - See statistics and all requests
3. **Manage Requests** - Update status and add remarks
4. **Track History** - View complete status timeline

## Features in Detail

### Authentication
- Mobile number + OTP verification
- Aadhaar-based login (mocked)
- Guest mode for general access
- Auto-logout after 3 minutes of inactivity

### Service Requests
- Category-based request forms
- Rich text descriptions
- Document upload (drag-and-drop)
- Unique ticket ID generation

### Status Tracking
- Search by ticket ID or mobile number
- Visual timeline with 4 stages
- Admin remarks and timestamps

### Receipts
- Professional government-style layout
- QR code for easy tracking
- Print and download options
- Email/SMS sharing (mocked)

### Admin Panel
- Real-time statistics dashboard
- Filter requests by status
- Update status with remarks
- Complete request history

## Accessibility

- High contrast colors
- Large touch targets (60px minimum)
- Clear visual feedback
- Keyboard navigation support
- Screen reader friendly

## Browser Support

- Chrome (recommended)
- Firefox
- Edge
- Safari

## License

Government of India - Public Domain

## Support

- **Helpline**: 1800-XXX-XXXX
- **Email**: support@suvidha.gov.in
