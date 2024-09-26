import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Product } from '../../types/product'; // Adjust import path based on your project structure
import { Link } from 'react-router-dom';

const Product = () => {

    interface Product {
        id: string; // Assuming UUID is a string
        name: string;
        price: string; // Change to number if prices are numeric
        quantity: string; // Change to number if quantities are numeric
        category: string;
        description: string;
        createdAt: Date;
        product_image?: ProductImage; // Optional if a product can exist without an image
        user: User; // Define the User interface if needed
      }
      
      interface ProductImage {
        id: string; // UUID for ProductImage
        name: string;
        url: string; // URL of the uploaded image
        ext: string; // File extension
      }
      
      // If you have a User interface, define it as well
      interface User {
        id: string; // Assuming UUID is a string
        // Add other relevant user properties
      }
      
   // Then, you can use the interface with your state
  const [products, setProducts] = useState<Product[]>([]);      
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    file: null as File | null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-herbal.onrender.com/products/all', {
          withCredentials: true,
          headers: {
            'Cache-Control': 'no-cache', // Prevent caching of the response
          },
        });
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('file', newProduct.file!); // Ensure the file is present
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('quantity', newProduct.quantity);
    formData.append('category', newProduct.category);
    formData.append('description', newProduct.description);
    formData.append('userId', 'your-user-id'); // Add the appropriate user ID

    try {
      await axios.post('https://backend-herbal.onrender.com/products', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Reset the form
      setNewProduct({
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        file: null,
      });
      // Re-fetch products after successful upload
      await fetchProducts();
    } catch (err) {
      console.error(err);
      setError('Error creating product');
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  // Check if there are no products available
  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Products</h4>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} required />
          <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} required />
          <input type="text" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleInputChange} required />
          <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} required />
          <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} required />
          <input type="file" onChange={handleFileChange} required />
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">Upload Product</button>
        </div>
      </form>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Image</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Price</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Quantity</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Category</h5>
          </div>
        </div>

        {products.map((product, key) => (
          <Link
            to={`/${product.id}/product`}
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === products.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={product.id}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              {product.product_image?.base64 ? (
                <img
                  src={`data:image/${product.product_image.ext};base64,${product.product_image.base64}`}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>

            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{product.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">${product.price}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{product.quantity}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
