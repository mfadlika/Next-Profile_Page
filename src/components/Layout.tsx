import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps): ReactElement {
  return (
    <React.Fragment>
      <Header></Header>
      <main id="main">{props.children}</main>
      <Footer></Footer>
    </React.Fragment>
  );
}
