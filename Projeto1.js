
console.clear();
const prompt = require('prompt-sync')();

//Variaveis contagem

let contsim = 0
let contnao = 0

//Variaveis perguntas

let pergunta1
let pergunta2
let pergunta3
let pergunta4
let pergunta5

//Apresentação do jogo.


let start = prompt("Começar o Jogo? Dugite: sim ou nao: ")
while (start != "sim" && start != "nao") {
    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Começar o Jogo? Dugite: sim ou nao: ");
}   

if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}else{
    console.log('\n\nCalor e Quintura\n\n')
    console.log(`Uma aventura épica nas terras Nordesticas para salvar o mundo da IRA daquela Que Não deve ser Mencionada!!!\n`);
}
//Identificação do Usuário

let nome = prompt("Digite o nome do seu Personagem: ");

console.log(`\nSe prepare para uma aventura em Calor e Quintura ${nome}!!!`)

//Background

console.log(`\n Sombras de Nuvens escuras rastejam como cobras migrando na direção do vento, o sol escaldante brilhando em meio as nuvens. Ao longe, em meio aos arbustos pode-se ver uma casa simples, construída não tão firmemente de madeira e barro. Ao se aproximar é possível perceber uma penumbra habitanto o interior daquele covíl! Aos fundos, swish...swish...swish... Mechendo Incansávelmente o caldeirão, está uma figura feminina IMPONENTE e AMEDRONTADORA. Aquela que não deve ser mensionada... O ser que despensa apresentações e impõe respeito com apenas um olhar... Aquela que com apenas um balançar de um galho de goiabeira faz multidões sumirem... Por Alguns chamada de Senhora, outrora chamada de Rainha por um Rei, porém apenas uma pessoa a chama de: \n`);
console.log();
console.log("MAINHA!!");
console.log();
console.log(" Mainha: O que danado esse peste desse menino ta correndo pra lá e pra cá nesse sol quente!?");
console.log(` Mainha: Ô ${nome} venha cá!!!`);
console.log(`Ao ser pego na armadilha de parecer não estar fazendo nada ${nome} recebe uma quest da Impiedosa MAINHA!`);

//Primeira pergunta

console.log(`\nVocê aceita o SUMMON daquela que não deve ser mencionada?\n`)
console.log(`\nPs.: todos aqueles que não aceitaram não podem mais contar suas histórias. \n`)
console.log("Digite sim ou não");
pergunta1 = prompt();

while (pergunta1 != "sim" && pergunta1 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta1 = prompt("");
   
}   
if (pergunta1 == "sim" ){
    contsim++
    console.clear();
    console.log(`\nCorajosamente ${nome} vai de encontro a MAINHA para receber sua quest!\n`);

    console.log(`\n Ô menino véi demorado, Venha LIGEIRO!! Eu trabalho nessa casa o dia todo e você não consegue atender quando eu te chamo! Esbravejou MAINHA com sua IRA chegando a níveis jamais vistos.\n`);

    console.log(`\n Vá ali na Budega de Zé comprar uma lata de KITUT preu botar no almoço, que faltou aqui! Acunhe logo e num arengue no caminho não! Vou cuspir no chão e se quando voltar tiver secado você vai ver! \n`);

    console.log(`\nMAINHA lhe designou uma Quest\n`);
    console.log(`Quest: ${nome}, Viaje até a famosa Venda do Mercador Zé para adquirir o itém Único "Carne de Unicórnio Conservada".\nVocê deve completar sua missão o mais rápido possível, pois, muitos perecerão de fome caso não chegue a tempo.\nMAINHA precisa do ítem até o sol atingir seu ponto mais alto para completar sua poção de Cura para FOME!`);

    console.log(`\n Rapidamente ${nome} pega algumas moedas de ouro, suficientes para comprar o Ítem Único e se prepara para seguir viajem. Quando de relance de olho observa MAINHA cuspindo no chão! Adquirindo forças jamais vistas, ${nome} sai em uma velocidade amedrontadora para cumprir sua missão!!! \n`);

    console.log(`\n Ao sair dos arredores do castelo, observando ao longe, ${nome} se depara com uma besta extremamente feroz! Por alguns conhecida como o Cão de Três Caabeças Guardião dos portões do Inferno Kerberos!!! Por outros conhecido como o Pincher mais Snaguinário do Sertão XIMBICA!!!!! \n`);

    console.log(`\nOlhando ao seu redor você se depara com Excalibur(galho de goiabeira), a Lendária espada que um dia pertenceu ao Rei e hoje faz parte do arsenal de MAINHA, jogada embaixo da Árvore Sagrada Iggdrasil(goiabeira do quintal)\nGostaria de equipar Excalibur?\nDigite sim ou nao:\n`)

}else if ( pergunta1 == "nao") {
    contnao++
    console.clear();
    console.log(`\n${nome}, Aterrorizado, sem saber o que possa ter feito para atrair a IRA de MAINHA!! Decide correr na direção contrária com todas suas forças. Porém, uma das Habilidades mais poderosas de Mainha foi invocada! HAVAIANA BUMERANG!! ${nome} recebe Dano Crítico e vai ao encontro de MAINHA com suor heróico escorrendo de seus olhos. \n`);

    console.log(`\n Ô menino véi demorado, Venha LIGEIRO!! Eu trabalho nessa casa o dia todo e você não consegue atender quando eu te chamo! Esbravejou MAINHA com sua IRA chegando a níveis jamais vistos.\n`);

    console.log(`\n Vá ali na Budega de Zé comprar uma lata de KITUT preu botar no almoço, que faltou aqui! Acunhe logo e num arengue no caminho não! Vou cuspir no chão e se quando voltar tiver secado você vai ver! \n`);

    console.log(`\nMAINHA lhe designou uma Quest\n`);
    console.log(`Quest: ${nome}, Viaje até a famosa Venda do Mercador Zé para adquirir o itém Único "Carne de Unicórnio Conservada".\nVocê deve completar sua missão o mais rápido possível, pois, muitos perecerão de fome caso não chegue a tempo.\nMAINHA precisa do ítem até o sol atingir seu ponto mais alto para completar sua poção de Cura para FOME!`);

    console.log(`\n Rapidamente ${nome} pega algumas moedas de ouro, suficientes para comprar o Ítem Único e se prepara para seguir viajem. Quando de relance de olho observa MAINHA cuspindo no chão! Adquirindo forças jamais vistas, ${nome} sai em uma velocidade amedrontadora para cumprir sua missão!!! \n`);

    console.log(`\n Ao sair dos arredores do castelo, observando ao longe, ${nome} se depara com uma besta extremamente feroz! Por alguns conhecida como o Cão de Três Caabeças Guardião dos portões do Inferno Kerberos!!! Por outros conhecido como o Pincher mais Snaguinário do Sertão XIMBICA!!!!! \n`);
    
    console.log(`\n\nOlhando ao seu redor você se depara com Excalibur(galho de goiabeira), a Lendária espada que um dia pertenceu ao Rei e hoje faz parte do arsenal de MAINHA, jogada embaixo da Árvore Sagrada Iggdrasil(goiabeira do quintal)\nGostaria de equipar Excalibur?\nDigite sim ou nao:\n`);

}


//Segunda pergunta


pergunta2 = prompt();

while (pergunta2 != "sim" && pergunta2 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta2 = prompt();
   
}   
if (pergunta2 == "sim" ){
    contsim++
    console.clear();
    console.log(`\nVocê equipou Excalibur e agora está preparado para enfrentar qualquer desafio que encontrar pelo caminho.\n`);
    console.log(`Você precisa decidir se irá enfrentar XIMBICA!`);

    console.log(`\n Digite sim ou não: \n`);

}else if ( pergunta2 == "nao") {
    contnao++
    console.clear();
    console.log(`\nVocê é um pacifista e prefere enfrentar seus inimigos com amor e carinho.\n`);
    console.log(`Você precisa decidir se irá enfrentar XIMBICA!`);

    console.log(`\n Digite sim ou não: \n`);
       
}

//Terceira pergunta


pergunta3 = prompt();

while (pergunta3 != "sim" && pergunta3 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta3 = prompt();
   
}   
if (pergunta3 == "sim" ){
    contsim++
    console.clear();
    console.log(`\n ${nome} como um bravo cavaleiro (com as pernas tremendo mais que vara verde) Você não teme mal algum e avança para enfrentar XIMBICA!!! Você corre em direção ao perigo sem fraquejar! Ao vê-lo avançando em sua direção XIMBICA se intimida e decide por sua segurança e corre para os pés de sua dona que estava varrendo a calçada.\n\n Triunfante em sua batalha você avança em sua QUEST!! \n`);
    console.log(`\nVocê conseguiu passar pelo seu primeiro desafio e segue em direção à Venda(Budega), porém, ao chegar lá você se depara com uma infinidade de poções de todos os efeitos(doces).\n${nome}, Consegue resistir a tentação de comprar algumas Poções(doces)?\n\nDigite sim ou nao:\n`)

}else if ( pergunta3 == "nao") {
    contnao++
    console.clear();
    console.log(`\n ${nome}, você se amedrontou e decidiu tentar passar despercebido por XIMBICA. Porém, você subestimou o faro infernal do guardião dos portões do inferno! XIMBICA SENTE O CHEIRO DO MEDO EM VOCÊ!\n\nAI AI AI AI!!!\nLadrou XIMBICA ao iniciar seu ataque.\nXIMBICA o ataca ferozmente!!\nVocê perdeu um bom tempo correndo de XIMBICA até conseguir despistá-lo.\n`);
    console.log(`\nVocê conseguiu passar pelo seu primeiro desafio e segue em direção à Venda(Budega), porém, ao chegar lá você se depara com uma infinidade de poções de todos os efeitos(doces).\n${nome}, Consegue resistir a tentação de comprar algumas Poções(doces)?\n\nDigite sim ou nao:\n`)
       
}


//Quarta Pergunta


pergunta4 = prompt();

while (pergunta4 != "sim" && pergunta4 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta4 = prompt();
   
}   
if (pergunta4 == "sim" ){
    contsim++
    console.clear();
    console.log(`\n${nome}, Você foi fiel ao seu objetivo e conseguiu resistir a tentação do mercador!\n\nAgora você pode comprar o Ítem de Quest.\n\nItem de Quest Adquirido!\n`);
    console.log(`\nEstando com o itém Único "Carne de Unicórnio Conservada"(lata de KITUT) em sua posse, ${nome} começa sua jornada de volta para entregá-lo a MAINHA\n`)
    console.log(`\nPorém, ao observar a rua depois da Venda(Budega), ${nome} se depara com uma batalha de dimensões nunca vistas acontecendo.\nUm grupo de Herois(Amigos da rua) estava enfrentando(jogando bola) o Exército dos Goblins(Turma da outra rua)\nO que você fará!?\n Vai ignorar os Herois?\n\nDigite sim ou nao: \n`)

}else if ( pergunta4 == "nao") {
    contnao++
    console.clear();
    console.log(`\n${nome}, Você não foi fiel ao seu objetivo e não conseguiu resistir a tentação do mercador!\n\nAgora você não tem mais dinheiro suficiente para comprar o Ítem de Quest.\n\nVendo o seu desespero o Mercador Zé decide abrir uma exeção e permitir que leve o Item de Quest com uma Nota Promissória(Fiado).\nPorém o que lhe espera lhe aguarda quando MAINHA descobrir!!!\n\nÍtem de Quest Adquirido!\n`);
    console.log(`\nEstando com o itém Único "Carne de Unicórnio Conservada"(lata de KITUT) em sua posse, ${nome} começa sua jornada de volta para entregá-lo a MAINHA\n`)
    console.log(`\nPorém, ao observar a rua depois da Venda(Budega), ${nome} se depara com uma batalha de dimensões nunca vistas acontecendo.\nUm grupo de Herois(Amigos da rua) estava enfrentando(jogando bola) o Exército dos Goblins(Turma da outra rua)\nO que você fará!?\n Vai ignorar os Heróis?\n\nDigite sim ou nao: \n`)  
}

//Quinta pergunta


pergunta5 = prompt();

while (pergunta5 != "sim" && pergunta5 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta5 = prompt("");
   
}   
if (pergunta5 == "sim" ){
    contsim++
    console.clear();
    console.log(`\nDepois de uma grande luta interna, ${nome} decide que completar sua Quest é a melhor Opção para a segurança de todos`);
    console.log(`\nVocê volta para o castelo e Entrega o ítem a MAINHA\n`)

}else if ( pergunta5 == "nao") {
    contnao++
    console.clear();
    console.log(`\n${nome} decide por Ajudar os Hérois na sua Batalha(jogo).\n`);
    console.log(`\nApesar de sair vitorioso na Batalha travada, ${nome} sabe que se não chegar a tempo para finalizar a QUEST, a GUERRA será perdita e tudo que o aguardará será EXCALIBUR(galho de goiabeira) \n`)
    console.log(`\nVocê volta para o castelo e Entrega o ítem a MAINHA\n`)
       
}


// Pontuação

console.log(`${nome} Sua pontuação final foi : ${contsim}`)

if ( contsim >0 & contsim <=2) {
    console.log(`${nome} Você falha, e sabe que a batalha com Excalibur pode não ser imediata, mas é inevitável!!`);
}
else if ( contsim == 3) {
    console.log(`${nome} Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco e fica a mercê da piedade de MAINHA!`);
}
else if ( contsim == 4) {
    console.log(`${nome} Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita e escapa por um triz de apa...uma batalha com Excalibur.`);
}
else if ( contsim == 5) {
    console.log(`${nome} Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações`);
}
else  {
    console.log(`${nome} Você falhou miseravelmente e já se depara com MAINHA empunhando Excalibur!!!`); 
}

// Respostas

console.log(`\n ${nome} Veja suas respostas\n`);
console.log(`1 - ${pergunta1}\n2 - ${pergunta2}\n3 - ${pergunta3}\n4 - ${pergunta4}\n5 - ${pergunta5}\n`);
console.log(`Você respondeu SIM ${contsim} vezes\nVocê respondeu NÃO ${contnao} vezes\n`);
