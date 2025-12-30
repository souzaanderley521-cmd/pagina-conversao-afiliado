from flask import Flask, render_template_string

app = Flask(__name__)

HTML = """
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Fórmula Avante Milionária | Oficial</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #000;
            color: #fff;
        }
        .container {
            max-width: 900px;
            margin: auto;
            padding: 40px 20px;
        }
        h1, h2 {
            color: #00ff88;
            text-shadow: 0 0 15px #00ff88;
        }
        p {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 20px;
        }
        .highlight {
            color: #00ff88;
            font-weight: bold;
        }
        .cta {
            background: linear-gradient(90deg, #00ff88, #00cc66);
            color: #000;
            padding: 20px;
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            border-radius: 10px;
            text-decoration: none;
            display: block;
            margin: 40px 0;
            box-shadow: 0 0 25px #00ff88;
        }
        .cta:hover {
            transform: scale(1.03);
            box-shadow: 0 0 40px #00ff88;
        }
        .box {
            border: 1px solid #00ff88;
            padding: 25px;
            border-radius: 10px;
            margin: 30px 0;
            box-shadow: 0 0 15px rgba(0,255,136,0.4);
        }
        footer {
            text-align: center;
            font-size: 14px;
            opacity: 0.7;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Fórmula Avante Milionária</h1>
        <p>
            Descubra o método que está ajudando pessoas comuns a criarem uma
            <span class="highlight">nova fonte de renda online</span> de forma estratégica,
            simples e comprovada.
        </p>

        <div class="box">
            <h2>Por que esse método funciona?</h2>
            <p>✔ Estratégia validada no mercado digital</p>
            <p>✔ Ideal para iniciantes e afiliados</p>
            <p>✔ Passo a passo claro e objetivo</p>
            <p>✔ Pode ser aplicado de qualquer lugar</p>
        </div>

        <p>
            A <span class="highlight">Fórmula Avante Milionária</span> não é promessa vazia.
            É um sistema estruturado para quem quer sair do zero e começar
            a gerar resultados reais no digital.
        </p>

        <a class="cta" href="https://pay.kiwify.com.br/Smz6hC0?afid=W9DXyO8W" target="_blank">
            🚀 COMEÇA A LUCRAR AGORA
        </a>

        <div class="box">
            <h2>Comunidade Exclusiva</h2>
            <p>📲 Temos grupo no <strong>Telegram</strong></p>
            <p>📞 Suporte e novidades no <strong>WhatsApp</strong></p>
            <p>📸 Conteúdos diários no <strong>Instagram</strong></p>
        </div>

        <p>
            Se você já tentou de tudo e não teve resultados,
            essa pode ser a oportunidade que estava faltando.
            O momento de agir é <span class="highlight">agora</span>.
        </p>

        <a class="cta" href="https://pay.kiwify.com.br/Smz6hC0?afid=W9DXyO8W" target="_blank">
            🔥 ACESSAR A FÓRMULA AVANTE MILIONÁRIA
        </a>

        <footer>
            © 2025 • Página Oficial • Fórmula Avante Milionária
        </footer>
    </div>
</body>
</html>
"""

@app.route("/")
def home():
    return render_template_string(HTML)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
