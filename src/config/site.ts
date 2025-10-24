export const siteConfig = {
  name: 'Desertmoon CBD Brasil',
  description:
    'Educação e suporte médico para pacientes que buscam tratamento com canabidiol no Brasil. Sem vendas diretas, apenas orientação e acompanhamento clínico.',
  navItems: [
    { name: 'Sobre o CBD', href: '/sobre-o-cbd' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Área Médica', href: '/area-medica' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
    { name: 'Área do Paciente', href: '/pacientes' },
  ],
  footer: {
    legalDisclaimer:
      'O conteúdo deste site possui finalidade exclusivamente educativa e não substitui a avaliação clínica individualizada. Não há venda de produtos derivados de cannabis no Brasil.',
    termsHref: '/legal/termos',
    privacyHref: '/legal/privacidade',
    dpoEmail: 'privacidade@desertmoon.com.br',
  },
};

export type SiteConfig = typeof siteConfig;
