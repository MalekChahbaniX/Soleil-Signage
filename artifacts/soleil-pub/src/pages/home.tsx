import React, { useEffect } from "react";
import { Phone, Star, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  const services = [
    {
      id: "num",
      titleKey: "services.digitalPrinting.title",
      descKey: "services.digitalPrinting.description",
      messageKey: "services.digitalPrinting.message",
      image: "/images/impression.png",
    },
    {
      id: "ens",
      titleKey: "services.luminousSigns.title",
      descKey: "services.luminousSigns.description",
      messageKey: "services.luminousSigns.message",
      image: "/images/enseignes.png",
    },
    {
      id: "tam",
      titleKey: "services.stamps.title",
      descKey: "services.stamps.description",
      messageKey: "services.stamps.message",
      image: "/images/tampons.png",
    },
    {
      id: "inv",
      titleKey: "services.invitations.title",
      descKey: "services.invitations.description",
      messageKey: "services.invitations.message",
      image: "/images/cartes.png",
    },
    {
      id: "stk",
      titleKey: "services.stickers.title",
      descKey: "services.stickers.description",
      messageKey: "services.stickers.message",
      image: "/images/tampons.png",
    }
  ];

  const testimonials = t("testimonials.testimonials", { returnObjects: true });

  // Handle RTL direction changes
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      
      {/* Language Switcher in Header */}
      <div className="fixed top-6 right-6 z-50 ltr-only">
        <LanguageSwitcher />
      </div>
      <div className="fixed top-6 left-6 z-50 rtl-only">
        <LanguageSwitcher />
      </div>

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
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">{t("hero.badge")}</p>
              <span className="w-12 h-[1px] bg-primary" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6">
              {t("hero.title")} <br className="hidden md:block" />
              <span className="italic text-primary">{t("hero.titleEmphasis")}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-serif mb-8 opacity-90">شمس الإشهار</p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              {t("hero.description")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="tel:+21647122656" data-testid="link-hero-call">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-primary/30 hover:bg-primary/10 text-primary">
                <Phone className={`h-5 w-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                +216 47122656
              </Button>
            </a>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <AnimatedSection delay={1} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">{i18n.language === 'ar' ? 'اكتشف' : 'Découvrir'}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </AnimatedSection>
      </section>

      {/* Expertise Intro */}
      <section className="py-32 px-6 bg-background relative">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              {i18n.language === 'ar' ? 'التميز في كل التفاصيل' : "L'excellence dans chaque détail."}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              {i18n.language === 'ar' 
                ? 'نعتقد أن صورتك تستحق الأفضل. لهذا السبب، نجمع Soleil Pub بين الحرفية التقليدية والتقنيات المتقدمة لإنشاء وسائل اتصال لا تمر دون ملاحظة.'
                : 'Nous croyons que votre image mérite ce qu\'il y a de mieux. C\'est pourquoi Soleil Pub allie savoir-faire artisanal et technologies de pointe pour créer des supports de communication qui ne passent jamais inaperçus.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("services.title")}</h2>
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
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary tracking-widest uppercase">0{index + 1}</span>
                    <span className="w-8 h-[1px] bg-border" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">{t(service.titleKey)}</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-32 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">{i18n.language === 'ar' ? 'ثقة عملائنا' : 'La Confiance de nos Clients'}</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto mt-8" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.isArray(testimonials) && testimonials.map((t, i) => (
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
      </section> */}

      {/* Contact / Footer */}
      <section className="py-32 px-6 bg-card border-t border-border relative overflow-hidden">
        {/* Decorative background sun ray */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">
              {i18n.language === 'ar' ? 'هل أنت مستعد لتحسين صورتك؟' : 'Prêt à sublimer votre image ?'}
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto">
              {i18n.language === 'ar'
                ? 'اتصل بنا اليوم لمناقشة مشروعك. فريقنا في خدمتك لتقديم النصح والمشورة.'
                : 'Contactez-nous dès aujourd\'hui pour discuter de votre projet. Notre équipe est à votre disposition pour vous conseiller.'}
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
              <p>© {new Date().getFullYear()} Soleil Pub | شمس الإشهار. {i18n.language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
