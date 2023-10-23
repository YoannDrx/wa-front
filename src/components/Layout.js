import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </Header>
    </div>
  );
};

export default Layout;
