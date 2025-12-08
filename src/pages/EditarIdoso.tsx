import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, Save, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EditarIdoso = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idosoId = searchParams.get("id");
  const { toast } = useToast();

  // Mock data - simulando dados do idoso
  const [formData, setFormData] = useState({
    nome: idosoId === "1" ? "José Santos" : "Ana Maria",
    idade: idosoId === "1" ? "78" : "82",
    parentesco: idosoId === "1" ? "Pai" : "Mãe",
    condicoesSaude: idosoId === "1" ? "Alzheimer em estágio inicial" : "Mobilidade reduzida, artrite",
    medicamentos: idosoId === "1" ? "Donepezila 10mg - 1x ao dia" : "Prednisona 5mg - 2x ao dia",
    observacoes: idosoId === "1" ? "Precisa de auxílio para atividades diárias" : "Usa andador para locomoção"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.idade) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos o nome e a idade.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Perfil atualizado!",
      description: `As informações de ${formData.nome} foram salvas.`
    });
    navigate("/meus-idosos");
  };

  const handleDelete = () => {
    toast({
      title: "Perfil removido",
      description: `${formData.nome} foi removido da sua lista.`
    });
    navigate("/meus-idosos");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-warm/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-display font-bold text-primary">
                Elder.ly+
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <Link to="/meus-idosos">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Editar Perfil</CardTitle>
                <CardDescription>
                  Atualize as informações de {formData.nome}
                </CardDescription>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    Excluir
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tem certeza que deseja remover {formData.nome} da sua lista? 
                      Esta ação não pode ser desfeita.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Excluir
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input
                    id="nome"
                    placeholder="Nome do idoso"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idade">Idade *</Label>
                  <Input
                    id="idade"
                    type="number"
                    placeholder="Idade"
                    value={formData.idade}
                    onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentesco">Grau de parentesco</Label>
                <Input
                  id="parentesco"
                  placeholder="Ex: Pai, Mãe, Avô, Avó..."
                  value={formData.parentesco}
                  onChange={(e) => setFormData({ ...formData, parentesco: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="condicoesSaude">Condições de saúde</Label>
                <Textarea
                  id="condicoesSaude"
                  placeholder="Descreva condições de saúde, diagnósticos..."
                  value={formData.condicoesSaude}
                  onChange={(e) => setFormData({ ...formData, condicoesSaude: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicamentos">Medicamentos em uso</Label>
                <Textarea
                  id="medicamentos"
                  placeholder="Liste os medicamentos e horários..."
                  value={formData.medicamentos}
                  onChange={(e) => setFormData({ ...formData, medicamentos: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  placeholder="Outras informações relevantes..."
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Alterações
                </Button>
                <Link to="/meus-idosos">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditarIdoso;
