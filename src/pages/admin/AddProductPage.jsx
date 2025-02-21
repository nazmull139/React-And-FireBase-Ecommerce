import { useContext, useState } from "react";
import myContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Loader } from "lucide-react";
const categoryList = [
  {
      name: 'fashion'
  },
  {
      name: 'shirt'
  },
  {
      name: 'jacket'
  },
  {
      name: 'mobile'
  },
  {
      name: 'laptop'
  },
  {
      name: 'shoes'
  },
  {
      name: 'home'
  },
  {
      name: 'books'
  }
]
const AddProductPage = () => {
    const context = useContext(myContext);
    const {loading , setLoading} = context;

  // Navigate
  const navigate = useNavigate();


 // product state
 const [product, setProduct] = useState({
  title: "",
  price: "",
  productImageUrl: "",
  category: "",
  description: "",
  quantity : 1,
  time: Timestamp.now(),
  date: new Date().toLocaleString(
      "en-US",
      {
          month: "short",
          day: "2-digit",
          year: "numeric",
      }
  )
});

 // Add Product Function
 const addProductFunction = async () => {
  if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
      return toast.error("all fields are required")
      
  } 

  setLoading(true);

  try {
    const productRef = collection(fireDB, 'product');
    await addDoc (productRef,product)
    toast.success("Add Product Successfully");
    navigate("/admin-dashboard")
    setLoading(false)
    
  } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Add Product Failed")
  }


}


  return (
      <div>
        {loading && <Loader></Loader>}
          <div className='flex justify-center items-center h-screen'>
              {/* Login Form  */}
              <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                  {/* Top Heading  */}
                  <div className="mb-5">
                      <h2 className='text-center text-2xl font-bold text-pink-500 '>
                          Add Product
                      </h2>
                  </div>

                  {/* Input One  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          name="title"
                          value={product.title}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              title : e.target.value
                            })
                          }}
                          placeholder='Product Title'
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Two  */}
                  <div className="mb-3">
                      <input
                          type="number"
                          placeholder='Product Price'
                          value={product.price}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              price : e.target.value
                            })
                          }}
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Three  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          placeholder='Product Image Url'
                          value={product.productImageUrl}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              productImageUrl : e.target.value
                            })
                          }}
                          className='bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Four  */}
                  <div className="mb-3">
                      <select 
                          value={product.category}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              category : e.target.value
                            })
                          }}
                      className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                          <option disabled>Select Product Category</option>
                          {categoryList.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                              )
                          })}
                      </select>
                  </div>

                  {/* Input Five  */}
                  <div className="mb-3">
                      <textarea name="description" 
                          value={product.description}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              description : e.target.value
                            })
                          }}
                      placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">

                      </textarea>
                  </div>

                  {/* Add Product Button  */}
                  <div className="mb-3">
                      <button
                          onClick={addProductFunction}
                          type='button'
                          className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                      >
                          Add Product
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AddProductPage;