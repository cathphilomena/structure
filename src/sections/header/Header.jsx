import header from '../../assets/header.jpg'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className='header__image'>
        <img src={header}/>
      </div>
    </header>
  )
}

export default Header