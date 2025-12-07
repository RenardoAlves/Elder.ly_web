import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  FileText,
  Star,
  Edit,
  CheckCircle
} from "lucide-react";

const diasSemana = [
  { id: "seg", label: "Seg" },
  { id: "ter", label: "Ter" },
  { id: "qua", label: "Qua" },
  { id: "qui", label: "Qui" },
  { id: "sex", label: "Sex" },
  { id: "sab", label: "Sáb" },
  { id: "dom", label: "Dom" }
];

const PerfilCuidadorVisualizar = () => {
  // Mock data - mesmas informações do perfil de edição
  const perfil = {
    nome: "Roberta Carvalho",
    email: "roberta@email.com",
    telefone: "(21) 99999-9999",
    cidade: "Rio de Janeiro",
    bairro: "Copacabana",
    sobre: "Técnica em Enfermagem com 8 anos de experiência em cuidados com idosos. Especializada em pacientes com Alzheimer e mobilidade reduzida. Dedicada e atenciosa.",
    experiencia: "8",
    formacao: "Técnica em Enfermagem - COREN/RJ 123456",
    valorHora: "35",
    valorDiaria: "280",
    avaliacao: 4.9,
    totalAvaliacoes: 47,
    atendimentos: 52
  };

  const especialidades = [
    "Alzheimer", "Mobilidade Reduzida", "Medicação", "Higiene Pessoal"
  ];

  const disponibilidade = ["seg", "ter", "qua", "qui", "sex"];
  const horarioInicio = "08:00";
  const horarioFim = "18:00";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/cuidador">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="font-display font-bold text-xl text-foreground">Meu Perfil</h1>
          </div>
          
          <Link to="/perfil-cuidador/editar">
            <Button className="bg-primary hover:bg-primary/90">
              <Edit className="h-4 w-4 mr-2" /> Editar Perfil
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Foto e Info Principal */}
          <Card className="bg-gradient-to-r from-primary/10 to-trust/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                  <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200" />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                    <h2 className="text-2xl font-display font-bold text-foreground">{perfil.nome}</h2>
                    <Badge className="bg-success text-success-foreground">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verificada
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{perfil.formacao}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {perfil.bairro}, {perfil.cidade}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warm fill-warm" /> {perfil.avaliacao} ({perfil.totalAvaliacoes} avaliações)
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-success" /> {perfil.atendimentos} atendimentos
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Telefone</p>
                    <p className="font-medium text-foreground">{perfil.telefone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">E-mail</p>
                    <p className="font-medium text-foreground">{perfil.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sobre */}
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{perfil.sobre}</p>
            </CardContent>
          </Card>

          {/* Formação e Experiência */}
          <Card>
            <CardHeader>
              <CardTitle>Formação e Experiência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Anos de Experiência</p>
                    <p className="font-medium text-foreground">{perfil.experiencia} anos</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Formação</p>
                    <p className="font-medium text-foreground">{perfil.formacao}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Especialidades */}
          <Card>
            <CardHeader>
              <CardTitle>Especialidades</CardTitle>
              <CardDescription>Áreas de atuação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {especialidades.map((esp) => (
                  <Badge key={esp} className="bg-primary/10 text-primary border-primary/20">
                    {esp}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disponibilidade */}
          <Card>
            <CardHeader>
              <CardTitle>Disponibilidade</CardTitle>
              <CardDescription>Dias e horários de trabalho</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {diasSemana.map((dia) => (
                  <Badge
                    key={dia.id}
                    variant={disponibilidade.includes(dia.id) ? "default" : "outline"}
                    className={disponibilidade.includes(dia.id) 
                      ? "bg-success text-success-foreground" 
                      : "text-muted-foreground"
                    }
                  >
                    {dia.label}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Horário: {horarioInicio} às {horarioFim}</span>
              </div>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card>
            <CardHeader>
              <CardTitle>Valores dos Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                  <DollarSign className="h-6 w-6 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Valor por Hora</p>
                    <p className="text-2xl font-bold text-success">R$ {perfil.valorHora}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                  <DollarSign className="h-6 w-6 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Valor da Diária</p>
                    <p className="text-2xl font-bold text-success">R$ {perfil.valorDiaria}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botão de Editar */}
          <div className="flex justify-center pb-8">
            <Link to="/perfil-cuidador/editar">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Edit className="h-4 w-4 mr-2" /> Editar Perfil
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfilCuidadorVisualizar;
