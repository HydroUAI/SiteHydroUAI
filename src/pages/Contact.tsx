import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Users, MessageSquare } from "lucide-react";
const Contact = () => {
  return <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">v</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">hydrouai@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <p className="text-muted-foreground">+55 31 8298-6823</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Universidade Federal de Minas Gerais<br />
                          R. D, 43<br />
                          Belo Horizonte - MG, 31360-420
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h00 às 17h00<br />
                          Sábado: 8h00 às 12h00<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Opções Rápidas de Contato
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-4">
                  <Users className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Colaborações</div>
                    <div className="text-xs text-muted-foreground">Parcerias e projetos</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Suporte</div>
                    <div className="text-xs text-muted-foreground">Dúvidas técnicas</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" placeholder="Seu sobrenome" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution">Instituição</Label>
                    <Input id="institution" placeholder="Universidade, Empresa, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collaboration">Colaboração em Pesquisa</SelectItem>
                        <SelectItem value="partnership">Parceria</SelectItem>
                        <SelectItem value="student">Oportunidade para Estudante</SelectItem>
                        <SelectItem value="publication">Dúvida sobre Publicação</SelectItem>
                        <SelectItem value="technical">Suporte Técnico</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Descreva sua solicitação ou dúvida em detalhes..." rows={6} />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-center">Nossa Localização</CardTitle>
              <CardDescription className="text-center">
                Venha nos visitar no campus da universidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p><div className="relative w-full h-[360px] md:h-[460px] rounded-xl overflow-hidden border">
  <iframe
    src="https://www.google.com/maps?q=Universidade+Federal+de+Minas+Gerais&hl=pt&z=15&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mapa - UFMG"
  />
</div></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Contact;