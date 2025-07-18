import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-yellow-100 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
