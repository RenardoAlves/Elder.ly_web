import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Calendar, Clock, User, MapPin } from "lucide-react";

const Historico = () => {
  const historico = [
    {
      id: 1,
      cuidador: "Maria Silva",
      idoso: "José Santos",
      data: "15/11/2024",
      horario: "08:00 - 18:00",
      valor: "R$ 200,00",
      status: "concluido",
      avaliacao: 5,
    },
    {
      id: 2,
      cuidador: "Ana Costa",
      idoso: "José Santos",
      data: "10/11/2024",
      horario: "09:00 - 17:00",
      valor: "R$ 180,00",
      status: "concluido",
      avaliacao: 4,
    },
    {
      id: 3,
      cuidador: "Carlos Oliveira",
      idoso: "Maria Santos",
      data: "05/11/2024",
      horario: "07:00 - 19:00",
      valor: "R$ 250,00",
      status: "cancelado",
      avaliacao: null,
    },
    {
      id: 4,
      cuidador: "Fernanda Lima",
      idoso: "José Santos",
      data: "01/11/2024",
      horario: "08:00 - 16:00",
      valor: "R$ 160,00",
      status: "concluido",
      avaliacao: 5,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "concluido":
        return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Concluído</Badge>;
      case "cancelado":
        return <Badge variant="destructive">Cancelado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-muted-foreground text-sm">Sem avaliação</span>;
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/dashboard/familia">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Histórico de Contratações</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        {historico.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{item.cuidador}</CardTitle>
                {getStatusBadge(item.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Idoso: {item.idoso}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{item.data}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{item.horario}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <div>{renderStars(item.avaliacao)}</div>
                <span className="font-semibold text-primary">{item.valor}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default Historico;
