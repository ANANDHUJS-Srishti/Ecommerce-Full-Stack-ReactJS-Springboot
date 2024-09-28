import React, { useEffect, useState } from 'react'
import { addProduct, getProduct, updateProduct } from '../Services/ProductService'
import { useNavigate, useParams } from 'react-router-dom'
const ProductComponent = () => {

    const[productName ,setProductName] =useState('')
    const[description,setDescription]= useState('')
    const[price,setPrice]=useState('')
    const[url,setUrl]=useState('')

    const {id} = useParams();

    const navigator = useNavigate();
    
    useEffect(()=>{
        if(id){
            getProduct(id).then((response)=>
            
            {
                setProductName(response.data.productName);
                setDescription(response.data.description);
                setPrice(String(response.data.price));
                setUrl(response.data.url);
            }).catch(error => {
                console.error(error);
            })}},{id})
        



    const[errors ,setErrors] = useState({
        productName : "",
        description :"",
        price:"",
        url:""
    })

    function saveOrUpdateProduct(e){
        e.preventDefault();

        if(validateform()){

            const  products  = {productName,description,price,url}
            console.log(products)

            if(id){
              updateProduct(id,products).then((response) => {
                console.log(response.data);
                navigator('/list');
              }).catch(error => {
                console.error(error);
              })
            } else{
                addProduct(products).then((response) => {
                    console.log(response.data);
                    navigator('/list')
                }).catch(error => {
                    console.error(error);
                })
            }
            
    
            
        }
       
    function validateform(){
        let valid = true;
        const errorsCopy  = {... errors}

        if(productName.trim()){
            errorsCopy.productName='';
        }
        else{
            errorsCopy.productName='Product Name is required';
            valid = false;
        }
        if(description.trim()){
            errorsCopy.description='';
        }
        else{
            errorsCopy.description="Description required";
            valid=false;
        }
        if(price.trim()){
            errorsCopy.price='';
        }
        else{
            errorsCopy.price="Price is required";
            valid=false;
        }
        if(url.trim()){
            errorsCopy.url='';
        }
        else{
            errorsCopy.url="Image is required";
            valid=false;
        }
        setErrors(errorsCopy);
        return valid;
    }
    }

    function pageTitle(){
        if(id){
            return   <h2 className='text-center'>Update Product</h2>
          }
          else{
            return   <h2 className='text-center'>Add Product</h2>
          }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                       {
                        pageTitle()
                       }
                        <div className="card-body">
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Product Name</label>
                                    <input type='text' placeholder='productName' name='productName' value={productName} className={`form-control ${errors.productName ? 'is-invalid' : ''}`} onChange={(e) => setProductName(e.target.value)}></input>
                                    {errors.productName && <div className='invalid-feedback'>{errors.productName}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Description</label>
                                    <input type='text' placeholder='Description' name='description' value={description} className={`form-control ${errors.description ? 'is-invalid' : ''}`} onChange={(e) => setDescription(e.target.value)}></input>
                                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Price</label>
                                    <input type='text' placeholder='price' name='price' value={price} className={`form-control ${errors.price ? 'is-invalid' : ''}`} onChange={(e) =>  setPrice(e.target.value)}></input>
                                    {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Image</label>
                                    <input type='text' placeholder='Image URL' name='url' value={url} className={`form-control ${errors.url ? 'is-invalid' : ''}`} onChange={(e) => setUrl(e.target.value)}></input>
                                    {errors.url && <div className='invalid-feedback'>{errors.url}</div>}
                                </div>
                                <button className='btn btn-success' onClick={saveOrUpdateProduct}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
