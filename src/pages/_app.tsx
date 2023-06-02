import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Navbar from '~/components/Navbar'

import "~/styles/globals.css";
import "swiper/css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="bg-body text-white overflow-x-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
