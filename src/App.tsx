import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

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
import PerfilFamilia from "./pages/PerfilFamilia";
import Pagamentos from "./pages/Pagamentos";
import NotificacoesFamilia from "./pages/ConfNotificacaoFamilia";
import Agendamentos from "./pages/Agendamentos";
import NovoIdoso from "./pages/NovoIdoso";
import EditarIdoso from "./pages/EditarIdoso";
import EsqueciSenha from "./pages/EsqueciSenha";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/dashboard/familia" element={<DashboardFamilia />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/perfil-familia" element={<PerfilFamilia />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/notificacoes-familia" element={<NotificacoesFamilia />} />
          <Route path="/dashboard/cuidador" element={<DashboardCuidador />} />
          <Route path="/buscar-cuidador" element={<BuscarCuidador />} />
          <Route path="/perfil-cuidador/editar" element={<PerfilCuidadorEditar />} />
          <Route path="/perfil-cuidador/ver" element={<PerfilCuidadorVisualizar />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/meus-idosos" element={<MeusIdosos />} />
          <Route path="/editar-idoso" element={<EditarIdoso />} />
          <Route path="/novo-idoso" element={<NovoIdoso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;