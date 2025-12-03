import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Search, Calendar, Clock, User, Bell, Settings, LogOut, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DashboardFamilia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-warm/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-display font-bold text-primary">
                Elder.ly+
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" title="Notificações">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" title="Configurações">
                <Settings className="h-5 w-5" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" size="icon" title="Sair">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-display font-bold mb-2">
            Olá, Maria! 👋
          </h1>
          <p className="text-muted-foreground">
            Bem-vinda de volta ao seu painel
          </p>
        </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4 mb-8 animate-in">
        <Link to="/buscar-cuidador" className="block">
          <Card className="hover:shadow-elevated transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Buscar Cuidador</h3>
                <p className="text-xs text-muted-foreground">
                  Encontre profissionais qualificados
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/meus-idosos" className="block">
          <Card className="hover:shadow-elevated transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-warm/10 p-3 rounded-xl">
                  <User className="h-6 w-6 text-warm" />
                </div>
                <h3 className="font-semibold">Meus Idosos</h3>
                <p className="text-xs text-muted-foreground">
                  Gerenciar perfis cadastrados
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/agendamentos" className="block">
          <Card className="hover:shadow-elevated transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-success/10 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold">Agendamentos</h3>
                <p className="text-xs text-muted-foreground">
                  Ver serviços marcados
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/historico" className="block">
          <Card className="hover:shadow-elevated transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-info/10 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-info" />
                </div>
                <h3 className="font-semibold">Histórico</h3>
                <p className="text-xs text-muted-foreground">
                  Contrações anteriores
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Próximos Agendamentos */}
            <Card>
              <CardHeader>
                <CardTitle>Próximos Agendamentos</CardTitle>
                <CardDescription>Serviços confirmados para os próximos dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    cuidador: "Maria Silva",
                    data: "Amanhã, 15:00",
                    idoso: "José Santos",
                    tipo: "Plantão 12h",
                    status: "confirmado"
                  },
                  {
                    cuidador: "João Oliveira",
                    data: "Sábado, 08:00",
                    idoso: "Ana Maria",
                    tipo: "Plantão 24h",
                    status: "confirmado"
                  }
                ].map((agendamento, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{agendamento.cuidador}</h4>
                        <p className="text-sm text-muted-foreground">{agendamento.data}</p>
                        <p className="text-xs text-muted-foreground">
                          Para: {agendamento.idoso} • {agendamento.tipo}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      {agendamento.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Solicitações Pendentes */}
            <Card>
              <CardHeader>
                <CardTitle>Solicitações Pendentes</CardTitle>
                <CardDescription>Aguardando resposta dos cuidadores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhuma solicitação pendente no momento</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Perfis Cadastrados */}
            <Card>
              <CardHeader>
                <CardTitle>Perfis Cadastrados</CardTitle>
                <CardDescription>Idosos sob seus cuidados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { nome: "José Santos", idade: 78, necessidades: "Alzheimer" },
                  { nome: "Ana Maria", idade: 82, necessidades: "Mobilidade reduzida" }
                ].map((idoso, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{idoso.nome}</h4>
                        <p className="text-xs text-muted-foreground">{idoso.idade} anos</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{idoso.necessidades}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  + Adicionar Novo Perfil
                </Button>
              </CardContent>
            </Card>

            {/* Favoritos */}
            <Card>
              <CardHeader>
                <CardTitle>Cuidadores Favoritos</CardTitle>
                <CardDescription>Seus profissionais salvos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { nome: "Maria Silva", avaliacao: 4.9, especialidade: "Alzheimer" },
                  { nome: "João Oliveira", avaliacao: 4.8, especialidade: "Fisioterapia" }
                ].map((cuidador, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{cuidador.nome}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warm text-warm" />
                        <span className="text-xs font-medium">{cuidador.avaliacao}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{cuidador.especialidade}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle>Este Mês</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Serviços realizados</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Total gasto</span>
                    <span className="font-semibold">R$ 3.240</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Próximos agendamentos</span>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFamilia;
