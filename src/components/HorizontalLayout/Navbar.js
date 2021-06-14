import React, { Component } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withNamespaces } from 'react-i18next';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu:[
                //{ name:"Accueil", link:"dashboard", icon:"bx bxs-dashboard", permission:true },
                //{ name:"الخريطة", link:"map", icon:"bx bxs-map", permission:true },
               // { name:"إنشاء", link:"create", icon:"bx bxs-plus-circle", permission:true },
               // { name:"معالجة", link:"requests-list", icon:"bx bxs-check-square", permission:true },
                //{ name:"لجان", link:"multitask", icon:"bx bxs-calendar-check", permission:true },
               // { name:"الخلاص", link:"payments", icon:"bx bxs-coin-stack", permission:true },
               // { name:"متابعة", link:"requests-view-list", icon:"bx bxs-show", permission:true },
              //  { name:"مراحل", link:"requests-kanban", icon:"bx bxl-trello", permission:true },
                //{ name:"الرّخص", link:"permits", icon:"bx bxs-file-blank", permission:true },
               // { name:"أشخاص", link:"citizens-pro", icon:"bx bxs-group", permission:true },
               // { name:"شركات", link:"companies", icon:"bx bxs-store", permission:true },
                //{ name:"جمعيات", link:"organizations", icon:"bx bxs-building", permission:true },

            ]
        };
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">
                                    {
                                        this.state.menu.map((item, key) =>

                                                <li key={"_item_" + key} className="nav-item">
                                                    {item.permission &&
                                                    <Link className="nav-link " to={item.link}>
                                                        <i className={item.icon}></i> {item.name}
                                                    </Link>
                                                    }
                                                </li>
                                        )
                                    }


                                </ul>
                            </Collapse>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(Navbar));
