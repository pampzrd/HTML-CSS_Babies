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

    let titulosAr = ["Sanduíche de Carne","Carne de forno com Batatas","Dragonet Alla Diavola","Banha Defumada de Porco","Sopa de Carne com Legumes","Confit de Fígado de Frango","Espetinhos de Carne","Lamen de Carne","Milanesa de Carne","Goulash"];

    let ingredientesAr =["- Contra-Filé 250g\n" +
    "- Óleo\n" +
    "- Sal Grosso à gosto\n" +
    "- Vinho ou Vodka à gosto\n" +
    "- Pimenta à gosto\n" +
    "- Duas fatias de pão italiano","\n" +
    "    - 1 peça de miolo ou coração de alcatra (cerca de 1,3 a 1,5 kg)\n" +
    "    - 2 colheres de páprica doce\n" +
    "    - 2 colheres de sopa de sal ou sal de parilla\n" +
    "    - 10 raminhos de tomilho fresco (ou a gosto)\n" +
    "    - 1/4 de colher de chá de pimenta-do-reino moída na hora (ou a gosto)\n" +
    "    - 3 colheres de sopa de óleo ou azeite\n" +
    "    - 6 batatas-inglesas (800 gramas)\n" +
    "    - 1/2 colher de sopa de sal (ou a gosto)\n" +
    "    - 1/2 colher de sopa de páprica defumada (ou a gosto)\n" +
    "    - 2 colheres de sopa de azeite de oliva (ou a gosto)\n","- 1 frango , caipira e jovem, pesando 1,25–1,5 kg, aberto\n" +
    "- 1 colher de sopa de sal marinho grosso\n" +
    "- 1 colher de chá de pimenta-do-reino preta\n" +
    "- 1 colher de chá de alho em pó concentrado\n" +
    "- 1 colher de chá de pimenta caiena\n" +
    "- 1 colher de chá de páprica, defumada ou picante\n" +
    "- azeite, 4–5 colheres de sopa","- 1 peça grande de toucinho e gorduras de porco." +"\n" +
    "- Manjericão e Alecrim fresco.","- 500 g de músculo em cubos\n" +
    "    cenoura\n" +
    "    - 2 cenouras médias picadas\n" +
    "    abobrinha\n" +
    "    - 2 abobrinhas picadas\n" +
    "    batata baroa\n" +
    "    - 4 mandioquinhas picadas\n" +
    "    batata\n" +
    "    - 2 batatas picadas\n" +
    "    chuchu\n" +
    "    - 1 chuchu grande picado\n" +
    "    - agrião\n" +
    "    algumas folhas de agrião e ou couve picado\n" +
    "    - caldo de legumes\n" +
    "    - 1 cubo de caldo de legumes\n" +
    "    cebola\n" +
    "    - 1 cebola pequena picada\n" +
    "    alho\n" +
    "    - 1 dente de alho amassado\n"+
    "    - sal a gosto\n" +
    "    - óleo para fritar o alho e a cebola\n" +
    "    - macarrão\n" +
    "    - 1 e 1/2 xícaras (chá) de macarrão argolinha ou de letrinhas",];


    let conteudoAr = ["01- Aqueça a frigideira.\n\n" +
    "02- Salpique sal e pimenta em ambos os lados da carne.\n\n" +
    "03- Coloque óleo na frigideira.\n\n" +
    "04- Sele os lados da carne 1 minuto em fogo alto e 1 minuto em fogo baixo.\n\n" +
    "05- Vire a carne e cozinhe por mais 30 segundos em fogo alto e 1 minuto emeio em fogo baixo.\n\n" +
    "06- Despeje um pouco de vinho ou vodka sobre a carne e cozinhe até o álcool evaporar.\n\n" +
    "07- Corte a carne e coloque entre duas fatias de pão italiano.\n\n" +
    "Extra- Deixar a carne descansar por 3 -5 minutos ela ficará mais suculenta.\n\n","01- Coloque a carne em uma tigela e tempere com a páprica, sal, pimenta-do-reino e tomilho. Com as mãos, espalhe bem os ingredientes pela peça de carne. Deixe a carne descansar na geladeira por, pelo menos, 2 horas - se você tiver tempo, deixe de um dia para o outro; \n\n02- Enquanto isso, lave e corte as batatas em meia-lua (tipo rústica) e tempere com sal, páprica, pimenta-do-reino e um pouco de azeite de oliva. Misture bem os temperos nas batatas; \n\n03- Retire a carne da geladeira 30 minutos antes de selar e assar ela. Preaqueça o forno a 200ºC por uns 20 minutos. Com um papel-toalha, seque a carne para retirar o excesso de água e ela selar no óleo mais facilmente; \n\n04- Em uma frigideira, em fogo alto, aqueça o óleo e sele a carne de todos os lados até dourar - utilize um pegador ou garfo de churrasqueiro para virar a carne. Desligue o fogo; \n\n05- Coloque a carne no meio de uma assadeira e distribua as batatas nas laterais. Distribua alguns ramos de tomilho umedecidos com azeite; \n\n06- Leve para assar no forno preaquecido e deixe por cerca de 30 a 45 minutos, ou até a carne e as batatas ficarem macias. Na metade do tempo, vire as batatas para dourar uniformemente - lembrando que o tempo pode variar pela potência do forno e tamanho da peça de carne; \n\n07- Retire do forno, deixe a carne descansar por 15 minutos e, depois, com uma faca afiada, fatie a carne. Sirva com as batatas, saladas, arroz soltinho e fresco! ","\n" +
    "01- " +
    "Coloque o sal, a pimenta, o alho em pó, a pimenta caiena e a páprica em um moedor de especiarias ou pilão tradicional. Moa até formar um pó fino.\n\n" +
    "02- " +
    "Reserve 1 colher de sopa da mistura em uma tigela pequena e esfregue bem todo o frango com o restante\n\n" +
    "03- " +
    "Deixe o frango temperado descansar em temperatura ambiente, coberto, por cerca de 30 a 45 minutos\n\n" +
    "04- " +
    "Prepare uma churrasqueira a carvão. Assim que as brasas estiverem acesas e acinzentadas, grelhe o frango de cada lado por 5 a 7 minutos, até que a pele esteja levemente carbonizada.\n\n" +
    "05- " +
    "Transfira o frango para uma grande bandeja de alumínio própria para grelhar\n\n" +
    "06- " +
    "Adicione o azeite ao tempero seco reservado e misture. Pincele toda a parte superior do frango.\n\n" +
    "07- " +
    "Retorne a panela à churrasqueira e feche a tampa. Cozinhe a 200–225 °C por mais 20–30 minutos. Isso também pode ser feito no forno.\n\n" +
    "08- " +
    "Decore com alecrim fresco (opcional) e sirva com seu molho picante favorito ou maionese picante.\n\n",    "01- Corte a gordura em cubos.\n\n" +
    "02- coloque em uma panela e aqueça aos poucos.\n\n" +
    "03- Pressione a gordura lentamente até soltar o óleo.\n\n" +
    "04- Coloque as ervas a gosto.\n\n" +"05- Desligue o fogo e espere esfriar.\n\n"+"05- Passe o óleo por uma peneira e despeje em um recipiente.\n\n"+"06- Guarde na geladeira.\n\n","01- Em uma panela de pressão, dourar o alho e a cebola.\n\n" +
    "02- Colocar a carne, deixar dourar e cozinhar em água com o caldo de legumes e o sal por 30 minutos, ou até que a carne fique bem molinha.\n\n" +
    "03- Em seguida junte todos os legumes e a verdura picada.\n\n" +
    "04- Cozinhe por mais 10 a 15 minutos na pressão, por último adicione o macarrão e deixe cozinhar",""];


    const titulos = document.getElementById('titulo-receita');
    const ingredientes= document.getElementById('ingredientes');
    const conteudo=document.getElementById('conteudo-receita');
    const imgDestaque=document.getElementById('imgDestaque')
    imgDestaque.src=imgsDestaqueArr[index];
    titulos.innerText=titulosAr[index];
    ingredientes.innerText=ingredientesAr[index];
    conteudo.innerText=conteudoAr[index];
}
