// import React,{useState, useEffect} from 'react'
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   CardTitle,
//   Container,
//   Table,
//   Modal, ModalHeader, ModalBody, ModalFooter
// } from "reactstrap";
// import Select from "react-select";
// import cloneDeep from 'clone-deep';
// import {Link} from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { getCategories} from "../../store/categories/actions";
// import { getCorporateAdmins} from "../../store/members/action";
// import { getTeams, addNewTeam, deleteTeam, updateTeam } from "../../store/team/action"

// const Teams = () => {
//   const dispatch = useDispatch();
//   const { categoriesList, loading: isLoading } = useSelector(
//     ({ Categories }) => Categories
//   );
//   const { membersList, loading: stillLoading } = useSelector(
//     ({ Members }) => Members
//   );
//   const { teamsList, loading } = useSelector(
//     ({ Team }) => Team
//   );
//   const [teamID, setTeamID] = useState(null);
//   const [modal, setModal] = useState(false);
//   const { errors, handleSubmit, control, watch, reset } = useForm();
//   const [selectedId, setSelectedId] = useState(null);
//   const [state, setState] = useState({
//     teams: [],
//     teamId: null,
//     selectedMulti: null,
//     selectedGroup: null,
//     selectedGroup1: null,
//     popovertop: false,
//   })

//     useEffect(() => {
//     dispatch(getCategories());
//     dispatch(getCorporateAdmins());
//     // dispatch(getTeams())
//   }, []);

//   let newMembersListArray = cloneDeep (membersList);
//   const display = newMembersListArray.filter((memeber) => memeber._id !== state.selectedGroup?.value )
 
//   const onSubmit = (data, id)=> {

//     if (teamID) {
//       editTeam(id)
//       console.log('edit :');
//     }else {
//       insert(data)
//     }
//   }

//   const editTeam = (id) => {
//     setTeamID(id);
//     try {
//       const teamToEdit = teamsList.find(team => team.id === id);
//       console.log("teamId : ", teamToEdit.id);
//       reset({
//         teamCategory : {label: teamToEdit.teamCategory , value: teamToEdit.teamCategory?.value },
//         // teamLeader : {label: teamToEdit.teamLeader , value: teamToEdit.teamLeader?.value },
//         members: teamToEdit.members.map(item => [{label: item.label , value: item.value}])
//       })
//       const data = {}
//       data.teamCategory = teamToEdit.teamCategory._id
//       data.teamLeader = teamToEdit.teamLeader._id
//       data.members = teamToEdit.members?.map(item => item.firstName?.ar)
//       console.log("data" , teamToEdit.members);
//       dispatch(updateTeam(data, teamToEdit.id))
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   const insert = data => {
//     try {
//       data.members = data.members?.map(item => item.value)
//       data.teamLeader = data.teamLeader?.value
//       data.teamCategory = data.teamCategory?.value
//       console.log('data : ', data);
//     dispatch(addNewTeam(data))
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const removeTeam = id => {
//     const teamToEdit = teamsList.find(team => team.id === id);
//     dispatch(deleteTeam(teamToEdit.id))
//   }
//   const toggle = () => setModal(!modal);

//   return (
//     <React.Fragment>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Row data-repeater-item>
//           <Col lg="4" className="form-group">
//         <Label htmlFor="name">Les types de crédits bancaires</Label>
//         <Controller
//                 control={control}
//                 defaultValue= {categoriesList.name}
//                 name= "creditType"
                
//                 render={({ onChange, value, name, ref }) => (
//                   <Select 
//                     // inputRef={ref}
//                     isClearable
//                     onChange={onChange}
//                     options={Array.isArray(categoriesList) && categoriesList.map((item) => {
//                       return {
//                         label: item.name,
//                         value: item.id
//                       }
//                     })}
        
//               />)}
//               />
                      
//       </Col> 

//           {/* <Col lg="3" className="form-group">
//         <Label htmlFor="email">رئيس</Label>
//         <Controller
//                 control={control}
//                 defaultValue= {membersList.value}
//                 name= "teamLeader"
//                 render={({ onChange, value, name, ref, }) => (
//                   <Select 
//                     inputRef={ref}
//                     isClearable
//                     // value={state.selectedGroup}
//                     onChange={onChange} // to retrieve the ID of the teamLeader you have to change the onChange method on the other hand the arrayList won't be filtered
//                     options={Array.isArray(newMembersListArray) && newMembersListArray.map((item) => {
//                       return {
//                         label: item.email,
//                         value: item._id
//                       }
//                     })}
//                     classNamePrefix="select2-selection"

//               />)}
//               />
  
//       </Col> */}

//       <Col lg="4" className="form-group">
//         <Label htmlFor="subject">Les membres</Label>

//         <Controller
//                 control={control}
//                 defaultValue= {membersList}
//                 name= "members"
//                 render={({ onChange, value, name, ref }) => (
//                   <Select
//                   isMulti={true}
//                   // inputRef={ref}
//                     onChange={onChange}
//                     options={Array.isArray(membersList) && membersList.map((item) => {
//                       return {
//                         label: item.firstName+' '+item.lastName,
//                         value: item.id
//                       }
//                     })}
//                     classNamePrefix="select2-selection"
//               />)}
//               />
//       </Col>

//       <Col lg="3" className="form-group align-self-center">
//         <Button  className="mt-3"  color="success">
//           إضافة
//         </Button>
//       </Col>
//     </Row>

//         <div className="table-responsive">
//       <Table className="table-centered table-nowrap table-hover">
//         <thead className="thead-light">
//         <tr>
//           <th scope="col" style={{ width: "70px" }}>#</th>
//           <th scope="col">Le type de crédit </th>
//           {/* <th scope="col">رئيس</th> */}
//           <th scope="col">Les membres</th>
//           <th scope="col"></th>
//         </tr>
//         </thead>
//         <tbody>
//         { 
//           Array.isArray(teamsList) && teamsList.map((team, key) =>
//               <tr key={"_team_" + key} >
//                 <td>{key + 1}</td>
//                 <td>
//                   <div className="custom-control custom-switch mb-2" dir="ltr">
//                     <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
//                     <label className="custom-control-label" htmlFor="customSwitch1">{team.teamCategory.description}</label>
//                   </div>
//                 </td>
//                 <td>

//                   {team.teamLeader.firstName.ar+' '+team.teamLeader.lastName.ar}
//                 </td>
//                 <td>
//                   <div>
//                     {
//                       Array.isArray(team.members) && team.members.slice(0,2).map((member, key) =>
//                           <Link to="#"  className="badge badge-soft-primary font-size-12 m-1" key={"_team_" + key}>{member.email}</Link>
//                       )
//                     }
//                     <button className="badge badge-soft-success font-size-12 m-1" >+</button>
//                   </div>
//                 </td>
//                 <td>
//                   <ul className="list-inline font-size-20 contact-links mb-0">
//                   <li className="list-inline-item px-2">
//                       <Link to="#">
//                       <i onClick={() => editTeam(team.id)} className="bx bx-pencil"></i>

                        
//                       </Link>
//                     </li>
//                     <li className="list-inline-item px-2">
//                       <Link to="#">
//                       <i onClick={toggle} className="bx bx-trash"></i>
//                       </Link>
//                     </li>
//                     <Modal isOpen={modal} toggle={toggle} >
//                       <ModalHeader toggle={toggle}>Delete Team</ModalHeader>
//                       <ModalBody>
//                         Are you sure you want to delete Team Number : {key} ?
//                       </ModalBody>
//                       <ModalFooter>
//                         <Button color="primary" onClick={() => removeTeam(team.id)}>Delete</Button>{' '}
//                         <Button color="secondary" onClick={toggle}>Cancel</Button>
//                       </ModalFooter>
//                     </Modal>
                    
//                   </ul>
//                 </td>
//               </tr>
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
//   </form>
//     </React.Fragment>

//   )
// }

// export default Teams;
