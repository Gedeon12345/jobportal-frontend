import AboutCard from "../../components/cards/AboutCard";
import { Target, Eye, Heart, User } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="mt-20 bg-linear-to-br from-blue-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            À Propos de JobPortal
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Votre partenaire de confiance pour connecter les talents aux opportunités
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AboutCard 
              icon={Target}
              title="Notre Mission"
              text="Connecter efficacement les employeurs et les chercheurs d'emploi en offrant 
                    une plateforme intuitive, sécurisée et accessible qui facilite les rencontres 
                    professionnelles et accélère le processus de recrutement."
            />

            <AboutCard 
              icon={Eye}
              title="Notre Vision"
              text="Devenir la plateforme de référence pour l'emploi au Cameroun et s'étendre 
                    à l'international, en facilitant l'accès à l'emploi pour tous et en contribuant 
                    au développement économique par la mise en relation des talents."
            />

            <AboutCard 
              icon={Heart}
              title="Nos Valeurs"
              text={<div className="text-start"><strong className="font-bold text-black/70">Confiance</strong> : Nous garantissons la sécurité des données.<br/>
                <strong className="font-bold text-black/70">Rapidité</strong> : Processus optimisé pour des résultats rapides.<br/>
                <strong className="font-bold text-black/70">Transparence</strong> : Communication claire et honnête.</div>}
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-black/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <User className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Notre Fondateur
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Foba Deffo Gédéon
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Entrepreneur passionné par l'innovation technologique et le développement 
              des ressources humaines, Foba Deffo Gédéon a créé JobPortal avec la vision 
              de révolutionner le marché de l'emploi au Cameroun et en Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Pourquoi Choisir JobPortal ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Interface Intuitive",
                description: "Navigation simple et design moderne pour une expérience utilisateur optimale."
              },
              {
                title: "Sécurité Garantie", 
                description: "Protection avancée de vos données personnelles et professionnelles."
              },
              {
                title: "Matching Intelligent",
                description: "Algorithme intelligent qui met en relation les profils compatibles."
              },
              {
                title: "Support Dédié",
                description: "Équipe support disponible pour vous accompagner dans vos démarches."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-black/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-black/90">{feature.title}</h4>
                <p className="text-black/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;