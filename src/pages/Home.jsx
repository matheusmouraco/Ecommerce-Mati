import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ShoppingCart, Target, MessageSquare, Search, Award, Smartphone, Building, Users, Zap, CreditCard, Package, XCircle, MapPin, Clock, Star, TrendingUp } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20e-commerce.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .cta-bg {
          background-image: linear-gradient(to top, rgba(255, 0, 77, 0.1), transparent);
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2340&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <ShoppingCart className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Seu e-commerce pode ter os melhores produtos, mas se seu site não transmite confiança — você está vendendo menos do que poderia.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Na internet, credibilidade vende mais que preço. Se sua loja online parece amadora, lenta ou confusa, o cliente desiste — mesmo com um bom produto no carrinho.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Todos os dias, milhares de pessoas estão prontas para comprar online.</h2>
             <p className="text-xl text-zinc-300 mb-8">A pergunta é: <span className="text-[#FF004D] font-bold">Elas estão comprando de você ou do concorrente que tem um site mais profissional, rápido e confiável?</span></p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Na Mati Studio, criamos e-commerces profissionais e landing pages de conversão</h2>
                    <p className="mt-4 text-lg text-zinc-400">Para marcas que querem:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Award, title: "Aumentar a confiança do consumidor", description: "Sites profissionais que transmitem credibilidade" },
                        { icon: TrendingUp, title: "Vender mais sem depender só de redes sociais", description: "Loja independente e otimizada" },
                        { icon: Clock, title: "Ter uma loja que funcione 24h por dia", description: "Vendas automáticas mesmo quando você dorme" },
                        { icon: Target, title: "Transformar visual em vendas", description: "Design estratégico focado em conversão" },
                        { icon: Star, title: "Se destacar entre tantas opções no digital", description: "Diferenciação visual e funcional" },
                        { icon: ShoppingCart, title: "Checkout otimizado", description: "Menos abandono, mais vendas fechadas" },
                    ].map(benefit => (
                         <Card key={benefit.title} className="bg-zinc-900 border-zinc-800 text-white p-6 hover:bg-zinc-800 transition-colors">
                            <benefit.icon className="w-8 h-8 text-[#FF004D] mb-4"/>
                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                            <p className="text-zinc-400">{benefit.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que entregamos</h2>
                </div>
                
                <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-10 mb-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <ShoppingCart className="w-16 h-16 text-[#FF004D] shrink-0 mt-1"/>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">🛒 Loja Virtual Profissional</h3>
                            <p className="text-zinc-300 mb-4">E-commerce completo, 100% responsivo, pensado para vender com agilidade e segurança.</p>
                            <h4 className="text-lg font-bold mb-3">Inclui:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-300">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Página inicial com destaques e vitrines organizadas</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Página de produtos com descrição estratégica</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Carrinho inteligente com foco em conversão</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Checkout otimizado (simples e rápido)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Integração com pagamento e frete</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Página "Quem Somos" com história da marca</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Área para promoções e lançamentos</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Otimização para SEO</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Design personalizado (nada genérico)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Layout adaptado para todos dispositivos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <Target className="w-16 h-16 text-[#FF004D] shrink-0 mt-1"/>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">🎯 Landing Pages para campanhas de vendas</h3>
                            <p className="text-zinc-300 mb-4">Foco total em performance e conversão. Ideais para:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-300 mb-4">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Lançamento de coleção</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Produto específico com alta margem</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Queima de estoque ou campanha relâmpago</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-[#FF004D] shrink-0 mt-1"/>
                                    <span>Datas comemorativas (Black Friday, Natal etc.)</span>
                                </div>
                            </div>
                            <p className="text-zinc-400 font-medium">Estrutura enxuta + copy persuasiva + layout impactante = mais vendas.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Funcionalidades que geram resultado</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Building, title: "Painel intuitivo", description: "Atualize preços, banners, estoque facilmente" },
                        { icon: Zap, title: "Integração completa", description: "ERP, logística e automação de marketing" },
                        { icon: CreditCard, title: "Cupons e descontos", description: "Descontos progressivos, brindes e combos" },
                        { icon: Search, title: "Vitrine com filtros", description: "Tamanho, cor, categoria e muito mais" },
                        { icon: MessageSquare, title: "Reviews e FAQ", description: "Área de avaliações e perguntas frequentes" },
                        { icon: Smartphone, title: "Performance otimizada", description: "Velocidade, segurança e carregamento rápido" },
                    ].map(feature => (
                         <Card key={feature.title} className="bg-zinc-900 border-zinc-800 text-white p-6 hover:bg-zinc-800 transition-colors">
                            <feature.icon className="w-8 h-8 text-[#FF004D] mb-4"/>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-zinc-400">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Site comum vs. E-commerce feito pela Mati Studio</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-red-950/30 border-red-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-400"/>
                            <h3 className="text-xl font-bold text-red-400">Problemas comuns</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                            <li>• Checkout lento e abandono de carrinho</li>
                            <li>• Design genérico que não passa confiança</li>
                            <li>• Loja difícil de gerenciar</li>
                            <li>• Baixo ranqueamento no Google</li>
                            <li>• Depender só do Instagram</li>
                        </ul>
                    </Card>
                    <Card className="bg-green-950/30 border-green-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-8 h-8 text-green-400"/>
                            <h3 className="text-xl font-bold text-green-400">Soluções da Mati Studio</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                            <li>• Fluxo de compra otimizado e conversão monitorada</li>
                            <li>• Visual profissional alinhado à sua marca</li>
                            <li>• Painel simples e suporte técnico disponível</li>
                            <li>• SEO completo para loja, categorias e produtos</li>
                            <li>• Loja independente com estrutura própria</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que você pode esperar com um e-commerce profissional</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: TrendingUp, title: "Aumento nas conversões", description: "Menos abandono, mais vendas fechadas" },
                        { icon: Award, title: "Marca valorizada", description: "Percebida como referência no mercado" },
                        { icon: Building, title: "Mais autonomia", description: "Vender fora de marketplaces" },
                        { icon: Target, title: "Captação de leads", description: "Remarketing com campanhas direcionadas" },
                        { icon: Zap, title: "Performance otimizada", description: "Carrega rápido em todos os dispositivos" },
                        { icon: Search, title: "Integração com anúncios", description: "Google Ads, Meta Ads e mais" },
                    ].map(benefit => (
                         <div key={benefit.title} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <benefit.icon className="w-6 h-6 text-[#FF004D]"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                                <p className="text-zinc-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ShoppingCart className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Porque uma vitrine bonita não basta. Ela precisa ser eficiente.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-6">Seu cliente não vai insistir se a loja trava, se o visual não inspira ou se a experiência é confusa. Na dúvida, ele vai embora. Na confiança, ele compra.</p>
                <p className="text-xl font-bold text-white mb-8">Pronto para vender mais com uma loja online à altura da sua marca?</p>
                <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10">Vamos criar um e-commerce que une estratégia, beleza e performance. Transforme seu site na sua maior força de vendas.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Solicitar orçamento personalizado
                    </Button>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero minha loja profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | E-commerces profissionais que vendem mais.</p>
        </div>
      </footer>
    </>
  );
}