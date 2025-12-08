import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Bell,
  MessageSquare,
  Calendar,
  CreditCard,
  Star,
  Megaphone
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const ConfiguracoesNotificacao = () => {
  const [notificacoes, setNotificacoes] = useState({
    push: true,
    email: true,
    sms: false,
    novosAgendamentos: true,
    lembretes: true,
    mensagens: true,
    pagamentos: true,
    avaliacoes: true,
    promocoes: false
  });

  const handleToggle = (key: keyof typeof notificacoes) => {
    setNotificacoes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-warm/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/familia">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-display font-semibold">Notificações</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Canais de Notificação */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Canais de Notificação</CardTitle>
            <CardDescription>Escolha como deseja receber notificações</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Label className="font-medium">Notificações Push</Label>
                  <p className="text-sm text-muted-foreground">Receba alertas no celular</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.push} 
                onCheckedChange={() => handleToggle('push')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-info" />
                </div>
                <div>
                  <Label className="font-medium">E-mail</Label>
                  <p className="text-sm text-muted-foreground">Receba atualizações por e-mail</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.email} 
                onCheckedChange={() => handleToggle('email')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-success" />
                </div>
                <div>
                  <Label className="font-medium">SMS</Label>
                  <p className="text-sm text-muted-foreground">Receba mensagens de texto</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.sms} 
                onCheckedChange={() => handleToggle('sms')} 
              />
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Notificação */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tipos de Notificação</CardTitle>
            <CardDescription>Personalize o que deseja ser notificado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Agendamentos</Label>
                  <p className="text-sm text-muted-foreground">Confirmações e atualizações</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.novosAgendamentos} 
                onCheckedChange={() => handleToggle('novosAgendamentos')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Lembretes</Label>
                  <p className="text-sm text-muted-foreground">Lembretes de serviços agendados</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.lembretes} 
                onCheckedChange={() => handleToggle('lembretes')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Mensagens</Label>
                  <p className="text-sm text-muted-foreground">Novas mensagens de cuidadores</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.mensagens} 
                onCheckedChange={() => handleToggle('mensagens')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Pagamentos</Label>
                  <p className="text-sm text-muted-foreground">Confirmações e recibos</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.pagamentos} 
                onCheckedChange={() => handleToggle('pagamentos')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Avaliações</Label>
                  <p className="text-sm text-muted-foreground">Solicitações para avaliar serviços</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.avaliacoes} 
                onCheckedChange={() => handleToggle('avaliacoes')} 
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-medium">Promoções</Label>
                  <p className="text-sm text-muted-foreground">Ofertas e novidades</p>
                </div>
              </div>
              <Switch 
                checked={notificacoes.promocoes} 
                onCheckedChange={() => handleToggle('promocoes')} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfiguracoesNotificacao;
