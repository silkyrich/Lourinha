export type PhraseSet = {
  title: string
  rows: { pt: string; en: string }[]
}

export const phraseSets: PhraseSet[] = [
  {
    title: 'The unavoidables',
    rows: [
      { pt: 'Olá', en: 'Hello' },
      { pt: 'Bom dia / Boa tarde / Boa noite', en: 'Good morning / afternoon / evening' },
      { pt: 'Obrigado / Obrigada', en: 'Thank you — ending matches who says it, not who you\'re thanking' },
      { pt: 'Por favor', en: 'Please' },
      { pt: 'Desculpe', en: 'Sorry / excuse me' },
      { pt: 'Fala inglês?', en: 'Do you speak English?' },
      { pt: 'A conta, por favor', en: 'The bill, please' },
      { pt: 'Duas cervejas, por favor', en: 'Two beers, please' },
      { pt: 'Saúde!', en: 'Cheers' },
    ],
  },
  {
    title: 'Actually useful for skating',
    rows: [
      { pt: 'Onde fica a pista de skate?', en: 'Where\'s the skatepark?' },
      { pt: 'Podemos andar de skate aqui?', en: 'Can we skate here?' },
      { pt: 'Sabe um sítio bom para andar?', en: 'Do you know a good spot to skate?' },
      { pt: 'O chão é liso?', en: 'Is the surface smooth?' },
      { pt: 'Onde compro rodas / lixa?', en: 'Where can I buy wheels / griptape?' },
      { pt: 'Foi brutal!', en: 'That was sick! (Locals use it too.)' },
      { pt: 'Estou bem.', en: 'I\'m fine. (Says the person on the floor.)' },
    ],
  },
  {
    title: 'Phrases that buy time when something has gone wrong',
    rows: [
      { pt: 'Desculpe, foi sem querer.', en: 'Sorry, it wasn\'t on purpose.' },
      { pt: 'Desculpe a parede, foi o vento.', en: 'Sorry about the wall, it was the wind.' },
      { pt: 'Pago já.', en: 'I\'ll pay right now. (Magic words.)' },
      { pt: 'Já vamos embora, prometo.', en: 'We\'re leaving right now, I promise.' },
      { pt: 'Não sou eu o líder, é aquele.', en: 'I\'m not the leader, he is. (Point at the most innocent member of the group.)' },
      { pt: 'Precisamos de gelo. Para o joelho, não para a bebida.', en: 'We need ice. For the knee, not the drink.' },
      { pt: 'Já morreu alguém neste corrimão?', en: 'Has anyone died on this rail?' },
      { pt: 'O segurança é rápido?', en: 'Is the security guard fast?' },
      { pt: 'Somos vinte e um. Faltam dois.', en: 'There are twenty-one of us. Two are missing.' },
      { pt: 'O meu amigo diz que está bem, mas não está.', en: 'My friend says he\'s fine, but he\'s not.' },
      { pt: 'Mais duas, e uma para o motorista que não bebe.', en: 'Two more, and one for the driver who isn\'t drinking.' },
      { pt: 'Para onde vai a noite depois da meia-noite?', en: 'Where does the night go after midnight?' },
    ],
  },
]
