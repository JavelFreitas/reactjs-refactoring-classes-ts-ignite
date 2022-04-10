import { FiPlusSquare } from 'react-icons/fi';

import styles from './styles';
import Logo from '../../assets/logo.svg';

interface IHeader{
  openModal: () => void
}

function Header(props: IHeader): JSX.Element {
  const { openModal } = props;

  return (
    <styles.Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </styles.Container>
  );
}

export default Header;
