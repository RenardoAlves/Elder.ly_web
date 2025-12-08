import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CreditCard, 
  Plus,
  Trash2,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Pagamentos = () => {
  const cartoes = [
    {
      id: "1",
      tipo: "Visa",
      final: "4532",
      validade: "12/26",
      principal: true
    },
    {
      id: "2",
      tipo: "Mastercard",
      final: "8891",
      validade: "08/25",
      principal: false
    }
  ];

  const historico = [
    {
      id: "1",
      descricao: "Plantão 12h - Maria Silva",
      data: "05/12/2024",
      valor: "R$ 420,00",
      status: "pago"
    },
    {
      id: "2",
      descricao: "Plantão 24h - João Oliveira",
      data: "01/12/2024",
      valor: "R$ 780,00",
      status: "pago"
    },
    {
      id: "3",
      descricao: "Plantão 8h - Carla Mendes",
      data: "28/11/2024",
      valor: "R$ 280,00",
      status: "pago"
    }
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
            <h1 className="text-xl font-display font-semibold">Pagamentos</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Formas de Pagamento */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Formas de Pagamento</CardTitle>
            <CardDescription>Gerencie seus cartões e métodos de pagamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {cartoes.map((cartao) => (
              <div 
                key={cartao.id} 
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-gradient-to-br from-primary to-primary/70 rounded flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{cartao.tipo} •••• {cartao.final}</span>
                      {cartao.principal && (
                        <Badge variant="secondary" className="text-xs">Principal</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Validade: {cartao.validade}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <Button variant="outline" className="w-full mt-2">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar novo cartão
            </Button>
          </CardContent>
        </Card>

        {/* PIX */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">PIX</CardTitle>
            <CardDescription>Pague de forma rápida e segura</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <span className="text-success font-bold text-lg">PIX</span>
                </div>
                <div>
                  <span className="font-medium">Pagamento via PIX</span>
                  <p className="text-sm text-muted-foreground">Aprovação instantânea</p>
                </div>
              </div>
              <Check className="h-5 w-5 text-success" />
            </div>
          </CardContent>
        </Card>

        {/* Histórico de Pagamentos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Histórico de Pagamentos</CardTitle>
            <CardDescription>Últimas transações realizadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {historico.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <span className="font-medium text-sm">{item.descricao}</span>
                  <p className="text-xs text-muted-foreground">{item.data}</p>
                </div>
                <div className="text-right">
                  <span className="font-semibold">{item.valor}</span>
                  <Badge variant="outline" className="ml-2 bg-success/10 text-success border-success/20 text-xs">
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}

            <Button variant="ghost" className="w-full text-primary">
              Ver histórico completo
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pagamentos;
