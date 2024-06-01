// selecionar elementos
const mos = document.querySelector('.mostrar-projetos');
const projinativos = document.querySelectorAll('.projeto:not(.ativo)');
const conteudo = document.getElementById('content');
const screen = document.getElementById('screen');
const body = document.querySelector('body');
const header = document.querySelectorAll('.cab');

// adicionar eventos
mos.addEventListener('click', () => {
    mostrarMais();
    esconderBotao(mos);
});

screen.addEventListener('click', () => {
    toggleDarkMode();
});

// funções
function esconderBotao(button) {
    button.classList.add('remover');
}

function mostrarMais() {
    projinativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });
}

function toggleLanguage(language) {
    const infos = document.querySelector('.infos');

    const portugueseContent = `
        <div>
            <h1>Olá, eu sou Christopher Barros</h1>
            <p>Apaixonado por informática desde muito jovem, sempre tive curiosidade de entender como tudo funciona e o que tinha por trás dos jogos, aplicativos e sites.</p>
            <p>Foi pensando nisso que me inscrevi em um curso técnico no Instituto Social Nossa Senhora de Fátima.</p>
            <p>Um curso de informática associado ao SENAC e CEDESP, onde pude entender melhor como tudo acontecia, no próximo ano fiz no mesmo instituto um curso de inglês do básico ao intermediário e hoje estou cursando o 5° semestre de Ciência da Computação, onde estou aprendendo de tudo um pouco e acabei me interessando bastante pela parte de Web, pois sempre gostei do trabalho criativo e artístico através de códigos.</p>
            <p>Por isso tenho buscado vagas de estágio e trainee para me aprimorar e me especializar em desenvolvimento de software.</p>

            <ul class="redes-sociais">
            <li><a href="https://www.linkedin.com/in/chrisbmineiro" title="minha pagina no linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="http://whatsapp.me/5511985154394" title="meu numero para contato" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/chrisbmineiro" title="meu github" target="_blank"><i class="fab fa-github"></i></a></li>
            </ul>
        </div>`;
    const englishContent = `
        <div>
            <h1>Hello, I am Christopher Barros</h1>
            <p>Passionate about technology from a very young age, I've always been curious to understand how everything works and what is behind games, applications, and websites.</p>
            <p>With that in mind, I enrolled in a technical course at the Instituto Social Nossa Senhora de Fátima.</p>
            <p>A technology course associated with SENAC and CEDESP, where I could understand better how everything works programming in C and C++, the next year I took an English course from basic to intermediate at the same institute to improve my English so I could expand my learning and read documentations, nowadays I am in the 5th semester of Computer Science at UAM, where I am learning a little of everything which I ended up being in love with the Web development, since I'm always willing to create things and use my creative thinking to solve problems.</p>
            <p>That's why I've been looking for internships and trainee programs to improve myself and specialize in software development.</p>

            <ul class="redes-sociais">
            <li><a href="https://www.linkedin.com/in/chrisbmineiro" title="minha pagina no linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="http://whatsapp.me/5511985154394" title="meu numero para contato" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/chrisbmineiro" title="meu github" target="_blank"><i class="fab fa-github"></i></a></li>
            </ul>
        </div>`;

    infos.innerHTML = language === 'english' ? englishContent : portugueseContent;
}

function toggleDarkMode() {
    screen.classList.toggle('dark');
    body.classList.toggle('dark');
}

// começar com o portugues
toggleLanguage('portuguese');
