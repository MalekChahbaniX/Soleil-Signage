import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, FileUp, Mail, Moon, Phone, Send, Star, Sun, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteData, setQuoteData] = useState({ support: 'signs', width: '100', height: '50', quantity: '1', finish: '', name: '', phone: '', email: '', file: '' });
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('soleil-theme') !== 'light');
  
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
  const portfolio = [
    { image: '/images/enseignes.png', category: 'signs', title: isArabic ? 'واجهة مضيئة مخصصة' : 'Enseigne lumineuse sur mesure' },
    { image: '/images/impression.png', category: 'print', title: isArabic ? 'طباعة احترافية' : 'Impression grand format' },
    { image: '/images/cartes.png', category: 'cards', title: isArabic ? 'بطاقات فاخرة' : 'Cartes avec dorure' },
    { image: '/images/tampons.png', category: 'stickers', title: isArabic ? 'هوية لاصقة' : 'Stickers de marque' },
  ];
  const filteredPortfolio = portfolioFilter === 'all' ? portfolio : portfolio.filter((item) => item.category === portfolioFilter);
  const estimate = Math.max(180, Math.round(Number(quoteData.width || 100) * Number(quoteData.height || 50) * Number(quoteData.quantity || 1) * (quoteData.support === 'signs' ? 0.12 : 0.025)));

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('soleil-theme', next ? 'dark' : 'light');
  };

  const updateQuote = (key: string, value: string) => setQuoteData((current) => ({ ...current, [key]: value }));
  const sendQuote = (channel: 'whatsapp' | 'email') => {
    const message = `${isArabic ? 'طلب عرض سعر Soleil Pub' : 'Demande de devis Soleil Pub'}\n${quoteData.support} - ${quoteData.width}x${quoteData.height} cm - ${quoteData.quantity} ${isArabic ? 'unités' : 'unités'}\n${quoteData.name} - ${quoteData.phone}\n${isArabic ? 'Estimation' : 'Estimation'}: ${estimate}-${estimate * 2} TND`;
    if (channel === 'whatsapp') window.open(`https://wa.me/21647122656?text=${encodeURIComponent(message)}`, '_blank');
    else window.location.href = `mailto:soleilpub24@gmail.com?subject=${encodeURIComponent('Demande de devis Soleil Pub')}&body=${encodeURIComponent(message)}`;
  };

  // Handle RTL direction changes
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Soleil Pub', image: `${window.location.origin}/images/hero.png`, telephone: '+21647122656', email: 'soleilpub24@gmail.com', address: { '@type': 'PostalAddress', addressLocality: 'Tunis', addressCountry: 'TN' }, areaServed: 'Tunisie', priceRange: '$$' });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      
      {/* Language Switcher in Header */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      <button onClick={toggleTheme} aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'} className="fixed top-6 left-6 z-50 h-10 w-10 rounded-full border border-primary/30 bg-background/80 text-primary backdrop-blur transition hover:bg-primary hover:text-primary-foreground">
        {isDark ? <Sun className="mx-auto h-4 w-4" /> : <Moon className="mx-auto h-4 w-4" />}
      </button>

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
            <Button size="lg" onClick={() => { setQuoteOpen(true); setQuoteStep(1); }} className="w-full sm:w-auto text-base h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />{t('cta.instantQuote')}
            </Button>
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

      {/* Proof points */}
      <section className="border-y border-border bg-background px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {[['500+', 'stats.signs'], ['10', 'stats.experience'], ['240+', 'stats.clients']].map(([value, label]) => <div key={label}><p className="font-serif text-4xl text-primary">{value}</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t(label)}</p></div>)}
        </div>
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

      {/* Portfolio */}
      <section className="bg-background px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Soleil Pub</p><h2 className="font-serif text-4xl md:text-5xl">{t('portfolio.title')}</h2></div>
            <div className="flex flex-wrap gap-2">
              {['all', 'signs', 'print', 'cards', 'stickers'].map((filter) => <button key={filter} onClick={() => setPortfolioFilter(filter)} className={`border px-4 py-2 text-xs uppercase tracking-widest transition ${portfolioFilter === filter ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>{t(`portfolio.${filter}`)}</button>)}
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPortfolio.map((item) => <div key={item.title} className="group overflow-hidden border border-border bg-card"><div className="aspect-[4/5] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="p-5 font-serif text-lg">{item.title}</p></div>)}
          </div>
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

      {/* Testimonials */}
      <section className="py-32 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">{t('testimonialsBlock.title')}</h2>
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
      </section>

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

      {quoteOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <div className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto border border-primary/30 bg-background p-6 shadow-2xl md:p-10">
          <button onClick={() => setQuoteOpen(false)} aria-label="Fermer" className="absolute right-5 top-5 text-muted-foreground transition hover:text-primary"><X className="h-5 w-5" /></button>
          <div className="mb-8 pr-8"><p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">{t('quote.step')} {quoteStep} {t('quote.of')} 4</p><h2 id="quote-title" className="font-serif text-3xl md:text-4xl">{t('quote.title')}</h2><div className="mt-5 h-1 bg-muted"><div className="h-1 bg-primary transition-all" style={{ width: `${quoteStep * 25}%` }} /></div></div>

          {quoteStep === 1 && <div><h3 className="mb-5 font-serif text-2xl">{t('quote.support')}</h3><div className="grid grid-cols-2 gap-3">{[['signs', 'services.luminousSigns.title'], ['print', 'services.digitalPrinting.title'], ['cards', 'services.invitations.title'], ['stickers', 'services.stickers.title']].map(([value, label]) => <button key={value} onClick={() => updateQuote('support', value)} className={`border p-5 text-left transition ${quoteData.support === value ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'}`}><span className="font-serif text-lg">{t(label)}</span>{quoteData.support === value && <Check className="mt-3 h-4 w-4" />}</button>)}</div></div>}
          {quoteStep === 2 && <div><h3 className="mb-5 font-serif text-2xl">{t('quote.size')}</h3><div className="grid grid-cols-3 gap-3"><label className="text-sm text-muted-foreground">{t('quote.width')}<input value={quoteData.width} onChange={(event) => updateQuote('width', event.target.value)} type="number" className="mt-2 w-full border border-border bg-card p-3 text-foreground" /></label><label className="text-sm text-muted-foreground">{t('quote.height')}<input value={quoteData.height} onChange={(event) => updateQuote('height', event.target.value)} type="number" className="mt-2 w-full border border-border bg-card p-3 text-foreground" /></label><label className="text-sm text-muted-foreground">{t('quote.quantity')}<input value={quoteData.quantity} onChange={(event) => updateQuote('quantity', event.target.value)} type="number" min="1" className="mt-2 w-full border border-border bg-card p-3 text-foreground" /></label></div><div className="mt-8 border border-primary/30 bg-primary/5 p-5"><p className="text-sm uppercase tracking-widest text-primary">{t('quote.estimate')}</p><p className="mt-2 font-serif text-3xl">{estimate} - {estimate * 2} TND</p><p className="mt-2 text-sm text-muted-foreground">{t('quote.estimateNote')}</p></div></div>}
          {quoteStep === 3 && <div><h3 className="mb-5 font-serif text-2xl">{t('quote.finish')}</h3><textarea value={quoteData.finish} onChange={(event) => updateQuote('finish', event.target.value)} placeholder={t('quote.finishPlaceholder')} className="min-h-32 w-full resize-none border border-border bg-card p-4 text-foreground outline-none focus:border-primary" /><label className="mt-5 flex cursor-pointer items-center gap-3 border border-dashed border-primary/40 p-4 text-sm text-muted-foreground hover:text-primary"><FileUp className="h-5 w-5 text-primary" />{quoteData.file || t('quote.file')}<input type="file" className="hidden" onChange={(event) => updateQuote('file', event.target.files?.[0]?.name || '')} /></label></div>}
          {quoteStep === 4 && <div><h3 className="mb-5 font-serif text-2xl">{t('quote.contact')}</h3><div className="space-y-3"><input value={quoteData.name} onChange={(event) => updateQuote('name', event.target.value)} placeholder={t('quote.name')} className="w-full border border-border bg-card p-4 text-foreground" /><input value={quoteData.phone} onChange={(event) => updateQuote('phone', event.target.value)} placeholder={t('quote.phone')} type="tel" className="w-full border border-border bg-card p-4 text-foreground" /><input value={quoteData.email} onChange={(event) => updateQuote('email', event.target.value)} placeholder={t('quote.email')} type="email" className="w-full border border-border bg-card p-4 text-foreground" /></div><div className="mt-6 border border-primary/30 bg-primary/5 p-5"><p className="font-serif text-2xl">{estimate} - {estimate * 2} TND</p><p className="mt-1 text-sm text-muted-foreground">{t('quote.successText')}</p></div></div>}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6"><button onClick={() => quoteStep > 1 && setQuoteStep(quoteStep - 1)} disabled={quoteStep === 1} className="flex items-center gap-2 text-sm text-muted-foreground disabled:opacity-30"><ArrowLeft className="h-4 w-4" />{t('quote.back')}</button>{quoteStep < 4 ? <Button onClick={() => setQuoteStep(quoteStep + 1)}>{t('quote.next')}<ArrowRight className="ml-2 h-4 w-4" /></Button> : <div className="flex flex-wrap gap-2"><Button onClick={() => sendQuote('whatsapp')} className="bg-[#25D366] text-white hover:bg-[#1ebe5b]">WhatsApp</Button><Button onClick={() => sendQuote('email')} variant="outline"><Mail className="mr-2 h-4 w-4" />Email</Button></div>}</div>
        </div>
      </div>}
    </div>
  );
}
