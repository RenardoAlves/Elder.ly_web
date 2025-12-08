import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  UserCircle,
  Moon,
  HelpCircle,
  CreditCard,
  Heart,
  Calendar, 
  Clock, 
  DollarSign, 
  Star, 
  Bell, 
  User, 
  CheckCircle, 
  XCircle,
  MapPin,
  Phone,
  Mail,
  LogOut,
  Settings,
  TrendingUp,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardCuidador = () => {
  const { toast } = useToast();
  const [solicitacoes, setSolicitacoes] = useState([
    {
      id: 1,
      familia: "Família Santos",
      idoso: "Maria Santos",
      data: "15/12/2024",
      horario: "08:00 - 18:00",
      valor: 250,
      local: "Copacabana, RJ",
      status: "pendente"
    },
    {
      id: 2,
      familia: "Família Oliveira",
      idoso: "José Oliveira",
      data: "16/12/2024",
      horario: "14:00 - 20:00",
      valor: 180,
      local: "Ipanema, RJ",
      status: "pendente"
    }
  ]);

  const proximosAtendimentos = [
    {
      id: 1,
      familia: "Família Costa",
      idoso: "Ana Costa",
      data: "12/12/2024",
      horario: "09:00 - 17:00",
      local: "Leblon, RJ"
    },
    {
      id: 2,
      familia: "Família Lima",
      idoso: "Pedro Lima",
      data: "13/12/2024",
      horario: "08:00 - 14:00",
      local: "Botafogo, RJ"
    }
  ];

  const avaliacoes = [
    { id: 1, familia: "Família Costa", nota: 5, comentario: "Excelente profissional, muito atenciosa!", data: "10/12/2024" },
    { id: 2, familia: "Família Silva", nota: 5, comentario: "Cuidou muito bem da minha mãe.", data: "05/12/2024" },
    { id: 3, familia: "Família Pereira", nota: 4, comentario: "Muito pontual e dedicada.", data: "01/12/2024" }
  ];

  const handleAceitarSolicitacao = (id: number) => {
    setSolicitacoes(prev => prev.filter(s => s.id !== id));
    toast({
      title: "Solicitação aceita!",
      description: "O serviço foi adicionado à sua agenda.",
    });
  };

  const handleRecusarSolicitacao = (id: number) => {
    setSolicitacoes(prev => prev.filter(s => s.id !== id));
    toast({
      title: "Solicitação recusada",
      description: "A família será notificada.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-background">
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
              {/* Dropdown Notificações */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" title="Notificações" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-medium">Nova proposta de cuidador</span>
                    <span className="text-xs text-muted-foreground">Maria Silva respondeu sua solicitação</span>
                    <span className="text-xs text-muted-foreground">Há 5 minutos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-medium">Agendamento confirmado</span>
                    <span className="text-xs text-muted-foreground">Plantão de amanhã foi confirmado</span>
                    <span className="text-xs text-muted-foreground">Há 1 hora</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-medium">Lembrete de medicação</span>
                    <span className="text-xs text-muted-foreground">José Santos - Donepezila às 20h</span>
                    <span className="text-xs text-muted-foreground">Há 2 horas</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center text-primary cursor-pointer">
                    Ver todas as notificações
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dropdown Configurações */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" title="Configurações">
                    <Settings className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to="/perfil-cuidador/editar" relative="route">
                  <DropdownMenuItem className="cursor-pointer gap-2">
                    <UserCircle className="h-4 w-4" />
                    Editar perfil
                  </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="cursor-pointer gap-2">
                    <CreditCard className="h-4 w-4" />
                    Faturamento
                  </DropdownMenuItem>
                  <Link to="/notificacoes-cuidador" relative="route">
                  <DropdownMenuItem className="cursor-pointer gap-2">
                    <Bell className="h-4 w-4" />
                    Preferências de Notificação
                  </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="cursor-pointer gap-2">
                    <Moon className="h-4 w-4" />
                    Tema Escuro
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Ajuda e Suporte
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/login">
                <Button variant="ghost" size="icon" title="Sair">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Summary */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/10 to-trust/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200" />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-display font-bold text-foreground">Roberta Carvalho</h1>
                    <Badge className="bg-success text-success-foreground">Verificada</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">Técnica em Enfermagem • 8 anos de experiência</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Rio de Janeiro, RJ
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warm" /> 4.9 (47 avaliações)
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> 52 atendimentos
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Perfil completo</p>
                  <Progress value={85} className="w-32 h-2 mb-2 ml-auto" />
                  <div className="flex gap-2">
                    <Link to="/perfil-cuidador/ver">
                      <Button variant="outline" size="sm">Ver Perfil</Button>
                    </Link>
                    <Link to="/perfil-cuidador/editar">
                      <Button variant="outline" size="sm">Editar Perfil</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold text-foreground">R$ 3.450</p>
              <p className="text-sm text-muted-foreground">Ganhos do mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Atendimentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-warm" />
              <p className="text-2xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-info" />
              <p className="text-2xl font-bold text-foreground">+15%</p>
              <p className="text-sm text-muted-foreground">vs. mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="solicitacoes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="solicitacoes" className="relative">
              Solicitações
              {solicitacoes.length > 0 && (
                <span className="ml-2 w-5 h-5 bg-warm text-warm-foreground text-xs rounded-full inline-flex items-center justify-center">
                  {solicitacoes.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          </TabsList>

          {/* Solicitações Tab */}
          <TabsContent value="solicitacoes" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Solicitações Pendentes</h2>
            {solicitacoes.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-success" />
                  <p className="text-muted-foreground">Nenhuma solicitação pendente</p>
                </CardContent>
              </Card>
            ) : (
              solicitacoes.map((solicitacao) => (
                <Card key={solicitacao.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{solicitacao.familia}</h3>
                          <Badge variant="outline">Nova</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Cuidar de: <span className="font-medium text-foreground">{solicitacao.idoso}</span>
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {solicitacao.data}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {solicitacao.horario}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {solicitacao.local}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <p className="text-xl font-bold text-success">R$ {solicitacao.valor}</p>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleRecusarSolicitacao(solicitacao.id)}
                            className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <XCircle className="h-4 w-4 mr-1" /> Recusar
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleAceitarSolicitacao(solicitacao.id)}
                            className="bg-success hover:bg-success/90 text-success-foreground"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" /> Aceitar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Agenda Tab */}
          <TabsContent value="agenda" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Próximos Atendimentos</h2>
            {proximosAtendimentos.map((atendimento) => (
              <Card key={atendimento.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{atendimento.familia}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Paciente: {atendimento.idoso}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {atendimento.data}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {atendimento.horario}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {atendimento.local}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-1" /> Contato
                      </Button>
                      <Button variant="outline" size="sm">
                        <MapPin className="h-4 w-4 mr-1" /> Ver Rota
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Avaliações Tab */}
          <TabsContent value="avaliacoes" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Minhas Avaliações</h2>
            {avaliacoes.map((avaliacao) => (
              <Card key={avaliacao.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{avaliacao.familia}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < avaliacao.nota ? 'text-warm fill-warm' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">"{avaliacao.comentario}"</p>
                  <p className="text-xs text-muted-foreground">{avaliacao.data}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Financeiro Tab */}
          <TabsContent value="financeiro" className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Relatório Financeiro</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resumo do Mês</CardTitle>
                  <CardDescription>Dezembro 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total bruto</span>
                    <span className="font-semibold text-foreground">R$ 3.650,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxa da plataforma (5%)</span>
                    <span className="font-semibold text-destructive">- R$ 182,50</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-semibold text-foreground">Total líquido</span>
                    <span className="font-bold text-success text-xl">R$ 3.467,50</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Histórico de Pagamentos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Família Costa</p>
                      <p className="text-xs text-muted-foreground">10/12/2024</p>
                    </div>
                    <span className="text-success font-semibold">+ R$ 280,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Família Silva</p>
                      <p className="text-xs text-muted-foreground">08/12/2024</p>
                    </div>
                    <span className="text-success font-semibold">+ R$ 350,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Família Pereira</p>
                      <p className="text-xs text-muted-foreground">05/12/2024</p>
                    </div>
                    <span className="text-success font-semibold">+ R$ 200,00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardCuidador;
