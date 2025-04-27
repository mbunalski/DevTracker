// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb"; // We will set this up too
import { verifyPassword } from "../../../lib/auth"; // Also setting this up

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with that email.');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Incorrect password.');
        }

        return { id: user._id, email: user.email };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // When the user first signs in
      if (user) {
        token.id = user.id; // Store user MongoDB _id inside the JWT
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the id from token to session.user
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});
