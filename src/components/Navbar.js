import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/sekreterare.nu.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="sekreterare.nu" style={{ width: "200px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/*
              <Link className="navbar-item" to="/about">
                Om
              </Link>
              <Link className="navbar-item" to="/blog">
                Nyheter
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>*/}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://beta.sekreterare.nu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Logga in</p>
              </a>
            </div>
            <a
              className="navbar-item"
              href="https://beta.sekreterare.nu/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="create-btn-text btn">Skapa konto gratis</p>
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
