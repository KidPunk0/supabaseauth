# Supabase Auth Module

A reusable authentication module for React or Next.js using [Supabase](https://supabase.io/) with magic link sign-in.

## Features

- Magic Link Authentication
- Protected Routes
- Authentication Context & Hook
- TypeScript Support
- React Router Integration

## Installation

1. Copy the `supabase-auth` folder into your React/Next.js project
2. Install the required dependencies:

```bash
npm install @supabase/supabase-js react-router-dom
```

## Configuration

1. Create a `.env` file in your project root (or `.env.local` for Next.js):

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For Next.js, use:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Wrap your app with the AuthProvider:

```jsx
import { AuthProvider } from './supabase-auth/src/components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  );
}
```

## Usage

### Protected Routes

```jsx
import { ProtectedRoute } from './supabase-auth/src/components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```

### Magic Link Sign In

```jsx
import { MagicLinkForm } from './supabase-auth/src/components/MagicLinkForm';

function LoginPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <MagicLinkForm />
    </div>
  );
}
```

### Using the Auth Hook

```jsx
import { useAuth } from './supabase-auth/src/hooks/useAuth';

function Profile() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div>
      <p>Email: {user.email}</p>
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
│  │  ├─ ProtectedRoute.jsx  # Protected route wrapper
│  │  └─ MagicLinkForm.jsx   # Magic link sign-in form
├─ package.json
└─ README.md
```

## Contributing

Feel free to submit issues and enhancement requests!
# Supabase Auth Module

A reusable authentication module for React or Next.js using [Supabase](https://supabase.io/) with magic link sign-in.

## Features

- Magic Link Authentication
- Protected Routes
- Authentication Context & Hook
- TypeScript Support
- React Router Integration

## Installation

1. Copy the `supabase-auth` folder into your React/Next.js project
2. Install the required dependencies:

```bash
npm install @supabase/supabase-js react-router-dom
```

## Configuration

1. Create a `.env` file in your project root (or `.env.local` for Next.js):

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For Next.js, use:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Wrap your app with the AuthProvider:

```jsx
import { AuthProvider } from './supabase-auth/src/components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  );
}
```

## Usage

### Protected Routes

```jsx
import { ProtectedRoute } from './supabase-auth/src/components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```

### Magic Link Sign In

```jsx
import { MagicLinkForm } from './supabase-auth/src/components/MagicLinkForm';

function LoginPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <MagicLinkForm />
    </div>
  );
}
```

### Using the Auth Hook

```jsx
import { useAuth } from './supabase-auth/src/hooks/useAuth';

function Profile() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div>
      <p>Email: {user.email}</p>
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
│  │  ├─ ProtectedRoute.jsx  # Protected route wrapper
│  │  └─ MagicLinkForm.jsx   # Magic link sign-in form
├─ package.json
└─ README.md
```

## Contributing

Feel free to submit issues and enhancement requests!
