import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, Users, UserCheck } from "lucide-react";
import { toast } from "sonner";

type TipoUsuario = "familia" | "cuidador";

const Login = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!tipoUsuario) {
      toast.error("Selecione o tipo de usuário");
      return;
    }
    
    toast.success("Login realizado com sucesso!");
    
    if (tipoUsuario === "familia") {
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
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-88px)]">
        <div className="max-w-md w-full">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-display font-bold mb-2">
              Bem-vindo de Volta
            </h1>
            <p className="text-muted-foreground">
              Entre para acessar sua conta
            </p>
          </div>

          <Card className="shadow-elevated animate-in">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Selecione seu tipo de conta e digite suas credenciais
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Seleção de tipo de usuário */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setTipoUsuario("familia")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    tipoUsuario === "familia"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <Users className="h-8 w-8" />
                  <span className="font-medium">Família</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTipoUsuario("cuidador")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    tipoUsuario === "cuidador"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <UserCheck className="h-8 w-8" />
                  <span className="font-medium">Cuidador</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="senha">Senha</Label>
                    <a href="#" className="text-xs text-primary hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                Não tem uma conta?{" "}
                <Link to="/cadastro" className="text-primary hover:underline font-medium">
                  Cadastre-se agora
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
