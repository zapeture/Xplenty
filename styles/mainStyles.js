import styled from 'styled-components';

/*Navbar Styling*/
export const NavbarContainer = styled.div`
  width: 100%;
  height: 3.688rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-item {
    list-style-type: none;
    padding: 0 20px;
  }
  .nav-link {
    text-align: left;
    font: normal normal normal 16px/26px Open Sans;
    letter-spacing: 0px;
    color: #3f3f3f;
    opacity: 1;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* logo */
  .logo-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .logo-container img {
    width: 26px;
    height: 26px;
  }
  .logo-container span {
    font-size: 16px;
    margin: 5px;
    font-weight: 700;
  }

  /* icon */
  .icon {
    font-size: 0.6rem;
    margin: 5px;
    display: inline-block;
    vertical-align: center;
  }
`;

/*Footer Styling*/
export const FooterContainer = styled.div`
  & {
    width: 100%;
    background: #3ba9fb 0% 0% no-repeat padding-box;
    opacity: 1;
    min-height: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .footer-list {
    width: 1158px;
    margin: auto;
  }

  & .footer-list li {
    list-style: none;
    display: inline-block;
  }
  & .footer-list .footer-item a {
    margin: 0 20px;
    text-align: left;
    font: normal normal normal 16px/36px Open Sans;
    letter-spacing: 0px;
    color: #ceeafd;
    text-decoration: none;
  }
  & .footer-list .footer-item a:hover {
    text-decoration: underline;
  }
`;

/* Hero Section */
export const HeroSection = styled.div`
  & {
    width: 100%;
    height: 494px;
    position: relative;
    overflow: hidden;
  }

  .image-container {
    position: absolute;
    transition: all 0.5s ease-in-out;
    top: 0;
    left: 0;
    width: 100%;
    height: 494px;
  }

  .image-container :hover {
    transform: translateY(-494px);
  }

  .hero-container img {
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 494px;
  }

  & .hero-content {
    position: absolute;
    top: 6rem;
    left: 18.313rem;
    z-index: 2;
  }
  & .hero-content h1 {
    text-align: left;
    font: normal normal bold 48px/54px Open Sans;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  & .hero-content .button-container {
    margin: 40px auto;
  }
  & .hero-content .button-container a {
    text-decoration: none;
  }
`;
/* Partner Section */
export const PartnersSection = styled.div`
  & {
    max-width: 1158px;
    height: 232px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  h3 {
    margin-top: 30px;
    text-align: center;
    font: normal normal bold 12px/17px Open Sans;
    letter-spacing: 0.98px;
    color: #3f3f3f;
    text-transform: uppercase;
    opacity: 0.4;
  }

  & .partner-logos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  & .partner-logos img {
    width: 10%;
    height: auto;
    filter: grayscale(100%);
  }
`;
/* Main Section */
export const MainContentSection = styled.div`
  & {
    max-width: 1158px;
    margin: 60px auto;
  }

  & .call-to-action {
    width: 100%;
    margin-bottom: 55px;
  }
  & .call-to-action h1 {
    text-align: left;
    font: normal normal 600 48px/65px Open Sans;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-bottom: 38px;
  }
  & .call-to-action p {
    text-align: left;
    font: normal normal normal 24px/36px Open Sans;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
`;
