import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Plus } from "lucide-react";

interface Agendamento {
  id: number;
  cuidador: string;
  idoso: string;
  data: string;
  horario: string;
  status: "confirmado" | "pendente" | "cancelado";
}

const Agendamentos = () => {
  const [agendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      cuidador: "Maria Silva",
      idoso: "José Santos",
      data: "2024-01-15",
      horario: "08:00 - 12:00",
      status: "confirmado",
    },
    {
      id: 2,
      cuidador: "Ana Costa",
      idoso: "José Santos",
      data: "2024-01-16",
      horario: "14:00 - 18:00",
      status: "pendente",
    },
    {
      id: 3,
      cuidador: "Maria Silva",
      idoso: "Ana Maria",
      data: "2024-01-14",
      horario: "09:00 - 17:00",
      status: "cancelado",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "pendente":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "cancelado":
        return "bg-red-500/10 text-red-600 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmado":
        return "Confirmado";
      case "pendente":
        return "Pendente";
      case "cancelado":
        return "Cancelado";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/familia">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Agendamentos</h1>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Novo
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {agendamentos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Nenhum agendamento encontrado</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Agendamento
                </Button>
              </CardContent>
            </Card>
          ) : (
            agendamentos.map((agendamento) => (
              <Card key={agendamento.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{agendamento.cuidador}</CardTitle>
                    <Badge className={getStatusColor(agendamento.status)}>
                      {getStatusLabel(agendamento.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Idoso: {agendamento.idoso}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(agendamento.data).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{agendamento.horario}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Agendamentos;
