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
        <h1>
          <span class="logo-text">Crixus Marketing</span>
        </h1>
        <nav aria-label="Menu principal">
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>
          Sua <span className="">presença digital</span> no lugar certo.
        </h2>
        <p>
          Na <span className="highlight-box">Crixus Marketing</span>, criamos{" "}
          <span className="highlight-underline">
            estratégias personalizadas
          </span>{" "}
          que combinam criatividade, dados e tendências para acelerar o{" "}
          <span className="">crescimento do seu negócio</span>.
        </p>
        <button>
          <a
            href="https://wa.me/+5522999678524"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            Fale com um consultor
          </a>
        </button>
      </section>

      <section
        className="static-items-section animate-fade-in-up"
        aria-label="Seção estática de itens"
      >
        <div className="grid-title">
          Marcas que confiam na <st className="">Crixus</st>
        </div>
        <div className="static-items-grid">
          <div>
            <a
              href="https://www.instagram.com/leledobolo/"
              target="_blank"
              rel="noopener noreferrer"
              className="static-item"
            >
              <img src="/images/1.png" alt="" />
            </a>
          </div>
          <div>
            <a
              className="static-item"
              href="https://www.instagram.com/vaievemoutlet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/2.png" alt="" />
            </a>
          </div>
          <div className="static-item">
            <a
              href="https://www.instagram.com/aqua.fran/"
              target="_blank"
              rel="noopener noreferrer"
              className="static-item"
            >
              <img src="/images/3.png" alt="" />
            </a>
          </div>
          <div className="">
            <a
              href="https://www.instagram.com/recrear.kids/"
              target="blank"
              className="static-item"
            >
              <img src="/images/4.png" alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/marcadoporele/"
              className="static-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/5.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Serviços Avançados */}
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
                <span className=""> conversão de visitantes em clientes</span>,
                ajudando você a ter uma
                <span className="highlight-underline">
                  {" "}
                  presença digital forte
                </span>{" "}
                e impactante.
              </p>
              <button>
                <a
                  href="https://wa.me/+5522999678524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  Quero começar
                </a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Gestão de Redes Sociais</h4>
              <p>
                Cuidamos da presença da sua marca nas redes sociais com
                estratégia, criatividade e constância. Produzimos conteúdo
                visual e textual envolvente, fortalecendo o relacionamento com
                seus seguidores e aumentando sua{" "}
                <span className="highlight-underline">
                  autoridade no ambiente digital
                </span>
                .
              </p>
              <button>
                <a
                  href="https://wa.me/+5522999678524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  Quero começar
                </a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Marketing de Conteúdo</h4>
              <p>
                Atraia e conquiste clientes por meio de conteúdo relevante e de
                valor. Criamos artigos, posts e materiais que posicionam sua
                marca como{" "}
                <span className="highlight-underline">
                  autoridade no mercado
                </span>
                , educam o público e geram confiança ao longo da jornada de
                compra.
              </p>
              <button>
                <a
                  href="https://wa.me/+5522999678524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  Quero começar
                </a>
              </button>
            </article>

            <article className="servico-avancado-card">
              <h4>Gestão de Tráfego Pago</h4>
              <p>
                Criamos campanhas pagas altamente segmentadas no Google,
                Instagram, Facebook e outras plataformas para atrair visitantes
                qualificados. Com otimização contínua e análise de dados,
                garantimos que seu investimento gere{" "}
                <span className="highlight-underline">resultados reais</span> e
                aumento nas conversões.
              </p>
              <button>
                <a
                  href="https://wa.me/+5522999678524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  Quero começar
                </a>
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="animate-fade-in-up">
        <h3>
          <span className="">Nossos Serviços</span>
        </h3>
        <div className="servicos-grid">
          <div className="servico-item">
            <h4>Branding</h4>
            <p>
              Criação da{" "}
              <span className="highlight-underline">
                identidade visual completa
              </span>{" "}
              para destacar sua marca.
            </p>
          </div>
          <div className="servico-item">
            <h4>SEO</h4>
            <p>
              Melhore seu posicionamento no Google com{" "}
              <span className="">estratégias de otimização</span>.
            </p>
          </div>
          <div className="servico-item">
            <h4>Estratégia Digital</h4>
            <p>
              Planejamento personalizado para sua marca{" "}
              <span className="">crescer online</span> com foco.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutUs-section">
        <div className="aboutUs-img">
          <img src="/images/aboutUs.png" alt="" />
        </div>
        <div className="aboutUs-item-wrapper">
          <h2>Quem somos ?</h2>
          <p>
            Na <span className="highlight-box">Crixus Marketing</span>, operamos
            de forma estratégica e colaborativa, diretamente de nosso escritório
            em Búzios - RJ. Nosso foco é claro: conectar sua empresa aos seus
            futuros clientes. Enquanto eles buscam ativamente por seus serviços
            ou produtos, garantimos que encontrem você, e não a concorrência.
          </p>
          <p>
            Trabalhamos lado a lado com você, desenvolvendo soluções criativas e
            adaptadas às suas necessidades, sempre com o objetivo de impulsionar
            sua{" "}
            <span className="highlight-underline">
              presença no ambiente digital
            </span>{" "}
            e gerar <span className="">resultados concretos</span>. Somos uma
            equipe de empreendedores que compreende e valoriza a sua dedicação e
            garra na construção do seu negócio. Acreditamos que o seu sucesso é
            o nosso sucesso, e estamos juntos nessa jornada.
          </p>
          <button>
            <a
              href="https://wa.me/+5522999678524"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              Saiba mais
            </a>
          </button>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="animate-fade-in-up">
        <h3>
          O que dizem <span className="">nossos clientes</span>
        </h3>
        <div className="depoimentos-grid">
          <div className="depoimento-item">
            <p>
              "Super indico muito, ele me ajudou muito. Minhas redes sociais
              está linda e organizadas. E muito clientes vêm do{" "}
              <span className="">tráfego pago</span>."
            </p>
            <span>-Edy lanches</span>
          </div>
          <div className="depoimento-item">
            <p>
              "Estou super satisfeita com o trabalho da{" "}
              <span className="">Crixus Marketing</span>. Minha empresa nem
              aparecia nas pesquisas do Google, hoje não só aparece como o
              perfil está super organizado."
            </p>
            <span>-Recrear Kids</span>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="animate-fade-in-up">
        <h3>
          <span className="">Fale com a gente</span>
        </h3>
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
          © 2025 <span className="">Crixus Marketing</span>. Todos os direitos
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
