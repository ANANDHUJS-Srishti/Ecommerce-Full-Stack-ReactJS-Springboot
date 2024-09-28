import React, { useEffect, useState } from 'react';
import { deleteProduct,listProducts } from '../Services/ProductService';
import { useNavigate } from 'react-router-dom';
function EcommercePage() {

  const [products, setProducts] = useState([]);
  const navigator = useNavigate();


  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts(){
    listProducts()
      .then((response) => {
        console.log(response); 
        setProducts(response.data); 
      })
      .catch(error => {
        console.error(error);
      })
  }

  function addNewProduct(){
    navigator('/add-products')
  }

  function updateProduct(id){
    navigator(`/update-products/${id}`)
  }

  function handledeleteProduct(id){
    console.log(id);
    deleteProduct(id).then((response) => {
      getAllProducts();
    }).catch(error => {
      console.error(error);
    })
  }


  return (
    <div>
      
      <h2 className='text-center'>Products List</h2>
      <button className='btn btn-lg btn-primary mb-5' onClick={addNewProduct}>Add New Product</button>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.url} 
                  alt={product.productName}
                  style={{ width: '100px' }} 
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button className='btn btn-warning' onClick={()=> updateProduct(product.id)}>Update</button>
                <button className='btn btn-danger ml-2' onClick={()=> handledeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EcommercePage;
