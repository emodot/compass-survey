import Footer from "components/Footer";
import Header from "../components/Header";
// import LoginModal from "components/LoginModal";
// import MobileMenu from "components/MobileMenu";
// import ScheduleDemo from "components/ScheduleDemo";
import Spinner from "../components/Spinner";
import {
  // useState,
  createContext,
  Suspense,
  useContext,
  // useEffect,
} from "react";
import { Outlet } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function MainLayout() {
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen((prev) => !prev);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const toggleLoginModal = () => {
  //   setIsLoginModalOpen((prev) => !prev);
  // };
  // const closeLoginModal = () => {
  //   setIsLoginModalOpen(false);
  // };

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };
  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  // useEffect(() => {
  //   if (isModalOpen || isMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   if (isLoginModalOpen) {
  //     setIsMenuOpen(false);
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isModalOpen, isMenuOpen, isLoginModalOpen]);


  return (
    <ModalContext.Provider
      value={
        {
          // toggleModal,
          // closeModal,
          // toggleMenu,
          // closeMenu,
          // toggleLoginModal,
          // closeLoginModal,
        }
      }
    >
      <div className="relative bg-[#FFFFFF] h-[100vh]">
        <Suspense fallback={<Spinner />}>
          <Header />
          <Outlet />
          <Footer />
          {/* {isLoginModalOpen && <LoginModal />}
          {isModalOpen && <ScheduleDemo />}
          {isMenuOpen && <MobileMenu />} */}
        </Suspense>
      </div>
    </ModalContext.Provider>
  );
}
