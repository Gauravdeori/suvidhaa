# Quick Start Guide - SUVIDHA Kiosk

## Prerequisites

You need Node.js and npm installed on your system.

## Installation & Running

1. **Navigate to project directory:**
   ```bash
   cd C:\Users\Gaura\.gemini\antigravity\scratch\suvidha-kiosk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in terminal

## Demo Credentials

### For Citizens (User Login)
- **Mobile + OTP**: Enter any 10-digit number (e.g., 9876543210), then any 6-digit OTP (e.g., 123456)
- **Aadhaar**: Enter any 12-digit number (e.g., 123456789012)
- **Guest Mode**: Click "Continue as Guest" button

### For Administrators
- **Username**: admin
- **Password**: admin123
- **Access**: Navigate to `/admin` or use the admin login page

## Testing the Application

### Test User Flow:
1. Login with mobile OTP or Aadhaar
2. Select a service (Electricity, Gas, Water, or Waste)
3. Choose "New Request" or "File Complaint"
4. Complete the 4-step form
5. View confirmation and ticket ID
6. Track status using ticket ID
7. View/print receipt

### Test Admin Flow:
1. Login as admin
2. View dashboard statistics
3. Click on any request
4. Update status and add remarks
5. Save changes

## Sample Ticket IDs

Try searching for these pre-loaded tickets:
- `ELE-20260208-1001` (Electricity - Completed)
- `WAS-20260208-2002` (Waste Management - In Progress)

## Features to Explore

✅ Multi-language support (English, Hindi, Marathi)
✅ Touch-friendly interface
✅ Document upload with drag-and-drop
✅ QR code generation
✅ Print receipts
✅ Auto-logout after 3 minutes
✅ Status tracking timeline
✅ Admin panel

## Troubleshooting

**If npm is not installed:**
- Download and install Node.js from https://nodejs.org/
- Restart your terminal after installation

**If port 3000 is busy:**
- The app will automatically use the next available port
- Check the terminal output for the actual URL

**If dependencies fail to install:**
- Delete `node_modules` folder
- Run `npm install` again

## Building for Production

```bash
npm run build
npm run preview
```

This creates an optimized production build in the `dist` folder.

## Support

For issues or questions, refer to the README.md file in the project directory.

---

**Ready to demo!** 🚀
