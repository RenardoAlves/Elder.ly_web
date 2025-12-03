import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft, Search, MapPin, Star, Heart as HeartIcon, DollarSign, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const BuscarCuidador = () => {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const cuidadores = [
    {
      id: 1,
      nome: "Maria Silva",
      foto: "https://i.pravatar.cc/150?img=35",
      avaliacao: 4.9,
      avaliacoes: 127,
      experiencia: "5 anos",
      especialidades: ["Alzheimer", "Mobilidade Reduzida"],
      disponibilidade: "Seg-Sex, 8h-18h",
      preco: 45,
      distancia: "2.5 km"
    },
    {
      id: 2,
      nome: "João Oliveira",
      foto: "https://i.pravatar.cc/150?img=13",
      avaliacao: 4.8,
      avaliacoes: 98,
      experiencia: "7 anos",
      especialidades: ["Diabetes", "Fisioterapia"],
      disponibilidade: "Plantão 24h",
      preco: 50,
      distancia: "3.8 km"
    },
    {
      id: 3,
      nome: "Ana Santos",
      foto: "https://i.pravatar.cc/150?img=5",
      avaliacao: 4.9,
      avaliacoes: 156,
      experiencia: "10 anos",
      especialidades: ["Parkinson", "Enfermagem"],
      disponibilidade: "Fins de semana",
      preco: 55,
      distancia: "1.2 km"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-warm/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard/familia" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-display font-bold text-primary">
                Elder.ly+
              </span>
            </Link>
            <div className="w-24" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-display font-bold mb-2">
            Buscar Cuidador
          </h1>
          <p className="text-muted-foreground">
            Encontre o profissional ideal para suas necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filtros */}
          <Card className="h-fit">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </h3>
              </div>

              <div className="space-y-2">
                <Label>Localização</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Digite seu CEP" className="pl-10" />
                </div>
                <div className="pt-2">
                  <Label className="text-sm text-muted-foreground">
                    Raio: 5 km
                  </Label>
                  <Slider defaultValue={[5]} max={50} step={5} className="mt-2" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Faixa de Preço (por hora)</Label>
                <div className="flex items-center gap-2">
                  <Input placeholder="R$ 30" className="flex-1" />
                  <span>até</span>
                  <Input placeholder="R$ 80" className="flex-1" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Especialidades</Label>
                {["Alzheimer", "Parkinson", "Diabetes", "Mobilidade Reduzida", "Fisioterapia"].map((esp) => (
                  <div key={esp} className="flex items-center space-x-2">
                    <Checkbox id={esp} />
                    <label htmlFor={esp} className="text-sm cursor-pointer">
                      {esp}
                    </label>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Label>Disponibilidade</Label>
                {["Segunda a Sexta", "Fins de semana", "Plantão 24h", "Noturno"].map((disp) => (
                  <div key={disp} className="flex items-center space-x-2">
                    <Checkbox id={disp} />
                    <label htmlFor={disp} className="text-sm cursor-pointer">
                      {disp}
                    </label>
                  </div>
                ))}
              </div>

              <Button className="w-full">
                Aplicar Filtros
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {cuidadores.length} cuidadores encontrados
              </p>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Melhor Avaliação</option>
                <option>Menor Preço</option>
                <option>Mais Próximo</option>
                <option>Mais Experiente</option>
              </select>
            </div>

            {cuidadores.map((cuidador) => (
              <Card key={cuidador.id} className="hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={cuidador.foto}
                      alt={cuidador.nome}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{cuidador.nome}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{cuidador.experiencia} de experiência</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {cuidador.distancia}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorito(cuidador.id)}
                        >
                          <HeartIcon
                            className={`h-5 w-5 transition-colors ${
                              favoritos.includes(cuidador.id)
                                ? "fill-red-500 text-red-500"
                                : "text-muted-foreground"
                            }`}
                          />
                        </Button>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warm text-warm" />
                          <span className="font-semibold">{cuidador.avaliacao}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({cuidador.avaliacoes} avaliações)
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cuidador.especialidades.map((esp) => (
                          <Badge key={esp} variant="secondary">
                            {esp}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            {cuidador.disponibilidade}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-lg">
                            <DollarSign className="h-4 w-4" />
                            R$ {cuidador.preco}/hora
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline">Ver Perfil</Button>
                          <Button>Solicitar Serviço</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarCuidador;
