import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiReact,
  SiNodedotjs,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiTerraform,
  SiNextdotjs,
  SiPython,
  SiGraphql,
  SiShopify,
  SiVuedotjs,
  SiVercel,
  SiGit,
  SiTailwindcss,
  SiMongodb,
  SiFigma 
} from 'react-icons/si';
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const stacks = [
  {
    Icon : SiVuedotjs,
    url : 'https://vuejs.org/'
  },
  {
    Icon : SiNodedotjs,
    url : 'https://nodejs.org/en'
  },
  {
    Icon : SiFigma,
    url : 'https://www.figma.com/' 
  },
  {
    Icon : SiVercel,
    url : 'https://vercel.com/'
  },
  {
    Icon : SiMongodb,
    url : 'https://www.mongodb.com/'
  },
  {
    Icon : SiTailwindcss,
    url : 'https://tailwindcss.com/'
  },
  {
    Icon: SiKubernetes,
    url: 'https://kubernetes.io/',
  },
  {
    Icon : SiGit,
    url : 'https://git-scm.com/'
  },
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
  },
  {
    Icon: SiGraphql,
    url: 'https://graphql.org/',
  },
  {
    Icon: SiAmazonaws,
    url: 'https://aws.amazon.com/',
  },
  {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
  },
  {
    Icon: SiShopify,
    url: 'https://www.shopify.com/',
  },
  {
    Icon: SiGooglecloud,
    url: 'https://cloud.google.com/',
  },
  {
    Icon: SiTerraform,
    url: 'https://www.terraform.io/',
  },
  {
    Icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
  },
];

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        Visionary & Trailblazer
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>I&apos;m a Full-Stack/Shopify developer living in Beringen.</Text>
        <Text>
          During my free time I like going to the gym for fitness exercise, really enjoy playing futsal, and besides that, listening to podcasts which are eye-opening and insightful.
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
