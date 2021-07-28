import { FooterContainer } from '../../styles/mainStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <ul className='footer-list'>
        <li className='footer-item'>
          <a href='#'>Terms</a>
        </li>
        <li className='footer-item'>
          <a href='#'>Privacy policy</a>
        </li>
        <li className='footer-item'>
          <a href='#'>Contact</a>
        </li>
        <li className='footer-item'>
          <a href='#'>hello@xplenty.com</a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
