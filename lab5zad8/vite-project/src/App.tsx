import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Article } from "./pages/article";
import { Dodaj } from "./pages/dodaj";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { Layout } from "./pages/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Layout/>}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:id" element={<Article />} />
          <Route path="/blog/dodaj" element={<Dodaj />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}