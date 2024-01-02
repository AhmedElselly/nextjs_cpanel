import Menubar from "@/components/Menubar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Menubar />
      <Component {...pageProps} />
    </Fragment>
  );
}
