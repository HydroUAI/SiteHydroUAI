import { Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const quick = [
    { title: "Email", icon: Mail, value: "hydrouai@gmail.com" },
    { title: "Localização", icon: MapPin, value: "Universidade Federal de Minas Gerais - UFMG" },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Fale Conosco</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {quick.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <item.icon className="h-6 w-6 text-primary" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.value}</CardContent>
            </Card>
          ))}
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?..."
            className="w-full h-96 rounded-lg border"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
