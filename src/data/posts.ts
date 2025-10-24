export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-que-e-cbd',
    title: 'O que é CBD? Entenda os fundamentos do canabidiol',
    excerpt:
      'Um guia introdutório sobre a molécula de canabidiol, seus usos estudados e como ela se diferencia de outros canabinoides.',
    publishedAt: '2024-04-15',
    readingTime: '6 min',
    content: [
      'O canabidiol (CBD) é um dos muitos compostos encontrados na planta Cannabis sativa. Diferentemente do THC, ele não possui efeitos psicoativos e tem sido estudado por seu potencial terapêutico em diversas áreas da medicina.',
      'No Brasil, o uso do CBD é regulamentado pela Anvisa desde 2014 para fins medicinais, mediante prescrição e importação especiais. Isso significa que o paciente precisa de acompanhamento médico e de laudos atualizados para acessar produtos seguros.',
      'Este conteúdo é estritamente educativo e busca orientar pacientes e profissionais de saúde sobre os cuidados necessários para integrar o CBD de forma responsável em planos terapêuticos.',
    ],
  },
  {
    slug: 'como-funciona-a-importacao',
    title: 'Como funciona a importação de produtos com CBD no Brasil',
    excerpt:
      'Passo a passo do processo regulatório para pacientes que recebem prescrição médica e precisam importar produtos com canabidiol.',
    publishedAt: '2024-05-10',
    readingTime: '7 min',
    content: [
      'Após a avaliação médica e emissão da prescrição, o paciente deve reunir documentos como laudos, termo de responsabilidade e relatório médico atualizado.',
      'Com a documentação aprovada pela Anvisa, a importação pode ser realizada junto a fornecedores internacionais que apresentem certificado de análise (COA), controle de qualidade e rastreabilidade.',
      'A equipe Desertmoon auxilia no esclarecimento de dúvidas sobre logística, prazos e cumprimento das normas vigentes, garantindo um processo seguro e transparente.',
    ],
  },
  {
    slug: 'pesquisa-cientifica-em-andamento',
    title: 'Pesquisa científica e evidências sobre o uso medicinal do CBD',
    excerpt:
      'Panorama das principais linhas de pesquisa e estudos clínicos em desenvolvimento no Brasil e no exterior.',
    publishedAt: '2024-06-22',
    readingTime: '5 min',
    content: [
      'A literatura científica sobre CBD vem se expandindo rapidamente, abordando campos como neurologia, psiquiatria, dor crônica e cuidados paliativos.',
      'Os protocolos Desertmoon priorizam evidências robustas, revisões sistemáticas e consensos de sociedades médicas, evitando promessas sem respaldo ou generalizações.',
      'Profissionais associados recebem atualizações frequentes, fichas técnicas e COAs para garantir prescrições personalizadas e rastreáveis.',
    ],
  },
];
