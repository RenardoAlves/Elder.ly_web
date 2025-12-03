import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, UserCheck, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Cadastro = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tipoParam = searchParams.get("tipo");
  const [tipo, setTipo] = useState<"familia" | "cuidador">(
    tipoParam === "cuidador" ? "cuidador" : "familia"
  );

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem");
      return;
    }

    if (formData.senha.length < 8) {
      toast.error("A senha deve ter no mínimo 8 caracteres");
      return;
    }

    // Simular cadastro
    toast.success("Cadastro realizado com sucesso!");
    
    // Redirecionar para dashboard apropriado
    if (tipo === "familia") {
      navigate("/dashboard/familia");
    } else {
      navigate("/dashboard/cuidador");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-warm/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-display font-bold text-primary">
                Elder.ly+
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-display font-bold mb-2">
              Criar Conta
            </h1>
            <p className="text-muted-foreground">
              Escolha seu perfil e comece agora
            </p>
          </div>

          <Card className="shadow-elevated animate-in">
            <CardHeader>
              <CardTitle className="text-center">
                {tipo === "familia" ? "Cadastro de Família" : "Cadastro de Cuidador"}
              </CardTitle>
              <CardDescription className="text-center">
                {tipo === "familia" 
                  ? "Encontre o cuidador ideal para seu ente querido"
                  : "Ofereça seus serviços profissionais de cuidado"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Seleção de tipo de usuário */}
              <div className="flex justify-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setTipo("familia")}
                  className={`flex flex-col items-center justify-center gap-2 w-24 h-20 rounded-lg border-2 transition-all ${
                    tipo === "familia"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <Users className="h-6 w-6" />
                  <span className="font-medium text-sm">Família</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTipo("cuidador")}
                  className={`flex flex-col items-center justify-center gap-2 w-24 h-20 rounded-lg border-2 transition-all ${
                    tipo === "cuidador"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <UserCheck className="h-6 w-6" />
                  <span className="font-medium text-sm">Cuidador</span>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                  <Input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type="password"
                    placeholder="Digite a senha novamente"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-xs text-muted-foreground">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <a href="#" className="text-primary hover:underline">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Criar Conta
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Fazer login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
