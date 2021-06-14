import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//i18n
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

// falgs
import tunisia from "../../../assets/images/flags/tunisia.jpg";
import usFlag from "../../../assets/images/flags/us.jpg";
import france from "../../../assets/images/flags/french.jpg";
import germany from "../../../assets/images/flags/germany.jpg";

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      lng : "عربي",
      flag : tunisia
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  render() {

    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        > 
          <DropdownToggle
            className="btn header-item waves-effect "
            tag="button"
          >
            <span className="d-none d-xl-inline-block mx-2 ">Langue</span>
            <img
              src={this.state.flag}
              alt="Skote"
              height="16"
              className="mr-1"
            />
          </DropdownToggle>
          <DropdownMenu className="language-switch" right>
            <DropdownItem tag="a" href="#"  className={`notify-item ${this.state.lng === 'English' ? 'active' : 'none'}`}>
              <img src={usFlag} alt="en" className="mr-1" height="12" />
              <span className="align-middle">English</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" className={`notify-item ${this.state.lng === 'German' ? 'active' : 'none'}`}>
              <img src={germany} alt="de" className="mr-1" height="12" />
              <span className="align-middle">Deutsch</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" className={`notify-item ${this.state.lng === 'French' ? 'active' : 'none'}`}>
              <img src={france} alt="fr" className="mr-1" height="12" />
              <span className="align-middle">Français</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#"  className={`notify-item ${this.state.lng === 'Arabic' ? 'active' : 'none'}`}>
              <img src={tunisia} alt="ar" className="mr-1" height="12" />
              <span className="align-middle">عربي</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(LanguageDropdown);
