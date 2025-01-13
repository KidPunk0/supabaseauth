# Supabase Auth Module

A drop-in authentication module for React or Next.js using [Supabase](https://supabase.io/) with magic link sign-in. This package provides a complete authentication solution with pre-built components and styling.

## Features

- 🔐 Magic Link Authentication
- 🛡️ Protected Routes
- 🎨 Pre-styled Auth Page
- 🔄 Authentication Context & Hook
- 📱 Responsive Design
- 🎯 TypeScript Support
- 🛣️ React Router Integration

## Quick Start

1. Copy the `supabase-auth` folder into your React/Next.js project
2. Install the peer dependencies:

```bash
npm install @supabase/supabase-js react-router-dom
```

3. Create a `.env` file in your project root:

```env
# For React
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

# For Next.js
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up your app with the minimum configuration:

```jsx
import { AuthProvider } from './supabase-auth/src/components/AuthProvider';
import { AuthPage } from './supabase-auth/src/pages/AuthPage';
import { ProtectedRoute } from './supabase-auth/src/components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <YourDashboardComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
```

That's it! You now have a fully functional authentication system.

## Components

### AuthPage

A pre-styled authentication page that handles both sign-in and sign-up with magic links.

```jsx
import { AuthPage } from './supabase-auth/src/pages/AuthPage';

// Use in your routes
<Route path="/auth" element={<AuthPage />} />
```

### ProtectedRoute

Protect routes from unauthorized access:

```jsx
import { ProtectedRoute } from './supabase-auth/src/components/ProtectedRoute';

<Route
  path="/private"
  element={
    <ProtectedRoute>
      <YourPrivateComponent />
    </ProtectedRoute>
  }
/>
```

### useAuth Hook

Access authentication state and functions anywhere in your app:

```jsx
import { useAuth } from './supabase-auth/src/hooks/useAuth';

function Profile() {
  const { user, signOut } = useAuth();

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

## File Structure

```
supabase-auth/
├─ src/
│  ├─ config/
│  │  └─ supabaseClient.js    # Supabase client configuration
│  ├─ context/
│  │  └─ AuthContext.jsx      # Authentication context
│  ├─ hooks/
│  │  └─ useAuth.js          # Authentication hook
│  ├─ components/
│  │  ├─ AuthProvider.jsx    # Auth context provider
│  │  └─ ProtectedRoute.jsx  # Protected route wrapper
│  ├─ pages/
│  │  └─ AuthPage.jsx        # Pre-styled auth page
│  └─ utils/
│     └─ authRedirect.js     # Auth redirect utilities
├─ example/
│  └─ App.jsx                # Example implementation
├─ package.json
└─ README.md
```

## Customization

### Styling

The `AuthPage` component uses inline styles that you can override by passing a `styles` prop:

```jsx
<AuthPage
  styles={{
    container: {
      backgroundColor: '#your-color',
    },
    button: {
      backgroundColor: '#your-color',
    },
  }}
/>
```

### Redirect URLs

Customize where users are redirected after authentication:

```jsx
<AuthPage redirectUrl="/custom-dashboard" />
```

## Example Implementation

Check out the `example/App.jsx` file for a complete implementation example.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this in your projects!
