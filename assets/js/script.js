
//Objeto para album de fotos (Esta é a criação do objeto)
const albuns = [
    //aqui inicia um item, o primeiro se chama zero = "0"
    {
        thumbnail: 'assets/imagens/iquique.jpeg',         // este é um item que contain propriedades
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '13/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    },
    //aqui inicia o segundo item, o  chama um 
    {
        thumbnail: 'assets/imagens/iquique.jpeg',   // este é outro um item que contain propriedades
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '14/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    },
    {
        thumbnail: 'assets/imagens/iquique.jpeg',  // este é outro um item que contain propriedades
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '15/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    },
    {
        thumbnail: 'assets/imagens/iquique.jpeg',
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '16/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    },
    {
        thumbnail: 'assets/imagens/iquique.jpeg',
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '17/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    },
    {
        thumbnail: 'assets/imagens/iquique.jpeg',
        title: 'Visita no Chile 2025',
        description: 'Festas Pátrias com a família',
        date: '18/09/2025',
        photos: [
            'assets/imagens/fiestas-patrias-familia.jpeg',
            'assets/imagens/fondas-coronel.jpeg',
            'assets/imagens/frente-casa.jpeg'
        ]
    }
]


// Variaveis 
const themeContent = document.getElementById('theme');

// Menu 
const menu = document.createElement('header');

menu.innerHTML = `
    <div class="container-top">
        <a href="./imagens"><h1>Felipe Hooper<h1></a>
        <nav class="container-links">
            <ul class="links">
                <li><a href="">Home</a></li>
                <li><a href="">Quem sou eu</a></li>
                <li><a href="">Meus serviços</a></li>
                <li><a href="">Meus passatempos</a></li>
                <li><a href="">Lugares que visitei</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    </div>
`;
// Banner
const bannerContent = document.createElement('section');

bannerContent.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Seja bem-vindo</h1>
            <h2>Aqui você irá conhecer um pouco sobre minha história e os lugares que frequento</h2>
        </div>
    </div>
</div>
`;

// About me

const aboutMe = document.createElement('section');

aboutMe.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-6">
            <h1>Conheça a minha história</h1>
            <p align="justify">Nasci no Chile, onde me formei como professor de inglês e licenciado em educação. Em 2015, movido por um desejo de novos horizontes,
                decidi deixar meu país e me aventurar no Brasil, sem sequer falar português. A chegada foi desafiadora: uma nova cultura, 
                um idioma desconhecido e a necessidade de recomeçar. Com determinação, mergulhei no aprendizado do português e, ao longo do tempo, construí uma nova trajetória. 
                Aqui, me formei como intérprete de conferência, uma conquista que me permitiu conectar pessoas e ideias em eventos de grande porte. Mas meu desejo de aprender não parou por aí. 
                Atualmente, estou no último período da faculdade de Engenharia de Software, um campo que me fascina pela sua capacidade de transformar o mundo. Além disso, tenho a honra de estagiar em uma fundação de grande prestígio, 
                onde aplico meus conhecimentos e cresço profissionalmente. Minha jornada é marcada pela resiliência, aprendizado contínuo e paixão por desafios.</p>
        </div>
        <div class="col-6">
            <img src="" alt="" />
        </div>
    </div>
</div>
`;

// Meus Serviços

const myServices = document.createElement('section');

myServices.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1>Meus Serviços</h1>
                    <p align="justify">Sou professor de inglês e espanhol, com ampla experiência no ensino de idiomas para diferentes níveis e idades. 
                    Além disso, atuo como intérprete de conferências, facilitando a comunicação em eventos internacionais. 
                    Meu trabalho une paixão por línguas e dedicação à excelência, garantindo aprendizado eficaz e traduções precisas em contextos profissionais e acadêmicos."</p>
                </div>
                <div class="col-6">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
`;

// Meus passatempos 

const meusPassatempos = document.createElement('section');

meusPassatempos.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1>Meus dotes de chef</h1>
                    <p align="justify">Tenho habilidades sólidas na cozinha, com domínio no preparo de pratos variados, desde refeições simples até receitas mais elaboradas. 
                    Sou criativo, organizado(a) e atento(a) aos detalhes, garantindo sabor e apresentação. Cozinho com paixão, 
                    sempre buscando aprimorar técnicas e experimentar novos ingredientes para encantar quem prova minha comida."</p>
                </div>
                <div class="col-6">
                    <img src="assets/imagens/cooking.jpeg" alt="cozinhando" />
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h1>Esportes</h1>
                    <p align="justify">Adoro andar de bicicleta, é uma das minhas atividades favoritas para relaxar e me conectar com a natureza. 
                    Pedalar me traz liberdade, bem-estar e energia. Seja em trilhas, parques ou pelas ruas da cidade, cada passeio é uma nova descoberta. 
                    A sensação do vento no rosto torna tudo ainda mais especial e revigorante.</p>
                </div>
                <div class="col-6">
                    <img src="assets/imagens/cycling.jpeg" alt="cycling" />
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h1>Paseios pela cidade</h1>
                    <p align="justify">O Pão de Açúcar é um dos meus lugares favoritos para visitar com a família. 
                    A vista deslumbrante do Rio de Janeiro, com as praias e montanhas ao fundo, é inesquecível. 
                    Subir de bondinho e apreciar a cidade de um ângulo único é sempre uma experiência incrível, 
                    cheia de momentos especiais e paisagens que encantam a todos.</p>
                </div>
                <div class="col-6">
                    <img src="assets/imagens/urca-pao-acucar.jpeg" alt="Urca" />
                </div>
            </div>
        </div>
`;

//Section trips 

const myTrips = document.createElement('section');

myTrips.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Minhas Viajens</h1>
                    <p>Eu gosto de viajar para diferentes países e aprender da cultura local</p>
                </div>
            </div>
            <div class="row">
            ${albuns.map((album, index) => `
                <div class="col-4">
                    <div class="card" id="id-${index}">
                        <div class="card-header">
                            <img src="${album.thumbnail}" alt="${album.title}" />
                        </div>
                        <div class="card-body">
                            <h3>${album.title}</h3>
                            <p>${album.description}</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn-open" id="btn-card">Confira a galeria</button>
                        </div>
                    </div>
                </div> 
           `)}
           </div>
        </div>
`;

//O modal é uma janela que sobrepõe todas as outras sessões do site

const modalFotos = document.createElement('div');

modalFotos.classList.add('modal-fotos');

modalFotos.innerHTML = `
    <div class="modal-overlay">
        <div class="modal-content">
            <button>x</button>
            <div class="modal-body"></div>
            <div class="modal-footer">
            <button>Fechar</button>
            </div>
        </div>
        
    </div>
`
//Evento de acionar o Modal
const modalBtns = document.querySelectorAll('.btn-open');
const modalFotos = document.querySelector('.modal-fotos');

modalBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Aqui você pode usar o index ou outro atributo para controlar o conteúdo do modal
    console.log('Botão clicado:', index);

    // Exibe o modal
    modalFotos.style.display = 'block';
  });
});


// Renderização do tema (coloque um filho dentro theme content)
themeContent.appendChild(menu);
themeContent.appendChild(bannerContent);
themeContent.appendChild(aboutMe);
themeContent.appendChild(myServices);
themeContent.appendChild(meusPassatempos);
themeContent.appendChild(myTrips);
themeContent.appendChild(modalFotos);







