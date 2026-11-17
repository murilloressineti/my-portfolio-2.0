import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { Footer, Header } from "./components/layout";
import RouteMetadata from "./components/utils/RouteMetadata";
import ScrollToTop from "./components/utils/ScrollToTop";
import {
  AboutMe,
  Contact,
  Home,
  NotFound,
  ProjectDetails,
  Projects,
} from "./pages";

// O layout compartilhado permanece montado quando Routes troca apenas o conteúdo da página.
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMetadata />
      <Toaster position="bottom-center" richColors />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:id" element={<ProjectDetails />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
