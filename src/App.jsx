import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SiteFooter from "./components/SiteFooter";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import NewsDetailPage from "./pages/NewsDetailPage";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ProgramsPage from "./pages/ProgramsPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";
import BookingPage from "./pages/BookingPage";

import ChatWidget from "./components/ChatWidget";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import NotFoundPage from "./pages/NotFoundPage";
import FAQPage from "./pages/FAQPage";
import InstructorDetailPage from "./pages/InstructorDetailPage"; 
import { useAuth } from "./context/AuthContext";

function AdminExperienceGuard({ children }) {
  const { isAdmin } = useAuth();
  const { pathname } = useLocation();
  return isAdmin && pathname !== "/admin" ? <Navigate to="/admin" replace /> : children;
}


function AppContent() {
  const { pathname } = useLocation();

  return (
    <>
      <NavigationBar />
      <ScrollToTop />
      <AdminExperienceGuard>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route
            path="/programs/:slug"
            element={<ProgramDetailPage />}
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/instructors/:slug" element={<InstructorDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AdminExperienceGuard>
      {pathname !== "/admin" && <SiteFooter />}
      <ChatWidget />
      <BackToTopButton />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}