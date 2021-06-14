import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component
import Landing from "../pages/Landing";
import RequestsList from "../pages/Request/RequestsTaskList/index";
import RequestsViewList from "../pages/Request/RequestsViewList/index";
import RequestsKanban from "../pages/Request/Kanban/index";
import FormBuilder from "../pages/RequestConfig/FormBuilder/components/home";
import EditForm from "../pages/RequestConfig/FormBuilder/components/";
import RequestConfig from "../pages/RequestConfig/index";
import CreditList from "../pages/RequestConfig/Logs";
import Corporate from "../pages/Corporate/index";
import Create from "../pages/Create/index";
import Organization from "../pages/Organization/index";
import Citizen from "../pages/Citizen/index";
import Profile from "../pages/Profile/index";
import Organizations from "../pages/Organizations/index";
import Companies from "../pages/Companies";
import Permits from "../pages/Permits/index";
import Citizens from "../pages/Citizens/index";
import FileManager from "../pages/FileManager/index";
import Payments from "../pages/Payments";
import Map from "../pages/Map";
import Calendar from "../pages/Calendar/index";
import Multitask from "../pages/Multitask";

import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";

import DashboardAdmin from "../pages/Dashboard-admin/index";

import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";





const authProtectedRoutes = [

	{ path: "/faq", component: Landing },
	{ path: "/dashboard", component: DashboardAdmin },

	{ path: "/create", component: Create },
	{ path: "/credit-list", component: CreditList },
	{ path: "/corporate/:active_tab?", component: Corporate },
	{ path: "/profile", component: Profile },
	{ path: "/organization", component: Organization },
	{ path: "/citizen", component: Citizen },
	{ path: "/permits", component: Permits },
	{ path: "/companies", component: Companies },
	{ path: "/organizations", component: Organizations },
	{ path: "/citizens-pro", component: Citizens },
	{ path: "/request-config/:_id/:active_tab?", component: RequestConfig },
	{ path: "/requests-list", component: RequestsList },
	{ path: "/requests-view-list", component: RequestsViewList },
	{ path: "/requests-kanban", component: RequestsKanban },
	{ path: "/files", component: FileManager },
	{ path: "/calendar", component: Calendar },
	{ path: "/formbuilder/:id", component: EditForm },
	{ path: "/formbuilder", component: FormBuilder },
	{ path: "/multitask", component: Multitask },
	{ path: "/payments", component: Payments },
	{ path: "/map", component: Map },




	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },

	{ path: "/pages-maintenance", component: PagesMaintenance },
	{ path: "/pages-comingsoon", component: PagesComingsoon },
	{ path: "/pages-404", component: Pages404 },
	{ path: "/pages-500", component: Pages500 },

	// Authentication Inner
	{ path: "/pages-login", component: Login1 },
	{ path: "/pages-register", component: Register1 },
	{ path: "/pages-forgot-pwd", component: ForgetPwd1 },
	{ path: "/auth-lock-screen", component: LockScreen }
];

export { authProtectedRoutes, publicRoutes };
