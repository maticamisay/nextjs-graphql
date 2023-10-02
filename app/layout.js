import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Container from "@/components/ui/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "TODOS APP",
  description: "Aplicación de todos, tips y más",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gray-100 font-sans leading-normal tracking-normal"}>
        <AuthProvider>
          <Navbar />
          <ToastContainer />
          <Container>{children}</Container>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
