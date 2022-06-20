import "../styles/globals.css";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HMSRoomProvider>
      <Component {...pageProps} />
    </HMSRoomProvider>
  );
}
export default MyApp;
