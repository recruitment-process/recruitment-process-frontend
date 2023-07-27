import './Header.scss'

const Header = () => (
  <header className="header">
    <input type="text" />
    <div className='header__acc-info-container'>
      <ul className='header__options-list options-list'>
        <li className='option-list__item'>mail</li>
        <li className='option-list__item'>bell</li>
      </ul>
      <div className='acc-container'>
        <div className='acc-container__avatar' />
        <div className='acc-container__info'>
          <p className='acc-info__name'>Ольга Филимонова</p>
          <p className='acc-info__job'>HR-менеджер</p>
        </div>
        <button>acc_menu</button>
      </div>
    </div>
  </header>
)

export default Header
