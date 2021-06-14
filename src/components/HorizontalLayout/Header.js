import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// reactstrap 

import  { Button } from "reactstrap";


//import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
//import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logoLight from "../../assets/images/banc_logo1.png";
import logoLightSvg from "../../assets/images/logo-light.svg";



// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//i18n
import { withNamespaces } from 'react-i18next';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isSearch: true };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

 toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
               
                <Link to="/dashboard" className="logo logo-light ">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="40" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="30" />
                  </span>
                </Link>
              </div>

                <div className="d-flex mt-3 ml-5 mr-5">
                      <form className="dropdown d-none d-lg-inline-block">
                        <div className="form-group m-0">
                        <div className="input-group ml-4 mr-5">
                                  <input
                                    type="text"
                                    className="form-control  bg-light"
                                    placeholder="Chercher ici.."/>
                               <div className="input-group-append">
                                <Button color="secondary" >
                                <i className="bx bx-search "></i>
                              </Button>
                              </div>
                          </div>
                        </div>
                      </form>
                    </div>

                 </div > 
                 <div className="d-flex justify-content-center">
                  <Link to="/corporate/configuration">
                <div className="dropdown d-none d-lg-inline-block p-4 ">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect">
                    <i className="bx bxs-cog  ml-4 mr-4" style={{ fontSize: "30px" }}> </i>
                  </button>
                  <span className="d-none d-xl-inline-block "></span>
                </div>
              </Link>

              <Link to="/credit-list">
                <div className="dropdown d-none d-lg-inline-block p-4 ">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect">
                    <i className="bx bx-list-ul ml-4 mr-4" style={{ fontSize: "30px" }} > </i>
                  </button>
                  <span className="d-none d-xl-inline-block "></span>
                </div>
              </Link>

             
              <Link to="/profile">
                        <div className="dropdown d-none d-lg-inline-block p-4">
                        <button
                            type="button"
                            className="btn header-item noti-icon waves-effect">
                             <i className="bx bx-user ml-4  mr-4" style={{ fontSize: "30px" }}></i>
                        </button> 
                        <span className="d-none d-xl-inline-block mx-2 "></span>
                        </div>
                    </Link>
                    <div className="dropdown d-none d-lg-inline-block p-4">
                    <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        onClick={this.toggleFullscreen}
                        data-toggle="fullscreen"
                    >
                      <i className="bx bx-fullscreen  ml-4 mr-4 " style={{ fontSize: "30px" }}></i>
                    </button>
                  </div>
                    <Link to="/logout">
                        <div className="dropdown d-none d-lg-inline-block p-4">
                        <button
                            type="button"
                            className="btn header-item noti-icon waves-effect">
                             <i className="bx bx-power-off ml-4 mr-4 "style={{ fontSize: "30px" }}></i>
                            <span className="text-danger font-weight-bold"></span>
                        </button> 
                        </div>
                    </Link>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
