import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function HomePage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hf22hg",
        "template_jvuwicr",
        form.current,
        "8TGrsbkCJZas8hykX"
      )
      .then(
        () => {
          alert("Email enviado com sucesso!");
          e.target.reset();
        },
        () => {
          alert("Erro ao enviar email, por favor tente novamente mais tarde ");
        }
      );
  };

  return (
    <main>
      {/* Header */}
      <header>
        <h1>Crixus Marketing</h1>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero">
        <h2>Sua presença digital no lugar certo.</h2>
        <p>
          Na Crixus Marketing, criamos estratégias personalizadas que combinam
          criatividade, dados e tendências para acelerar o crescimento do seu
          negócio.
        </p>
        <button>
          <a href="#contato">Fale com um consultor</a>
        </button>
      </section>
      <section
        className="static-items-section"
        aria-label="Seção estática de itens"
      >
        <div className="grid-title">
          Marcas que confiam na <st>Crixus</st>
        </div>
        <div className="static-items-grid">
          <div className="static-item">
            <img src="/images/1.png" alt="" />
          </div>
          <div className="static-item">
            <img src="/images/2.png" alt="" />
          </div>
          <div className="static-item">
            <img src="/images/3.png" alt="" />
          </div>
          <div className="static-item">
            <img src="/images/4.png" alt="" />
          </div>
          <div className="static-item">
            <img src="/images/5.png" alt="" />
          </div>
        </div>
      </section>
      {/* Seção de Serviços */}
      <section
        className="servicos-avancados-section"
        aria-label="Serviços Avançados"
      >
        <div className="servicos-avancados-container">
          <h3 className="servicos-avancados-title">
            Potencialize seu negócio <br />
            com <span className="highlight">nossos serviços</span>
          </h3>

          <div className="servicos-avancados-grid">
            <article className="servico-avancado-card">
              <h4>Desenvolvimento de Sites e Landing Pages</h4>
              <p>
                Criamos sites rápidos, modernos e responsivos para transmitir
                credibilidade e facilitar o contato com seu público. Além disso,
                desenvolvemos landing pages estratégicas com foco total na
                conversão de visitantes em clientes, ajudando você a ter uma
                presença digital forte e impactante.
              </p>
              <button>
                <a href="#contato">Quero começar</a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Gestão de Redes Sociais</h4>
              <p>
                Cuidamos da presença da sua marca nas redes sociais com
                estratégia, criatividade e constância. Produzimos conteúdo
                visual e textual envolvente, fortalecendo o relacionamento com
                seus seguidores e aumentando sua autoridade no ambiente digital.
              </p>
              <button>
                <a href="#contato">Quero começar</a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Marketing de Conteúdo</h4>
              <p>
                Atraia e conquiste clientes por meio de conteúdo relevante e de
                valor. Criamos artigos, posts e materiais que posicionam sua
                marca como autoridade no mercado, educam o público e geram
                confiança ao longo da jornada de compra.
              </p>
              <button>
                <a href="#contato">Quero começar</a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Gestão de Tráfego Pago</h4>
              <p>
                Criamos campanhas pagas altamente segmentadas no Google,
                Instagram, Facebook e outras plataformas para atrair visitantes
                qualificados. Com otimização contínua e análise de dados,
                garantimos que seu investimento gere resultados reais e aumento
                nas conversões.
              </p>
              <button>
                <a href="#contato">Quero começar</a>
              </button>
            </article>
          </div>
        </div>
      </section>
      {/* Seção de Serviços */}
      <section id="servicos">
        <h3>Nossos Serviços</h3>
        <div className="servicos-grid">
          <div className="servico-item">
            <h4>Branding</h4>
            <p>
              Criação da identidade visual completa para destacar sua marca.
            </p>
          </div>
          <div className="servico-item">
            <h4>SEO</h4>
            <p>
              Melhore seu posicionamento no Google com estratégias de
              otimização.
            </p>
          </div>
          <div className="servico-item">
            <h4>Estratégia Digital</h4>
            <p>
              Planejamento personalizado para sua marca crescer online com foco.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos">
        <h3>O que dizem nossos clientes</h3>
        <div className="depoimentos-grid">
          <div className="depoimento-item">
            <p>
              "Super indico muito, ele me ajudou muito. Minhas redes sociais
              está linda e organizadas. E muito clientes vêm do tráfego pago."
            </p>
            <span>-Edy lanches</span>
          </div>
          <div className="depoimento-item">
            <p>"Estou super satisfeita com o trabalho da Crixus Marketing. Minha empresa nem aparecia nas pesquisas do Google, hoje não só aparece como o perfil está super organizado."</p>
            <span>-Recrear Kids</span>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato">
        <h3>Fale com a gente</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Seu nome" required />
          <input
            type="email"
            name="user_email"
            placeholder="Seu email"
            required
          />
          <textarea name="message" placeholder="Sua mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2025 Crixus Marketing. Todos os direitos
          reservados.
        </p>
      </footer>
      <div className="iconZap">
        <a
          href="https://wa.me/+5522999678524"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={40} color="white" />
        </a>
      </div>
    </main>
  );
}
