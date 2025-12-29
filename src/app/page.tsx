"use client";

import { CheckCircle2, TrendingUp, Target, BookOpen, Shield } from "lucide-react";

export default function Home() {
  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/Smz6hC0?afid=W9DXyO8W", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
            <TrendingUp className="w-4 h-4" />
            Método Estruturado para Iniciantes
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Fórmula Avanti Milionário
          </h1>
          <p className="text-xl sm:text-2xl text-green-400 font-semibold mb-8">
            O caminho para começar no digital do jeito certo
          </p>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Aprenda como funciona o mercado digital e como trabalhar como afiliado, 
            mesmo sem experiência, sem aparecer e usando apenas o celular ou computador.
          </p>

          {/* CTA Principal */}
          <button
            onClick={handleCTA}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 mb-4"
          >
            ACESSAR O FÓRMULA AVANTI MILIONÁRIO AGORA
          </button>
          <p className="text-sm text-gray-400">
            Comece sua jornada no digital hoje mesmo
          </p>
        </div>
      </section>

      {/* Seção de Apresentação */}
      <section className="bg-gray-900 py-16 sm:py-20 border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Um método estruturado para pessoas comuns
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  O <span className="font-semibold text-green-400">Fórmula Avanti Milionário</span> é 
                  um método estruturado, criado para pessoas comuns que querem ganhar dinheiro na 
                  internet com organização, aprendizado e estratégia, sem promessas falsas.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Este não é mais um curso que promete riqueza da noite para o dia. É um caminho 
              claro e honesto para quem quer entender como o mercado digital realmente funciona 
              e construir uma fonte de renda online de forma consistente.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Benefícios */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              O que você vai aprender
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Entenda como funciona o mercado digital",
                  description: "Aprenda os fundamentos e como tudo se conecta"
                },
                {
                  icon: Target,
                  title: "Aprenda a trabalhar como afiliado",
                  description: "Domine as estratégias de marketing de afiliados"
                },
                {
                  icon: TrendingUp,
                  title: "Saiba como divulgar produtos digitais corretamente",
                  description: "Técnicas comprovadas de divulgação ética"
                },
                {
                  icon: Shield,
                  title: "Evite os erros que fazem iniciantes desistirem",
                  description: "Aprenda com quem já trilhou esse caminho"
                },
                {
                  icon: CheckCircle2,
                  title: "Tenha um passo a passo claro para começar",
                  description: "Método estruturado do zero ao resultado"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg flex-shrink-0 border border-green-500/30">
                      <benefit.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Confiança */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-green-500/20 p-4 rounded-full mb-6 border border-green-500/30">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transparência e realidade
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              É importante deixar claro: <span className="font-semibold text-green-400">não se trata de dinheiro fácil</span>, 
              e sim de aprendizado, dedicação e aplicação prática. Os resultados variam de pessoa para pessoa 
              e dependem do seu esforço, consistência e aplicação do que é ensinado.
            </p>
            <p className="text-gray-400 italic">
              Este é um caminho real, para pessoas reais, que querem resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para começar sua jornada no digital?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Dê o primeiro passo hoje e aprenda o caminho certo para trabalhar como afiliado
            </p>
            <button
              onClick={handleCTA}
              className="bg-black text-green-400 hover:bg-gray-900 font-bold text-lg px-10 py-5 rounded-lg shadow-2xl hover:shadow-3xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 border border-green-500/30"
            >
              ACESSAR O FÓRMULA AVANTI MILIONÁRIO AGORA
            </button>
            <p className="text-green-100 mt-6 text-sm">
              Método estruturado • Passo a passo claro • Sem promessas falsas
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Fórmula Avanti Milionário. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Os resultados podem variar de pessoa para pessoa. Não garantimos ganhos específicos.
          </p>
        </div>
      </footer>
    </div>
  );
}
