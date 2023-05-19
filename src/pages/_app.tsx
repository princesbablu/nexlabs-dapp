import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Navbar from '~/components/Navbar'

import "~/styles/globals.css";
import "swiper/css"
import Footer from "~/components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="bg-body text-white">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
