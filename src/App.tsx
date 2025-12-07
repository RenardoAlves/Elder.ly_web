import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import DashboardFamilia from "./pages/DashboardFamilia";
import DashboardCuidador from "./pages/DashboardCuidador";
import BuscarCuidador from "./pages/BuscarCuidador";
import PerfilCuidadorEditar from "./pages/PerfilCuidadorEditar";
import Historico from "./pages/Historico";
import MeusIdosos from "./pages/MeusIdosos";
import NotFound from "./pages/NotFound";
import PerfilCuidadorVisualizar from "./pages/PerfilCuidadorVisualizar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/familia" element={<DashboardFamilia />} />
          <Route path="/dashboard/cuidador" element={<DashboardCuidador />} />
          <Route path="/buscar-cuidador" element={<BuscarCuidador />} />
          <Route path="/perfil-cuidador/editar" element={<PerfilCuidadorEditar />} />
          <Route path="/perfil-cuidador/ver" element={<PerfilCuidadorVisualizar />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/meus-idosos" element={<MeusIdosos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
