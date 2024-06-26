import "./contact.css"

function Contact() {
    return (
        <div>
            <div id="contactTitle">
                <h1>
                    Entre em contato
                </h1>
            </div>
            <div id="contact">
                <form id="form" action="https://formspree.io/f/xayrkqpl" method="POST">
                    <label>
                        <p>Seu Email:</p>
                        <input placeholder="Digite seu Email" type="email" name="email" />
                    </label>
                    <label>
                        <p>Sua mensagem:</p>
                        <textarea id="textArea" name="message" placeholder="Digite sua mensagem"
                            required></textarea>
                    </label>
                    <label>
                        <button id="button" type="submit">Enviar</button>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Contact