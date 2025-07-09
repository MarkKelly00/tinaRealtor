# Tina Odell Real Estate Website

A professional, mobile-friendly real estate website built with React, TypeScript, and Tailwind CSS. Features include property listings, client portal, and lead capture integration.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Property Listings**: Integration-ready for IDX Broker and RMLS data
- **Client Portal**: Authenticated user dashboard for managing favorites
- **Lead Capture**: Contact forms with KVCORE integration capability
- **Authentication**: Firebase Auth for secure user management

### Pages & Components
- **Home Page**: Hero section, featured properties, and call-to-action
- **Listings Page**: Property search and filtering (IDX Broker ready)
- **About Page**: Agent profile and credentials
- **Contact Page**: Lead capture form with validation
- **Client Portal**: Favorites management and profile settings
- **Authentication**: Login and registration pages

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Database**: Firebase Firestore (for user data)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tinaRealtor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication and Firestore
   - Update `src/services/firebase.ts` with your Firebase config:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "your-app-id"
   };
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Firebase Setup
1. Enable Email/Password authentication in Firebase Console
2. Set up Firestore database rules for user data
3. Configure hosting (optional) for deployment

### IDX Broker Integration (Coming Soon)
- The listings page is prepared for IDX Broker integration
- Search and filter components are ready for MLS data
- Property detail pages will be added with IDX widgets

### KVCORE Integration (Coming Soon)
- Contact forms are ready for KVCORE webhook integration
- Lead capture functionality prepared for CRM connection
- Analytics tracking ready for implementation

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🎨 Design System

### Colors
- **Primary**: Blue tones for branding and CTAs
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Used for highlights and interactive elements

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Responsive**: Scales appropriately across devices

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`, `.btn-outline`)
- Consistent card layouts (`.card`)
- Form input styling (`.input-field`)

## 🔐 Authentication Flow

1. **Registration**: Users create accounts with email/password
2. **Login**: Secure authentication with Firebase
3. **Protected Routes**: Client portal requires authentication
4. **Session Management**: Persistent login state

## 📊 Future Enhancements

### Phase 1 (Current)
- [x] Basic website structure
- [x] Authentication system
- [x] Client portal foundation
- [x] Contact forms

### Phase 2 (Next)
- [ ] IDX Broker integration for live listings
- [ ] KVCORE lead capture integration
- [ ] Favorites system with Firestore
- [ ] QR code generation for listings

### Phase 3 (Future)
- [ ] Advanced search filters
- [ ] Property detail pages
- [ ] Email notifications
- [ ] Analytics integration
- [ ] SEO optimization

## 🚀 Deployment

### Recommended Hosting
- **Vercel**: Automatic deployments with GitHub integration
- **Netlify**: Easy static site hosting with form handling
- **Firebase Hosting**: Integrated with Firebase services

### Environment Variables
Create a `.env` file for sensitive configuration:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding this website:
- Email: tina@tinaodell.com
- Phone: (503) 555-0123

## 📄 License

This project is proprietary software created for Tina Odell Real Estate.

---

**Built with ❤️ for Pacific Northwest Real Estate**
