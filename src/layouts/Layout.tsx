import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Partials
import { Header, Footer } from "@/components/shared";
import { Meta } from "@/components";
import LocaleProvider from "@/providers/locale-provider";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <LocaleProvider>
      <Meta>
        <title>Digitc Home</title>
        <meta name="description" content="Digitc Home" />
      </Meta>

      <div aria-label="layout" className="w-full bg-slate-50">
        <Header />
        <div className="">
          <Outlet />
        </div>

        <Footer />
      </div>
    </LocaleProvider>
  );
};

export default Layout;
