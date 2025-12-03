import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Search,
  Calendar,
  DollarSign
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-display font-bold text-primary">
                Elder.ly+
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#para-familias" className="text-sm font-medium hover:text-primary transition-colors">
                Para Famílias
              </a>
              <a href="#para-cuidadores" className="text-sm font-medium hover:text-primary transition-colors">
                Para Cuidadores
              </a>
              <Link to="/login">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Link to="/cadastro">
                <Button>Começar Agora</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-warm/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Cuidado com{" "}
              <span className="text-primary">Confiança</span> e{" "}
              <span className="text-warm">Carinho</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conectamos famílias com cuidadores qualificados para proporcionar o melhor cuidado aos seus entes queridos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro?tipo=familia">
                <Button size="lg" className="w-full sm:w-auto">
                  Buscar Cuidador
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cadastro?tipo=cuidador">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Oferecer Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e seguro para encontrar o cuidador ideal
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                title: "Busque",
                description: "Encontre cuidadores qualificados na sua região"
              },
              {
                icon: Users,
                title: "Conheça",
                description: "Veja perfis completos, avaliações e certificações"
              },
              {
                icon: Calendar,
                title: "Agende",
                description: "Solicite serviços com datas e horários flexíveis"
              },
              {
                icon: DollarSign,
                title: "Pague Seguro",
                description: "Pagamento protegido pela plataforma"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Families */}
      <section id="para-familias" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Para Famílias
              </h2>
              <p className="text-muted-foreground mb-8">
                Encontre o cuidador perfeito para seu ente querido com total segurança e transparência
              </p>
              <div className="space-y-4">
                {[
                  "Busca com filtros detalhados por especialidade",
                  "Perfis verificados com certificações",
                  "Sistema de avaliações de outros usuários",
                  "Agendamento flexível e gestão completa",
                  "Pagamento seguro pela plataforma",
                  "Histórico completo de atendimentos"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/cadastro?tipo=familia" className="inline-block mt-8">
                <Button size="lg">
                  Começar Como Família
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-warm/10 rounded-3xl p-8 flex items-center justify-center">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-2xl shadow-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10" />
                    <div>
                      <div className="font-semibold">Maria Silva</div>
                      <div className="text-sm text-muted-foreground">5 anos de experiência</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                    ))}
                    <span className="text-sm ml-2">4.9 (127 avaliações)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Especialista em Alzheimer e mobilidade reduzida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Caregivers */}
      <section id="para-cuidadores" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 bg-gradient-to-br from-warm/10 to-primary/10 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-2xl shadow-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">R$ 3.450</div>
                      <div className="text-sm text-muted-foreground">Ganhos este mês</div>
                    </div>
                    <Clock className="h-8 w-8 text-warm" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>12 serviços realizados</span>
                      <span className="text-success">+15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avaliação média</span>
                      <span className="font-semibold">4.8 ⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Para Cuidadores
              </h2>
              <p className="text-muted-foreground mb-8">
                Ofereça seus serviços profissionais e construa uma carreira sólida cuidando de quem mais precisa
              </p>
              <div className="space-y-4">
                {[
                  "Crie seu perfil profissional completo",
                  "Defina sua disponibilidade e valores",
                  "Receba solicitações de famílias verificadas",
                  "Gerencie seus agendamentos facilmente",
                  "Receba pagamentos com segurança",
                  "Construa sua reputação com avaliações"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/cadastro?tipo=cuidador" className="inline-block mt-8">
                <Button size="lg" variant="secondary">
                  Começar Como Cuidador
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Segurança em Primeiro Lugar
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Todos os cuidadores passam por verificação de documentos e certificações. 
              Pagamentos são protegidos e liberados apenas após a prestação do serviço.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Verificação Completa",
                  description: "Documentos e certificados validados"
                },
                {
                  icon: Star,
                  title: "Avaliações Reais",
                  description: "Sistema transparente de reviews"
                },
                {
                  icon: Heart,
                  title: "Suporte Dedicado",
                  description: "Equipe pronta para ajudar"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-card">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de famílias e cuidadores que confiam no Elder.ly+
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro?tipo=familia">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Buscar Cuidador
              </Button>
            </Link>
            <Link to="/cadastro?tipo=cuidador">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Oferecer Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                <span className="text-xl font-display font-bold text-primary">
                  Elder.ly+
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Conectando cuidado e confiança
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Para Famílias</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Para Cuidadores</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Elder.ly+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
