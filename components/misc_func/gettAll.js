import axios from 'axios'

// Get all products.
export const getAllMagic = (seter, productType) => {
  axios
    .get(`http://localhost:5000/${productType}/`)
    .then((response) => {
      seter({ products: response.data })
      return { products: response.data }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const fetchDataForList = (seter, db) => {
  axios
    .get(`http://localhost:5000/${db}/`)
    .then((response) => {
      seter(
        response.data.map((item) => {
          return item.title
          // return { title: item.title, id: item._id, db: 'chaises' }
        })
      )
    })
    .catch(function (error) {
      console.log(error)
    })
}

// Get products by id.
export const getItemById = (seter, productType, id) => {
  axios
    .get(`http://localhost:5000/${productType}/${id}`)
    .then((response) => {
      seter({ products: response.data })
    })
    .catch(function (error) {
      console.log(error)
    })
}

// Delete products by id.
export const deleteRecord = (productType, id) => {
  axios
    .delete(`http://localhost:5000/${productType}/${id}`)
    .then((response) => {
      console.log('delete: ' + response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// Update the state properties.
export const updateRecord = (db, id, myUpdate) => {
  axios
    .post(`http://localhost:5000/${db}/update/` + id, myUpdate)
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error)
    })
}

// Create a new record
export const addNewProducts = (db, myUpdate) => {
  axios
    .post(`http://localhost:5000/${db}/add`, myUpdate)
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error)
    })
}
