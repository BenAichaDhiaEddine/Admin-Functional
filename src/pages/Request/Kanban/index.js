import React, { Component } from 'react';
import {Container, FormGroup, Row, Col, Label} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";

import "./tasks.scss";
import Select from "react-select";

const optionGroup = [
	{
		label: "المطالب",
		options: [
			{ label: "إشهار", value: "pub" },
			{ label: "بناء", value: "const" },
			{ label: "ملك عمومي", value: "public" },
		]

	}
];
class Kanban extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					id: 1,
					title: 'فحص الوثائق',
					cards: [
						{
							id: 1,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة إشهار",
								category: "إشغال الملك العمومي",
								citizen: "أحمد بن زينب",
								citizenImg: avatar2,
								organization:"أرسلا",
								deadline: 3,
								assignee:"سامية بن صالح",
								assigneeImg: avatar1,
							}
						},
						{
							id: 2,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة إشهار",
								category: "إشغال الملك العمومي",
								citizen: "أحمد بن زينب",
								citizenImg: avatar2,
								organization:"أرسلا",
								deadline: 3,
								assignee:"سامية بن صالح",
								assigneeImg: avatar1,
							}
						},

					]
				},
				{
					id: 2,
					title: 'فحص المعطيات',
					cards: [
						{
							id: 3,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة إشهار",
								category: "إشغال الملك العمومي",
								citizen: "أحمد بن زينب",
								citizenImg: avatar2,
								organization:"أرسلا",
								deadline: 3,
								assignee:"سامية بن صالح",
								assigneeImg: avatar1,
							}
						},

					]
				},
				{
					id: 3,
					title: 'زيارة ميدانية',
					cards: [


					]
				},
				{
					id: 4,
					title: 'قرار اللجنة',
					cards: [


					]
				},
				{
					id: 4,
					title: 'إمضاء الرخصة',
					cards: [
						{
							id: 3,
							content:{
								id:"TMN-9879",
								date:"23/01/2020",
								type: "رخصة إشهار",
								category: "إشغال الملك العمومي",
								citizen: "أحمد بن زينب",
								citizenImg: avatar2,
								organization:"أرسلا",
								deadline: 3,
								assignee:"سامية بن صالح",
								assigneeImg: avatar1,
							}
						},

					]
				}
			],
			selectedGroup: null,
		}
	}

	//Select
	handleSelectGroup = selectedGroup => {
		this.setState({ selectedGroup });
	};


	render() {
		const { selectedGroup } = this.state;
		return (
			<React.Fragment>
				<div className="page-content">
					<Container fluid>
						<Breadcrumbs title="مطالب" breadcrumbItem="متابعة المراحل" />
						<Row>
							<Col md="3">
								<FormGroup className="select2-container d-inline w-md">
									<Select
										placeholder="نوع المطلب"
										value={selectedGroup}
										onChange={this.handleSelectGroup}
										options={optionGroup}
										classNamePrefix="select2-selection"
									/>

								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup className="select2-container d-inline w-md">
									<Select
										placeholder="المصلحة"
										value={selectedGroup}
										onChange={this.handleSelectGroup}
										options={optionGroup}
										classNamePrefix="select2-selection"
									/>

								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup className="select2-container d-inline w-md">
									<Select
										placeholder="المسؤول"
										value={selectedGroup}
										onChange={this.handleSelectGroup}
										options={optionGroup}
										classNamePrefix="select2-selection"
									/>

								</FormGroup>
							</Col>
							<Col md="3">
								<input className="form-control" placeholder="إبحث" type="text" id="search" />
							</Col>
						</Row>

						<UncontrolledBoard board={this.state} content={this.state.columns} />
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default Kanban;
