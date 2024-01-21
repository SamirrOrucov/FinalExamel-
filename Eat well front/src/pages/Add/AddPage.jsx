import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AddPage.scss"
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
function AddPage() {
  const [dbData, setDbData] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState("")
  async function getFetch() {
    const response = await fetch("http://localhost:3003/")
    const data = await response.json()
    setDbData(data)
  }
  useEffect(() => {
    getFetch()
  }, [])
  async function postProduct(values) {
    await fetch("http://localhost:3003/", {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });
    await getFetch()
  }
  async function deleteProduct(id) {
    await fetch("http://localhost:3003/" + id, {
      method: 'DELETE'
    });
    await getFetch()
  }
  return (
    <div className='add'>

      <Formik
        initialValues={{ image: '', title: '', price: 0, detail: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(315, 'Must be 15 characters or less')
            .required('Required'),
          title: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
          price: Yup.number()

            .required('Required'),
          detail: Yup.string()
            .max(250, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            postProduct(values)
            resetForm()
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='form'>
          <label htmlFor="image">Image Url</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <label htmlFor="detail">Details</label>
          <Field name="detail" type="text" />
          <ErrorMessage name="detail" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div>
        <Helmet>
          <title>Add</title>
        </Helmet>
      </div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search by name' name="" id="" />
      <button onClick={() => setSortBy({ field: "price", asc: false })}><i className="fa-solid fa-arrow-up-wide-short"></i></button>
      <button onClick={() => setSortBy({ field: "price", asc: true })}><i className="fa-solid fa-arrow-down-wide-short"></i></button>
      <button onClick={() => setSortBy(null)}>Default</button>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Detail</th>
            <th>Operations</th>

          </tr>
        </thead>
        {
          dbData
            .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0

              }
              else if (sortBy.asc) {
                return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
              }
              else if (sortBy.asc === false) {
                return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)

              }
            })
            .map((item) =>
              <tbody key={item._id}>
                <tr >
                  <td><img src={item.image} alt="" /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.detail}</td>
                  <td><button onClick={() => deleteProduct(item._id)}>Delete</button>
                  <Link to={"/edit/"+item._id}><button>Edit</button></Link>
                  </td>

                </tr>
              </tbody>
            )
        }

      </table>
    </div>
  )
}

export default AddPage