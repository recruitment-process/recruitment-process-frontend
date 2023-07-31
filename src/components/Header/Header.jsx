import { useForm } from 'react-hook-form'

import './Header.scss'
import { useState } from 'react'
import InputWithError from '../UI/InputWithError/InputWithError'

// import { useForm } from 'react-hook-form'

const Header = () => {

  const [query, setQuery] = useState('')

  const handleChange = (evt) => {
    setQuery(evt.target.value)
    console.log(query)
  }

  const { handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (

    <header className="header">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithError inputId='search' formName='searchForm' inputType='search' isDisabled={false} />
      </form>

      <input className='header__search-field' type="text" value={query || ''} onChange={handleChange} />
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
}

export default Header
