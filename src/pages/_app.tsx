import { steps, styles } from "@/data/Steps";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TourProvider } from "@reactour/tour";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TourProvider steps={steps} styles={styles}>
      <Component {...pageProps} />;
    </TourProvider>
  );
}
