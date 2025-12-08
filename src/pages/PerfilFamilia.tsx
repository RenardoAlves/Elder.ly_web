import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Shield,
  CreditCard,
  Bell,
  HelpCircle,
  ChevronRight,
  LogOut
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PerfilUsuario = () => {
  const usuario = {
    nome: "Maria Fernandes",
    email: "maria.fernandes@email.com",
    telefone: "(11) 99999-8888",
    cpf: "***.***.***-00",
    dataNascimento: "15/03/1985",
    endereco: "São Paulo, SP",
    fotoPerfil: "",
    membroDesde: "Janeiro 2024"
  };

  const menuItems = [
    { icon: CreditCard, label: "Formas de pagamento", link: "#" },
    { icon: MapPin, label: "Endereços salvos", link: "#" },
    { icon: Bell, label: "Notificações", link: "#" },
    { icon: Shield, label: "Privacidade e segurança", link: "#" },
    { icon: HelpCircle, label: "Ajuda", link: "#" },
  ];

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
            <h1 className="text-xl font-display font-semibold">Meu Perfil</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Foto e Nome */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
              <AvatarImage src={usuario.fotoPerfil} />
              <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                {usuario.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <Button 
              size="icon" 
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <h2 className="text-xl font-display font-bold">{usuario.nome}</h2>
          <p className="text-sm text-muted-foreground">Membro desde {usuario.membroDesde}</p>
        </div>

        {/* Informações Pessoais */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Informações Pessoais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">Nome completo</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span>{usuario.nome}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">E-mail</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{usuario.email}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">Telefone</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{usuario.telefone}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">CPF</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span>{usuario.cpf}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">Data de nascimento</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{usuario.dataNascimento}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground text-sm">Endereço</Label>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{usuario.endereco}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-2">
              Editar informações
            </Button>
          </CardContent>
        </Card>

        {/* Menu de Opções */}
        <Card className="mb-6">
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link to={item.link}>
                  <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
                {index < menuItems.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sair */}
        <Link to="/login">
          <Button variant="outline" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="h-4 w-4 mr-2" />
            Sair da conta
          </Button>
        </Link>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Versão 1.0.0
        </p>
      </div>
    </div>
  );
};

export default PerfilUsuario;
