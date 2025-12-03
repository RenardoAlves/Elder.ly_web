import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Camera, 
  Save, 
  Plus, 
  X,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const especialidadesDisponiveis = [
  "Alzheimer", "Parkinson", "Diabetes", "Hipertensão", "Mobilidade Reduzida",
  "Demência", "AVC", "Cuidados Paliativos", "Fisioterapia", "Medicação",
  "Higiene Pessoal", "Alimentação", "Companhia", "Atividades Físicas"
];

const diasSemana = [
  { id: "seg", label: "Segunda" },
  { id: "ter", label: "Terça" },
  { id: "qua", label: "Quarta" },
  { id: "qui", label: "Quinta" },
  { id: "sex", label: "Sexta" },
  { id: "sab", label: "Sábado" },
  { id: "dom", label: "Domingo" }
];

const PerfilCuidadorEditar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [perfil, setPerfil] = useState({
    nome: "Roberta Carvalho",
    email: "roberta@email.com",
    telefone: "(21) 99999-9999",
    cidade: "Rio de Janeiro",
    bairro: "Copacabana",
    sobre: "Técnica em Enfermagem com 8 anos de experiência em cuidados com idosos. Especializada em pacientes com Alzheimer e mobilidade reduzida. Dedicada e atenciosa.",
    experiencia: "8",
    formacao: "Técnica em Enfermagem - COREN/RJ 123456",
    valorHora: "35",
    valorDiaria: "280"
  });

  const [especialidades, setEspecialidades] = useState<string[]>([
    "Alzheimer", "Mobilidade Reduzida", "Medicação", "Higiene Pessoal"
  ]);

  const [disponibilidade, setDisponibilidade] = useState<string[]>([
    "seg", "ter", "qua", "qui", "sex"
  ]);

  const [horarioInicio, setHorarioInicio] = useState("08:00");
  const [horarioFim, setHorarioFim] = useState("18:00");

  const handleInputChange = (field: string, value: string) => {
    setPerfil(prev => ({ ...prev, [field]: value }));
  };

  const toggleEspecialidade = (esp: string) => {
    setEspecialidades(prev => 
      prev.includes(esp) 
        ? prev.filter(e => e !== esp)
        : [...prev, esp]
    );
  };

  const toggleDia = (dia: string) => {
    setDisponibilidade(prev =>
      prev.includes(dia)
        ? prev.filter(d => d !== dia)
        : [...prev, dia]
    );
  };

  const handleSalvar = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
    navigate("/dashboard/cuidador");
  };

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
            <h1 className="font-display font-bold text-xl text-foreground">Editar Perfil</h1>
          </div>
          
          <Button onClick={handleSalvar} className="bg-primary hover:bg-primary/90">
            <Save className="h-4 w-4 mr-2" /> Salvar Alterações
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Foto de Perfil */}
          <Card>
            <CardHeader>
              <CardTitle>Foto de Perfil</CardTitle>
              <CardDescription>Uma boa foto aumenta suas chances de contratação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 bg-primary"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" /> Alterar Foto
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">JPG ou PNG. Máximo 5MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input 
                    id="nome" 
                    value={perfil.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="telefone" 
                      className="pl-10"
                      value={perfil.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email"
                    className="pl-10"
                    value={perfil.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="cidade"
                      className="pl-10"
                      value={perfil.cidade}
                      onChange={(e) => handleInputChange("cidade", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input 
                    id="bairro"
                    value={perfil.bairro}
                    onChange={(e) => handleInputChange("bairro", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sobre">Sobre Você</Label>
                <Textarea 
                  id="sobre"
                  rows={4}
                  placeholder="Descreva sua experiência, qualificações e o que te motiva..."
                  value={perfil.sobre}
                  onChange={(e) => handleInputChange("sobre", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">{perfil.sobre.length}/500 caracteres</p>
              </div>
            </CardContent>
          </Card>

          {/* Formação e Experiência */}
          <Card>
            <CardHeader>
              <CardTitle>Formação e Experiência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experiencia">Anos de Experiência</Label>
                  <Input 
                    id="experiencia"
                    type="number"
                    value={perfil.experiencia}
                    onChange={(e) => handleInputChange("experiencia", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="formacao">Formação / Registro Profissional</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="formacao"
                      className="pl-10"
                      placeholder="Ex: Técnico em Enfermagem - COREN/XX 123456"
                      value={perfil.formacao}
                      onChange={(e) => handleInputChange("formacao", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Especialidades */}
          <Card>
            <CardHeader>
              <CardTitle>Especialidades</CardTitle>
              <CardDescription>Selecione suas áreas de atuação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {especialidadesDisponiveis.map((esp) => (
                  <Badge
                    key={esp}
                    variant={especialidades.includes(esp) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      especialidades.includes(esp) 
                        ? "bg-primary hover:bg-primary/90" 
                        : "hover:bg-muted"
                    }`}
                    onClick={() => toggleEspecialidade(esp)}
                  >
                    {especialidades.includes(esp) && <X className="h-3 w-3 mr-1" />}
                    {esp}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                {especialidades.length} especialidade(s) selecionada(s)
              </p>
            </CardContent>
          </Card>

          {/* Disponibilidade */}
          <Card>
            <CardHeader>
              <CardTitle>Disponibilidade</CardTitle>
              <CardDescription>Configure seus dias e horários de trabalho</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Dias Disponíveis</Label>
                <div className="flex flex-wrap gap-2">
                  {diasSemana.map((dia) => (
                    <Button
                      key={dia.id}
                      type="button"
                      variant={disponibilidade.includes(dia.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleDia(dia.id)}
                      className={disponibilidade.includes(dia.id) ? "bg-primary" : ""}
                    >
                      {dia.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="horarioInicio">Horário de Início</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="horarioInicio"
                      type="time"
                      className="pl-10"
                      value={horarioInicio}
                      onChange={(e) => setHorarioInicio(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="horarioFim">Horário de Término</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="horarioFim"
                      type="time"
                      className="pl-10"
                      value={horarioFim}
                      onChange={(e) => setHorarioFim(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card>
            <CardHeader>
              <CardTitle>Valores dos Serviços</CardTitle>
              <CardDescription>Defina seus preços por hora e diária</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valorHora">Valor por Hora (R$)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="valorHora"
                      type="number"
                      className="pl-10"
                      value={perfil.valorHora}
                      onChange={(e) => handleInputChange("valorHora", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valorDiaria">Valor da Diária (R$)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="valorDiaria"
                      type="number"
                      className="pl-10"
                      value={perfil.valorDiaria}
                      onChange={(e) => handleInputChange("valorDiaria", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                💡 Dica: Valores competitivos aumentam suas chances de contratação
              </p>
            </CardContent>
          </Card>

          {/* Botões de Ação */}
          <div className="flex justify-end gap-4 pb-8">
            <Link to="/dashboard/cuidador">
              <Button variant="outline">Cancelar</Button>
            </Link>
            <Button onClick={handleSalvar} className="bg-primary hover:bg-primary/90">
              <Save className="h-4 w-4 mr-2" /> Salvar Alterações
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfilCuidadorEditar;
