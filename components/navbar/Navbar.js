import { AiFillCaretDown } from 'react-icons/ai';
import { Button } from '../../styles/utilityStyles';
import { NavbarContainer } from '../../styles/mainStyles';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <nav className='navbar'>
          <div className='navbar-group'>
            <div className='logo-container'>
              <Image
                src='/assets/logoSvg.svg'
                width={26}
                height={26}
                alt='logo-image'
                className='logo-image'
              />
              <span>Xplenty</span>
            </div>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span> Product</span>{' '}
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span>Integrations</span>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span> Solutions</span>
                  <AiFillCaretDown className='icon' />
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span>Resources</span>
                  <AiFillCaretDown className='icon' />
                </a>
              </li>
            </ul>
          </div>
          <div className='navbar-group'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span>English</span>
                  <AiFillCaretDown className='icon' />
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <span>Sign In</span>
                </a>
              </li>
              <li className='nav-item'>
                <Button
                  href='#'
                  type='button'
                  size='small'
                  background='blue'
                  text_color='light'>
                  <span>Get Started</span>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
