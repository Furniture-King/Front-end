import axios from 'axios'

export const getAllMagic = (seter, productType) => {
  axios
    .get(`http://localhost:5000/${productType}`)
    .then((response) => {
      seter({ products: response.data })
    })
    .catch(function (error) {
      console.log(error)
    })
}

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
