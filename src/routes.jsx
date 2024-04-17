import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavAppBar from './components/NavAppBar/index.jsx';

// load de tela com performance
const Sobre = lazy(() => import('./pages/sobre/index.jsx'));
const Certificados = lazy(() => import('./pages/certificados/index.jsx'));
const Experiencias = lazy(() => import('./pages/experiencias/index.jsx'));
const Home = lazy(() => import('./pages/home/index.jsx'));
const PaginaPadrao = lazy(() => import('./pages/paginaPadrao/index.jsx'));
const Formacao = lazy(() => import('./pages/formacao/index.jsx'));
const Tecnologias = lazy(() => import('./pages/tecnologias/index.jsx'));
const Publicacoes = lazy(() => import('./pages/publicacoes/index.jsx'));
const Idiomas = lazy(() => import('./pages/idiomas/index.jsx'));

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavAppBar />
        {/* load de tela com performance */}
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path='sobre' element={<Sobre />} />
              <Route path='experiencias' element={<Experiencias />} />
              <Route path='formacao-academica' element={<Formacao />} />
              <Route path='idiomas' element={<Idiomas />} />
              <Route path='certificados' element={<Certificados />} />
              <Route path='tecnologias' element={<Tecnologias />} />
              <Route path='publicacoes' element={<Publicacoes />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}