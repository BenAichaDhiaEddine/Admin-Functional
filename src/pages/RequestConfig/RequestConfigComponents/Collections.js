import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Card,
  Label,
  Button,
  Table, InputGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// redux
import { useSelector, useDispatch } from "react-redux";

// actions
import { getCollectionsConfig, addCollectionsConfig, addItemsConfig } from "../../../store/actions";

const CollectionCard = ({ collections, setSelectedCategory, selectedCategory }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    try {
      const { name } = data
      const newBody = {
        name: {
          ar: name
        }
      }
      dispatch(addCollectionsConfig(newBody, collections))
    } catch (error) {
      console.error(error);
    }
  }
  const handleSelectedCategory = value => setSelectedCategory(value);
  return (
    <Card className="email-leftbar mb-3 mr-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <input
            type="text"
            className="form-control"
            placeholder="إضافة مجموعة"
            name='name'
            ref={register({ required: true })}
          />
          <div
            className="input-group-append"
          >
            <Button type="submit" color="primary" >
              <i className="bx bx-list-plus font-size-16 align-middle"></i>
            </Button>
          </div>
        </InputGroup>
      </form>

      <h6 className="mt-3">المجموعات</h6>
      <div className="mail-list mt-2">
        {collections.map(item => <Link onClick={() => handleSelectedCategory(item)} className={`${selectedCategory?.id === item?.id && "active"}`}><i className="bx bx-list-ul mr-2"></i> {item.name} <span className="ml-1 float-right">{item.collectionItems?.length}</span></Link>)}
      </div>
      <Button className="mt-3" color="secondary" outline>
        <i className="bx bx-upload font-size-16 align-middle mr-2"></i>رفع ملف CSV
      </Button>
      <Button className="mt-3" color="secondary">
        <i className="bx bx-cloud-download font-size-16 align-middle mr-2"></i>تحميل نماذج
      </Button>

    </Card>

  )
}

const Collections = () => {
  const { loading, collections } = useSelector(({ Collections }) => Collections);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    dispatch(getCollectionsConfig())
  }, [])

  useEffect(() => {
    setSelectedCategory(collections[0])
  }, [collections])

  const onSubmit = data => {
    try {
      const { nameAr, nameFr, value } = data
      const newBody = {
        name: {
          ar: nameAr,
          fr: nameFr
        },
        value,
        collectionCategory: selectedCategory.id
      }
      dispatch(addItemsConfig(newBody, collections, selectedCategory._id))
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <React.Fragment>
      <CollectionCard collections={collections} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="email-rightbar mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row data-repeater-item>
            <Col lg="4" className="form-group">
              <Label htmlFor="name">اسم عربي </Label>
              <input className="form-control" type="text" placeholder="" name='nameAr' ref={register({ required: true })} />
            </Col>

            <Col lg="4" className="form-group">
              <Label htmlFor="name">Nom FR </Label>
              <input className="form-control" type="text" placeholder="" name='nameFr' ref={register({ required: true })} />
            </Col>

            <Col lg="3" className="form-group">
              <Label htmlFor="subject">القيمة</Label>
              <input className="form-control" type="number" placeholder="" name='value' ref={register({ required: true })} />
            </Col>

            <Col lg="1" className="form-group align-self-center">
              <Button className="mt-3" color="success">
                <i className="bx bx-plus-circle font-size-16 align-middle"></i>
              </Button>
            </Col>
          </Row>
        </form>
        <h4 className="mb-2">المجموعة : الصبغة التجارية<span className="ml-2">
          <Link to="#">
            <i className="bx bx-edit"></i>
          </Link></span></h4>
        <div className="table-responsive">
          <Table className="table-centered table-nowrap table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col" style={{ width: "70px" }}>#</th>
                <th scope="col">الاسم</th>
                <th scope="col">القيمة</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                selectedCategory?.collectionItems?.map((item, key) =>
                  <tr key={"_item_" + key} >
                    <td>{item.customId}</td>
                    <td>
                      <h5 className="font-size-14 mb-1"><Link to="#" className="text-dark">{item?.name?.ar}</Link></h5>
                      <p className="text-muted font-size-12 mb-0">{item?.name?.fr}</p>

                    </td>
                    <td>
                      {item.value}
                    </td>

                    <td>
                      <ul className="list-inline font-size-20 contact-links mb-0">
                        <li className="list-inline-item px-2">
                          <Link to="#">
                            <i className="bx bx-pencil"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item px-2">
                          <Link to="#">
                            <i className="bx bx-trash"></i>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>

  )
}

export default Collections
