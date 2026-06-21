import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import BackToTop from "./BackToTop";
import ThemeSettings from "./ThemeSettings";
import { AnimatedBackground } from "./ui/animated-background";

interface LayoutProps {
  onContactClick: () => void;
  showContactForm: boolean;
  onCloseContact: () => void;
}

const Layout = ({ onContactClick, showContactForm, onCloseContact }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />

      <div className="p-5 md:px-[15%]">
        <Navbar />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet context={{ onContactClick }} />
        </motion.div>
      </AnimatePresence>

      <Footer onContactClick={onContactClick} />
      <ThemeSettings />
      <BackToTop />

      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ContactForm onClose={onCloseContact} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
