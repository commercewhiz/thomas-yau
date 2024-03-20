const siteMetadata = {
  title: 'Thomas Yau',
  author: 'Thomas Yau',
  headerTitle: 'Thomas-Yau',
  description: 'Software Developer at Viewfi',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  email: 'mailto:talk30mins.thomas@gmail.com',
  github: 'https://github.com/commercewhiz',
  gmail: 'https://calendly.com/talk30mins-thomas/30min',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
