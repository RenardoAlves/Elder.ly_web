import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, Plus, User, Calendar, Heart, Pill, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Idoso {
  id: number;
  nome: string;
  idade: number;
  parentesco: string;
  condicoes: string[];
  medicamentos: string;
  observacoes: string;
}

const MeusIdosos = () => {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [idosos, setIdosos] = useState<Idoso[]>([
    {
      id: 1,
      nome: "José Santos",
      idade: 78,
      parentesco: "Pai",
      condicoes: ["Diabetes", "Hipertensão"],
      medicamentos: "Metformina 500mg, Losartana 50mg",
      observacoes: "Precisa de auxílio para caminhar. Gosta de assistir TV.",
    },
    {
      id: 2,
      nome: "Maria Santos",
      idade: 75,
      parentesco: "Mãe",
      condicoes: ["Alzheimer inicial"],
      medicamentos: "Donepezila 5mg",
      observacoes: "Necessita supervisão constante. Adora jardinagem.",
    },
  ]);

  const [novoIdoso, setNovoIdoso] = useState({
    nome: "",
    idade: "",
    parentesco: "",
    condicoes: "",
    medicamentos: "",
    observacoes: "",
  });

  const handleAddIdoso = () => {
    if (!novoIdoso.nome || !novoIdoso.idade) {
      toast({
        title: "Erro",
        description: "Nome e idade são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    const novo: Idoso = {
      id: Date.now(),
      nome: novoIdoso.nome,
      idade: parseInt(novoIdoso.idade),
      parentesco: novoIdoso.parentesco,
      condicoes: novoIdoso.condicoes.split(",").map((c) => c.trim()).filter(Boolean),
      medicamentos: novoIdoso.medicamentos,
      observacoes: novoIdoso.observacoes,
    };

    setIdosos([...idosos, novo]);
    setNovoIdoso({
      nome: "",
      idade: "",
      parentesco: "",
      condicoes: "",
      medicamentos: "",
      observacoes: "",
    });
    setDialogOpen(false);
    toast({
      title: "Sucesso",
      description: "Idoso cadastrado com sucesso!",
    });
  };

  const handleRemoveIdoso = (id: number) => {
    setIdosos(idosos.filter((i) => i.id !== id));
    toast({
      title: "Removido",
      description: "Cadastro removido com sucesso",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/familia">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Meus Idosos</h1>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Cadastrar
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Cadastrar Idoso</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input
                    id="nome"
                    value={novoIdoso.nome}
                    onChange={(e) => setNovoIdoso({ ...novoIdoso, nome: e.target.value })}
                    placeholder="Nome do idoso"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="idade">Idade *</Label>
                    <Input
                      id="idade"
                      type="number"
                      value={novoIdoso.idade}
                      onChange={(e) => setNovoIdoso({ ...novoIdoso, idade: e.target.value })}
                      placeholder="Ex: 75"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentesco">Parentesco</Label>
                    <Input
                      id="parentesco"
                      value={novoIdoso.parentesco}
                      onChange={(e) => setNovoIdoso({ ...novoIdoso, parentesco: e.target.value })}
                      placeholder="Ex: Pai, Mãe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condicoes">Condições de saúde</Label>
                  <Input
                    id="condicoes"
                    value={novoIdoso.condicoes}
                    onChange={(e) => setNovoIdoso({ ...novoIdoso, condicoes: e.target.value })}
                    placeholder="Separe por vírgula: Diabetes, Hipertensão"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicamentos">Medicamentos</Label>
                  <Textarea
                    id="medicamentos"
                    value={novoIdoso.medicamentos}
                    onChange={(e) => setNovoIdoso({ ...novoIdoso, medicamentos: e.target.value })}
                    placeholder="Liste os medicamentos e dosagens"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    value={novoIdoso.observacoes}
                    onChange={(e) => setNovoIdoso({ ...novoIdoso, observacoes: e.target.value })}
                    placeholder="Informações adicionais importantes"
                  />
                </div>
                <Button onClick={handleAddIdoso} className="w-full">
                  Cadastrar Idoso
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        {idosos.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Nenhum idoso cadastrado ainda</p>
              <Button className="mt-4" onClick={() => setDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Cadastrar primeiro idoso
              </Button>
            </CardContent>
          </Card>
        ) : (
          idosos.map((idoso) => (
            <Card key={idoso.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{idoso.nome}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {idoso.idade} anos • {idoso.parentesco}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleRemoveIdoso(idoso.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {idoso.condicoes.length > 0 && (
                  <div className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      {idoso.condicoes.map((cond, i) => (
                        <Badge key={i} variant="secondary">
                          {cond}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {idoso.medicamentos && (
                  <div className="flex items-start gap-2">
                    <Pill className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="text-sm">{idoso.medicamentos}</span>
                  </div>
                )}
                {idoso.observacoes && (
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    {idoso.observacoes}
                  </p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </main>
    </div>
  );
};

export default MeusIdosos;
