import React from "react";
import { Phone, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

const services = [
  {
    id: "num",
    title: "Impression Numérique",
    arabic: "طباعة رقمية",
    desc: "Précision absolue et couleurs vibrantes pour tous vos supports de communication.",
    image: "/images/impression.png",
    message: "Je veux commander une impression numérique"
  },
  {
    id: "ens",
    title: "Enseignes Lumineuses",
    arabic: "لافتات مضيئة",
    desc: "Illuminez votre marque avec des enseignes sur-mesure d'une qualité exceptionnelle.",
    image: "/images/enseignes.png",
    message: "Je veux une enseigne lumineuse"
  },
  {
    id: "tam",
    title: "Tampons",
    arabic: "أختام",
    desc: "Votre signature officielle, conçue avec des matériaux nobles et durables.",
    image: "/images/tampons.png",
    message: "Je veux commander un tampon"
  },
  {
    id: "inv",
    title: "Cartes d'invitation",
    arabic: "بطاقات دعوة",
    desc: "Le raffinement pour vos moments uniques. Dorure, gaufrage et papiers de prestige.",
    image: "/images/cartes.png",
    message: "Je veux des cartes d'invitation"
  },
  {
    id: "stk",
    title: "Stickers",
    arabic: "ملصقات",
    desc: "Adhésifs haute résistance aux finitions impeccables pour affirmer votre identité.",
    image: "/images/tampons.png", // Fallback, could generate another if needed
    message: "Je veux commander des stickers"
  }
];

const testimonials = [
  {
    name: "Mohamed Ould Ahmed",
    text: "Un travail d'une qualité rare en Tunisie. L'enseigne lumineuse de notre agence est une véritable œuvre d'art. Précision et respect des délais absolus."
  },
  {
    name: "Fatimetou Mint Brahim",
    text: "Nos cartes d'invitation pour le mariage étaient sublimes. Le papier, la dorure... tout respirait le luxe. Merci à l'équipe de Soleil Pub."
  },
  {
    name: "Sidi Ahmed Ould Maatalla",
    text: "Des impressions numériques grand format d'une netteté incroyable. C'est le partenaire idéal pour toute entreprise exigeante."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img 
            src="/images/hero.png" 
            alt="Soleil Pub Studio" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
        </div>

        <div className="container relative z-30 px-6 mx-auto max-w-5xl flex flex-col items-center text-center">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="w-12 h-[1px] bg-primary" />
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">Studio d'Exception</p>
              <span className="w-12 h-[1px] bg-primary" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6">
              L'Art de <br className="hidden md:block" />
              <span className="italic text-primary">l'Impression</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-serif mb-8 opacity-90">شمس الإشهار</p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              De l'enseigne monumentale au détail d'une dorure, nous façonnons l'identité visuelle des marques exigeantes en Tunisie.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="tel:+21647122656" data-testid="link-hero-call">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-primary/30 hover:bg-primary/10 text-primary">
                <Phone className="mr-2 h-5 w-5" />
                +216 47122656
              </Button>
            </a>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <AnimatedSection delay={1} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </AnimatedSection>
      </section>

      {/* Expertise Intro */}
      <section className="py-32 px-6 bg-background relative">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">L'excellence dans chaque détail.</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              Nous croyons que votre image mérite ce qu'il y a de mieux. C'est pourquoi Soleil Pub allie savoir-faire artisanal et technologies de pointe pour créer des supports de communication qui ne passent jamais inaperçus.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Nos Services</h2>
            <p className="text-primary text-xl font-serif">خدماتنا</p>
          </AnimatedSection>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <AnimatedSection className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] overflow-hidden rounded-sm group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary tracking-widest uppercase">0{index + 1}</span>
                    <span className="w-8 h-[1px] bg-border" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">{service.title}</h3>
                  <p className="text-2xl text-muted-foreground font-serif mb-6">{service.arabic}</p>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {service.desc}
                  </p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">La Confiance de nos Clients</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto mt-8" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-card p-10 border border-border/50 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-primary">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>
                </div>
                <div>
                  <p className="font-serif text-lg">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section className="py-32 px-6 bg-card border-t border-border relative overflow-hidden">
        {/* Decorative background sun ray */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Prêt à sublimer votre image ?</h2>
            <p className="text-xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet. Notre équipe est à votre disposition pour vous conseiller.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
              <a href="tel:+21647122656" className="flex flex-col items-center group" data-testid="footer-contact-phone">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">+216 47122656</span>
              </a>
              
              <a href="mailto:soleilpub24@gmail.com" className="flex flex-col items-center group" data-testid="footer-contact-email">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">soleilpub24@gmail.com</span>
              </a>
            </div>
            
            <div className="pt-16 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Soleil Pub | شمس الإشهار. Tous droits réservés.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
