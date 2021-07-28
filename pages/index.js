import Head from 'next/head';
import { Button } from '../styles/utilityStyles';
import { getHomePageData } from '../lib/api';
import Image from 'next/image';
import parse from 'html-react-parser';
import {
  HeroSection,
  PartnersSection,
  MainContentSection,
} from '../styles/mainStyles';

export default function Home({ homePageData }) {
  return (
    <>
      <Head>
        <title>{homePageData.seo.title}</title>
        <meta name='description' content={homePageData.seo.meta_description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeroSection>
        <div className='hero-container'>
          <div className='image-container'>
            {homePageData.hero_section.hero_image.map((image, index) => (
              <Image
                src={image.hero_image}
                width={1440}
                height={494}
                alt=''
                key={index}
              />
            ))}
          </div>
          <div className='hero-content'>
            {parse(homePageData.hero_section.headline)}
            <div className='button-container'>
              {homePageData.hero_section.button.map((button, index) => (
                <Button
                  href={button.button_link}
                  size={button.button_size}
                  background={button.button_background}
                  text_color={button.button_text_color}
                  outline={button.button_outline}
                  key={index}>
                  {button.button_text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </HeroSection>
      <PartnersSection>
        <>
          <h3> {homePageData.partner_section.trust_statement}</h3>
          <div className='partner-logos'>
            {homePageData.partner_section.partner_logos.map((logo, index) => (
              <img key={index} src={logo.partner_logo} alt={logo.alt_text} />
            ))}
          </div>
        </>
      </PartnersSection>
      <hr />
      <MainContentSection>
        {homePageData.features_section.map((feature, index) => (
          <div className='call-to-action' key={index}>
            <h1>{feature.feature_header}</h1>
            <p>{feature.feature_description}</p>
          </div>
        ))}
      </MainContentSection>
    </>
  );
}

export async function getStaticProps() {
  const [homePageData] = await Promise.all([getHomePageData()]);
  return {
    props: {
      homePageData,
    },
    revalidate: 30,
  };
}
