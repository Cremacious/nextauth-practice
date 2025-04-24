import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (!credentials) return null;

        // Example user validation logic, REPLACE WITH PRISMA DB CHECK IF USER EXISTS
        const user = { id: '1', name: 'John Doe', email: credentials.email };
        if (
          credentials.email === 'test@example.com' &&
          credentials.password === 'password'
        ) {
          return user; // Return a valid user object
        }

        return null; // Return null if authentication fails
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
