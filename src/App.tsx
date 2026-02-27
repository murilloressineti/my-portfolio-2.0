import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { Header, Footer } from "./components/layout";

// Pages
import {
  Home,
  Projects,
  ProjectDetails,
  AboutMe,
  Contact,
  NotFound,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:id" element={<ProjectDetails />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/contato" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
