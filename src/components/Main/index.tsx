import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  const username = localStorage.getItem("username");
  const servercount = 69;
  return (
    <main className="flex min-h-screen w-full font-helvetica">
      <section>
        {session && session.user ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </section>
      <section>
        {session && session.user ? (
          <section className="flex flex-col w-full p-20">
            <h1 className="text-4xl font-bold">Welcome! {username}</h1>
            <p className="text-xl"> Server Count : {servercount} </p>
          </section>
        ) : (
          <p>You need to sign in to access the books</p>
        )}
      </section>
    </main>
  );
}
