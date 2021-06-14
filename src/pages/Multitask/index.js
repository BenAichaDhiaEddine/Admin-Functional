import React, { Component } from 'react';
import {Container, Card, Dropdown, DropdownToggle, DropdownMenu, Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane, Row, Col, Label, Button, Media, FormGroup} from "reactstrap";
import classnames from 'classnames';
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import "./tasks.scss";
import Select from "react-select";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Link} from "react-router-dom";
import ProfilePic from "../Profile/profilePic";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

const optionGroup = [
	{
		label: "أصناف اللجان",
		options: [
			{ label: "الكل", value: "pub" },
			{ label: "لجان رخص بناء", value: "const" },
			{ label: "لجان اخرى", value: "public" },
		]

	}
];
class Multitask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					id: 1,
					title: 'مبرمجة',
					icon: "calendar-check",
					cards: [
						{
							id: 1,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة بناء",
								category: "بناء طابق أول",
								citizen: "أحمد بن زينب",
								address: "حي الرياض",
								citizenImg: avatar2,
								organization:"أرسلا",
							}
						},
						{
							id: 2,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة بناء",
								category: "بناء طابق أول",
								citizen: "أحمد بن زينب",
								address: "حي الرياض",
								citizenImg: avatar2,
								organization:"أرسلا",
							}
						},
						{
							id: 3,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة بناء",
								category: "بناء طابق أول",
								citizen: "أحمد بن زينب",
								address: "حي الرياض",
								citizenImg: avatar2,
								organization:"أرسلا",
							}
						},
						{
							id: 4,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة بناء",
								category: "بناء طابق أول",
								citizen: "أحمد بن زينب",
								address: "حي الرياض",
								citizenImg: avatar2,
								organization:"أرسلا",
							}
						},

					]
				},
				{
					id: 2,
					title: 'عدم الموافقة',
					icon: "x-circle",
					cards: [
					]
				},
				{
					id: 3,
					title: 'الموافقة بشرط',
					icon: "error-circle",
					cards: [
					]
				},
				{
					id: 4,
					title: 'الموافقة',
					icon: "check-circle",
					cards: [
					]
				},

			],
			committees: [
				{ id: 1, category: "رخص بناء", status: "offline", name: "29 جانفي 2021", number: 10, time: "16:00", isActive: true },
				{ id: 2, category: "رخص بناء", status: "offline", name: "13 فيفري 2021", number: 9, time: "16:00", isActive: false },
				{ id: 3, category: "رخص بناء", status: "offline", name: "23 مارس 2021", number: 18, time: "16:00", isActive: false },
				{ id: 4, category: "رخص بناء", status: "offline", name: "10 أفريل 2021", number: 7, time: "16:00", isActive: false },
			],
			activeTabSide: "1",
			selectedGroup: null,
		}
		this.toggleTab = this.toggleTab.bind(this);
	}

	toggleTab(tab) {
		if (this.state.activeTabSide !== tab) {
			this.setState({
				activeTabSide: tab
			});
		}
	}


	handleSelectGroup = selectedGroup => {
		this.setState({ selectedGroup });
	};


	render() {
		const { selectedGroup } = this.state;
		return (
			<React.Fragment>
				<div className="page-content">
					<Container fluid>
						<Breadcrumbs title="معالجة" breadcrumbItem="رأي اللجان" />

						<Row>
							<Col md={3}>
								<div>
									<FormGroup className="select2-container">
										<Select
											placeholder={"إختيار صنف اللجنة:"}
											value={selectedGroup}
											onChange={this.handleSelectGroup}
											options={optionGroup}
											classNamePrefix="select2-selection"
										/>

									</FormGroup>
									<Nav pills justified>
										<NavItem>
											<NavLink
												className={classnames({ active: this.state.activeTabSide === '1' })}
												onClick={() => { this.toggleTab('1'); }}
											>
												<span className="d-none font-weight-bold d-sm-block">مبرمجة</span>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({ active: this.state.activeTabSide === '2' })}
												onClick={() => { this.toggleTab('2'); }}
											>
												<span className="d-none font-weight-normal d-sm-block">سابقة</span>
											</NavLink>
										</NavItem>
									</Nav>
									<ul className="list-unstyled chat-list mt-3">
										<PerfectScrollbar style={{ height: "500px" }}>
											{
												this.state.committees.map((committee) =>
													<li key={committee.id + committee.status} className={committee.isActive ? "active " : ""}>

														<Link to="#">
															<h5 className="text-truncate font-weight-bold font-size-14 mb-1">{committee.category}</h5>
															<Media>
																<Media className="overflow-hidden" body>
																	<h5 className="text-truncate font-size-14 mb-1">{committee.name}</h5>
																	<p className="text-truncate mb-0"><i className="bx bxs-file-blank mr-2"></i>عدد الملفات :{committee.number}</p>
																</Media>
																<div className="font-size-11">{committee.time}</div>
															</Media>
														</Link>
														<hr/>
													</li>
												)
											}
										</PerfectScrollbar>
									</ul>
								</div>
							</Col>
							<Col md={9} className="">
								<Row className="d-flex align-items-center justify-content-between">
									<Col className="d-flex align-items-center">
										<h5 className="font-weight-bold">لجنة رخص البناء - تاريخ 25 جانفي 2021</h5>
									</Col>
									<Col>
										<div className="float-right">
											<Button  className="mr-2" color="info">
												<i className="bx bx-info-circle font-size-16 align-middle mr-2"></i>معلومات اللجنة
											</Button>
											<Button  className="mr-2" color="secondary">
												<i className="bx bx-download font-size-16 align-middle mr-2"></i>تحميل
											</Button>
											<Button  className="mr-2" color="danger">
												<i className="bx bx-x-circle font-size-16 align-middle mr-2"></i>إلغاء
											</Button>
											<Button  className="" color="success">
												<i className="bx bx-save font-size-16 align-middle mr-2"></i>حفظ
											</Button>

										</div>
									</Col>
								</Row>
								<UncontrolledBoard class="" board={this.state} content={this.state.columns} />
							</Col>
						</Row>

					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default Multitask;
