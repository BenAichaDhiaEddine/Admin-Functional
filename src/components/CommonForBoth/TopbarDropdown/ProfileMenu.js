
import React, { useState, useEffect  } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { getProfile } from "../../../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
//i18n
import { withNamespaces } from 'react-i18next';
// users
import user1 from '../../../assets/images/users/admin.png';
import { useForm } from "react-hook-form";

function ProfileMenu () {
    const dispatch = useDispatch();
    const {  reset  } = useForm();
    const { loading, profileDetailes } = useSelector(({ Profile }) => Profile );
    useEffect(() => {
        dispatch(getProfile());
        }, []);

    useEffect(() => {
        if (!loading) {
            reset({
            namear: profileDetailes?.firstName?.fr,
            namefr: profileDetailes?.lastName?.fr,
            });
        }
        }, [loading]);
    const [menu,setMenu] = useState(false);

    const toggle= () => {
        setMenu(!menu);
    };

        return (
            <React.Fragment>
            </React.Fragment>
        );
    
}

export default withRouter(withNamespaces()(ProfileMenu));
