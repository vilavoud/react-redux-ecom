/* eslint-disable jsx-a11y/anchor-is-valid */
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">React Shop</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">ໜ້າຫຼັກ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/manage" className="nav-link">ຈັດການຮ້ານ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">ກໍຽວກັບເຮົາ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">ຕິດຕໍ່ເຮົາ</NavLink>
            </li>
          </ul>

         
        </div>
      </div>
    </nav>
  )
}

export default Navbar
