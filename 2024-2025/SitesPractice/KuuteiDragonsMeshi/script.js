import {open} from "sqlite";
import sqlite3 from "sqlite3";

function abrirModal(){
    const modal = document.getElementById("modal-content");
    modal.classList.add('abrir');
    modal.addEventListener('click',(e)=>{
        if(e.target.id=='modal-content'|| e.target.id=='fechar'){
            modal.classList.remove('abrir');
        }
    })

}

function retornarImagesUrls(index){
    let imgUrl=["assets/imgs/Jiro.png","assets/imgs/Katja.png","assets/imgs/Mika1.png","assets/imgs/Takita.png","assets/imgs/Vanabelle.png","assets/imgs/Yoshi.png"];
    return imgUrl[index]

}

//Função para colocar o valor CAMINHO URL no link
function build(){
    for(let contador = 0; contador<=5;contador++){
        const linkImage= document.getElementById('a'+contador);
        linkImage.href=retornarImagesUrls(contador)
    }

    /*const linkImage = document.getElementById('a1');
    linkImage.href=retornarImagesUrls(0);*/
}
build();


//Atribuir numero no retornar e usar como index
function  retornarConteudo(index){
    this.index=index;

    let imgsDestaqueArr =["assets/imgs/pexels-brigitte-tohm-36757-186861.jpg","assets/imgs/pexels-valeriya-1639561.jpg","assets/imgs/img61232.whqc_900x600q90fpt565fpl499.webp","assets/imgs/2329_Z.jpg","assets/imgs/pexels-summerstock-360939.jpg","assets/imgs/online_culinary_school_chicken_liver_pate-1.jpg","assets/imgs/pexels-pedrofurtadoo-28902897.jpg","assets/imgs/pexels-minan1398-698549.jpg","assets/imgs/pexels-qjpioneer-5305438.jpg","assets/imgs/pexels-angela-khebou-259135285-12931072.jpg"];

    let titulosAr = ["Sanduíche de Carne","Carne de forno com Batatas","Dragonet Alla Diavola","Banha Aromatizada de Porco","Sopa de Carne com Legumes","Patê de Fígado de Frango","Espetinhos de Carne","Lamen de Carne","Milanesa de Carne","Goulash"];

    let ingredientesAr =[`- Contra-Filé 250g
    - Óleo
    - Sal Grosso à gosto
    - Vinho ou Vodka à gosto
    - Pimenta à gosto
    - Duas fatias de pão italiano`,
        `- 1 peça de miolo ou coração de alcatra (cerca de 1,3 a 1,5 kg) 
        - 2 colheres de páprica doce
        - 2 colheres de sopa de sal ou sal de parilla
        - 10 raminhos de tomilho fresco (ou a gosto)
        - 1/4 de colher de chá de pimenta-do-reino moída na hora (ou a gosto)
        - 3 colheres de sopa de óleo ou azeite
        - 6 batatas-inglesas (800 gramas)
        - 1/2 colher de sopa de sal (ou a gosto)
        - 1/2 colher de sopa de páprica defumada (ou a gosto)
        - 2 colheres de sopa de azeite de oliva (ou a gosto)
        `
    ,
        `- 1 frango , caipira e jovem, pesando 1,25–1,5 kg, aberto
        - 1 colher de sopa de sal marinho grosso
        - 1 colher de chá de pimenta-do-reino preta
        - 1 colher de chá de alho em pó concentrado
        - 1 colher de chá de pimenta caiena
        - 1 colher de chá de páprica, defumada ou picante
        - azeite, 4–5 colheres de sopa`

        ,

        `- 1 peça grande de toucinho e gorduras de porco.
        - Manjericão e Alecrim fresco.`
        ,
        `- 500 g de músculo em cubos
        - 2 cenouras médias picadas
        - 2 abobrinhas picadas
        - 4 mandioquinhas picadas
        - 2 batatas picadas
        - 1 chuchu grande picado
        - agrião
        - 1 cubo de caldo de legumes
        - 1 cebola pequena picada
        - 1 dente de alho amassado
        - sal a gosto
        - óleo para fritar o alho e a cebola
        - macarrão
        - 1 e 1/2 xícaras (chá) de macarrão argolinha ou de letrinhas`
        ,
        `
        - 250 g de fígado de galinha
        - ½ cebola pequena
        - 2 colheres (sopa) de conhaque
        - 1 colher (sopa) de caldo de limão
        - 1 colher (sopa) de azeite
        - 50 g de manteiga em temperatura ambiente
        - 1 ramo de tomilho
        - sal e pimenta-do-reino moída na hora a gosto
        `
        ,
        `
        - 500 g de alcatra cortada em cubos
        - 1 sachê de tempero
        - 1 colher (chá) de sal
        - 1 cebola média cortada em gomos
        - 2 tomates pequenos, sem sementes, cortados em 8 partes
        - óleo
        - 2 colheres (sopa) de óleo

        `
        ,

        `
         - 300g de massa ramen
         - 80g de folhas de espinafre
         - 2 ovos
         - 180g de rebentos de bambu (em conserva)
         - 2 alhos franceses
         - 4g de folhas de alga marinha nori
         - 20g de gengibre
         - 2 colheres de chá de sementes de sésamo
         - 100g de porco assado
         - 100g de peito de frango cozido
         - 60ml Kikkoman Molho de Soja Fermentado Naturalmente
         - 18ml de molho de peixe
         - 1 litro de caldo dashi (alternativamente caldo claro)
         - Pimenta
        `
        ,
        `
        - 1/2 kg de bife patinho, alcatra ou mignon
        - 3 ovos batidos
        - farinha de rosca a gosto
        - farinha de trigo a gosto
        - 3 dentes de alho amassados (opcional)
        - sal a gosto
        - pimenta-do-reino a gosto
        `
        ,
        `
        - 1 kg de pernil ou paleta em cubos
        - farinha de trigo para polvilhar
        - 2 colheres (chá) de páprica doce
        - 2 colheres (chá) de páprica picante
        - 100 g de manteiga
        - 2 colheres (sopa) de azeite
        - 1 dente de alho
        - 4 cebolas picadas
        - 3 colheres (sopa) de vodca
        - 2 maçãs descascadas e raladas
        - ½ xícara (chá) de vinho branco seco
        - 1,5 litro de caldo de vitela ou de carne
        - 1 pimentão vermelho
        - 1 pimentão amarelo
        - caldo de ½ limão-siciliano
        - raspas de ½ limão-siciliano
        - ½ xícara (chá) de creme de leite fresco
        - tomilho fresco a gosto
        - sal e pimenta-do-reino moída na hora a gosto
        `

    ];


    let conteudoAr = [`
        01- Aqueça a frigideira.
        02- Salpique sal e pimenta em ambos os lados da carne.
        03- Coloque óleo na frigideira.
        04- Sele os lados da carne 1 minuto em fogo alto e 1 minuto em fogo baixo.
        05- Vire a carne e cozinhe por mais 30 segundos em fogo alto e 1 minuto e meio em fogo baixo.
        06- Despeje um pouco de vinho ou vodka sobre a carne e cozinhe até o álcool evaporar.
        07- Corte a carne e coloque entre duas fatias de pão italiano.
        Extra- Deixar a carne descansar por 3 -5 minutos ela ficará mais suculenta.`
        ,
        `
        01- Coloque a carne em uma tigela e tempere com a páprica, sal, pimenta-do-reino e tomilho. Com as mãos, espalhe bem os ingredientes pela peça de carne. Deixe a carne descansar na geladeira por, pelo menos, 2 horas - se você tiver tempo, deixe de um dia para o outro;
        
        02- Enquanto isso, lave e corte as batatas em meia-lua (tipo rústica) e tempere com sal, páprica, pimenta-do-reino e um pouco de azeite de oliva. Misture bem os temperos nas batatas;
        
        03- Retire a carne da geladeira 30 minutos antes de selar e assar ela. Preaqueça o forno a 200ºC por uns 20 minutos. Com um papel-toalha, seque a carne para retirar o excesso de água e ela selar no óleo mais facilmente; 
        
        04- Em uma frigideira, em fogo alto, aqueça o óleo e sele a carne de todos os lados até dourar - utilize um pegador ou garfo de churrasqueiro para virar a carne. Desligue o fogo;
        
        05- Coloque a carne no meio de uma assadeira e distribua as batatas nas laterais. Distribua alguns ramos de tomilho umedecidos com azeite;
        
        06- Leve para assar no forno preaquecido e deixe por cerca de 30 a 45 minutos, ou até a carne e as batatas ficarem macias. Na metade do tempo, vire as batatas para dourar uniformemente - lembrando que o tempo pode variar pela potência do forno e tamanho da peça de carne;
        
        07- Retire do forno, deixe a carne descansar por 15 minutos e, depois, com uma faca afiada, fatie a carne. Sirva com as batatas, saladas, arroz soltinho e fresco!`
        ,
        `
        01- Coloque o sal, a pimenta, o alho em pó, a pimenta caiena e a páprica em um moedor de especiarias ou pilão tradicional. Moa até formar um pó fino.
        02- Reserve 1 colher de sopa da mistura em uma tigela pequena e esfregue bem todo o frango com o restante
        03- Deixe o frango temperado descansar em temperatura ambiente, coberto, por cerca de 30 a 45 minutos
        04- Prepare uma churrasqueira a carvão. Assim que as brasas estiverem acesas e acinzentadas, grelhe o frango de cada lado por 5 a 7 minutos, até que a pele esteja levemente carbonizada.
        05- Transfira o frango para uma grande bandeja de alumínio própria para grelhar
        06- Adicione o azeite ao tempero seco reservado e misture. Pincele toda a parte superior do frango.
        07-  Retorne a panela à churrasqueira e feche a tampa. Cozinhe a 200–225 °C por mais 20–30 minutos. Isso também pode ser feito no forno.
        08- Decore com alecrim fresco (opcional) e sirva com seu molho picante favorito ou maionese picante.
        `
        ,
        `
        01- Corte a gordura em cubos.
        02- coloque em uma panela e aqueça aos poucos.
        03- Pressione a gordura lentamente até soltar o óleo.
        04- Coloque as ervas a gosto.
        05- Desligue o fogo e espere esfriar.
        06- Passe o óleo por uma peneira e despeje em um recipiente.
        07- Guarde na geladeira.
        `
        ,
        `
        01- Em uma panela de pressão, dourar o alho e a cebola.
        02- Colocar a carne, deixar dourar e cozinhar em água com o caldo de legumes e o sal por 30 minutos, ou até que a carne fique bem molinha.
        03- Em seguida junte todos os legumes e a verdura picada.
        04- Cozinhe por mais 10 a 15 minutos na pressão, por último adicione o macarrão e deixe cozinhar.
        `
        ,
        `
        01- Lave sob água corrente, seque e limpe o fígado: com uma faca pequena, descarte as veias e nervos. Corte em pedaços médios e transfira para uma tigela.

        02- Acrescente as folhas de tomilho debulhadas e o conhaque. Tempere com sal e pimenta e deixe marinar por 10 minutos. Enquanto isso, descasque e corte a cebola em meias-luas finas.
    
        03- Leve uma frigideira ao fogo médio. Quando aquecer, regue com o azeite, adicione a cebola e refogue por 3 minutos até começar a dourar. Acrescente o fígado e refogue por 5 minutos, até dourar e cozinhar completamente.
    
        04- Transfira o fígado refogado, com a cebola, para o processador de alimentos. Junte o caldo de limão, a manteiga e bata até formar uma pasta lisa. Prove e, se necessário, tempere com mais sal.
    
        05- Coloque o patê numa tigela e leve à geladeira por, no mínimo, 30 minutos para esfriar e atingir a consistência ideal antes de servir. Se preferir, prepare o fígado no dia anterior e retire da geladeira 15 minutos antes de servir para ficar mais macio.
        `
    ,
    `
    01-Em uma tigela, coloque a carne, polvilhe com o sachê de tempero e o sal, e deixe tomar gosto na geladeira por 15 minutos. 

    02- Monte 8 espetinhos em palitos para churrasco intercalando pedaços de carne, cebola e tomate.

    03- Em uma frigideira grande, aqueça 1 colher (sopa) de óleo em fogo alto e frite os espetinhos, aos poucos, por cerca de 4 minutos de cada lado, ou até ficarem dourados, repondo o óleo quando necessário.

    04- Retire do fogo e sirva em seguida.
    `
    ,
        `
    01- Cozer a massa al dente e passar por água. Escaldar as folhas de espinafre durante 1 segundo e passar por água com gelo. Fazer um furo superficial na casca dos ovos, colocar em água a ferver e cozer durante 6 minutos para que ainda fiquem ligeiramente moles. Escorrer e passar por água fria.

    02- Escorrer os rebentos de bambu. Cortar os alhos franceses e as algas marinhas em fatias finas. Descascar o gengibre e cortar em 4 fatias finas (uma para cada prato). Alourar o sésamo numa frigideira, mexendo sempre, até ficar dourado. Cortar o porco assado e o peito de frango em fatias.
    
    03- Deitar 1 colher de sopa de Molho de Soja fermentado naturalmente e 1 colher de chá de molho de peixe em cada tigela de sopa previamente aquecida. Distribuir os ingredientes preparados e encher com o caldo a ferver. Por fim, descascar os ovos, cortar ao meio e juntar 1 metade de ovo a cada tigela. Temperar eventualmente com pimenta.


        `
        ,
        `
    01- Tempere os bifes a gosto e reserve.
    02- Em um prato fundo, bata os ovos até obter uma mistura homogênea.
    03- Separe a farinha de rosca e a farinha de trigo em pratos diferentes.
    04- Passe os bifes na farinha de trigo, depois nos ovos batidos e na farinha de rosca.
    05- Em uma frigideira, frite os bifes em óleo quente até que fiquem dourados.
    06- Ao retirar da frigideira, coloque os bifes em papel toalha para que a gordura em excesso seja absorvida.
        `
        ,
     `
     01- Preaqueça o forno a 180ºC (temperatura média).
    02- Corte a tampa dos pimentões e retire as sementes. Coloque os pimentões numa assadeira, leve ao forno preaquecido e deixe assar por 1 hora. Em seguida, descasque e reserve.
    03- Numa tigela, tempere os cubos de carne com a páprica doce, a páprica picante, sal e pimenta-do-reino a gosto. Polvilhe com um pouco de farinha de trigo. Isso fará com que a carne fique com uma cor mais bonita. Reserve.
    04- Leve uma panela ao fogo médio. Quando aquecer, coloque os cubos de carne e deixe que dourem por igual. Desligue o fogo e transfira a carne para uma tigela.
    05- Espete o dente de alho com um garfo e esfregue no fundo da panela que foi usada para selar a carne.
    06- Leve a panela ao fogo médio e acrescente a cebola. Quando a cebola secar um pouco, coloque o azeite, a manteiga e as maçãs raladas. Misture rapidamente e adicione a carne. Deixe dourar.
    07- A carne deverá ser flambada com a vodka. Para isso, com uma colher, empurre todos os cubos de carne para um dos lados da panela. No lado vazio, coloque a vodka e, com cuidado, deixe este lado da panela levemente inclinado sobre a chama do fogão. Uma chama deverá tomar conta do fundo da panela.
    08- Regue a carne com o vinho branco e deixe que evapore. Acrescente lentamente o caldo de carne e as folhas de tomilho. Quando o caldo tiver secado, deixe cozinhar por mais 5 minutos e desligue o fogo.
    09- No liquidificador, bata os pimentões assados com um pouco do caldo de vitela. Coloque este creme na panela com a carne. Deixe ferver, adicione o suco e as raspas de limão e o creme de leite fresco. Verifique os temperos e reserve.
    `
    ];


    const titulos = document.getElementById('titulo-receita');
    const ingredientes= document.getElementById('ingredientes');
    const conteudo=document.getElementById('conteudo-receita');
    const imgDestaque=document.getElementById('imgDestaque')
    imgDestaque.src=imgsDestaqueArr[index];
    titulos.innerText=titulosAr[index];
    ingredientes.innerText=ingredientesAr[index];
    conteudo.innerText=conteudoAr[index];
}

function testarExibirDadosBanco(){
    var dadosApp = require('dados');
    const ingredientes=document.getElementById('ingredientes');
    ingredientes.addEventListener('click',function(){
        //ingredientes.innerText=dadosApp;
        console.log(JSON.stringify(dados));
    })

}