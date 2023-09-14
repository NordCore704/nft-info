import "@/styles/globals.css";
import { SharedLayout } from "@/exports";
import ApiContext from "@/context/ApiHeaderContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApiContext>
      <SharedLayout>
      <Component {...pageProps} />
      </SharedLayout>
      </ApiContext>

    </>
  );
}
