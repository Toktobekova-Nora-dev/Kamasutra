import React, {  useEffect, useState } from 'react';
import { useProduct } from '../service/MainContext';

const Home = () => { 
    const {data,readProduct,DeleteProduct} = useProduct()
    const [count,setCount] = useState(1)
    
    useEffect(()=>{
      readProduct()
    },[])
    
    
    return (
        <div>
    <div class="flex justify-center items-center">
          <table class="w-[740px]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>


        {
        data.map((el)=>(
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src={el.image} class="w-16 md:w-32 max-w-full max-h-full" alt=""/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {el.name}
                </td>
                <td class="px-3 py-4">
                    <div class="flex items-center">
                        
                       <button onClick={()=>setCount(count + 1)} className='inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>+</button>

                        <div>
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={count} required />
                        </div>

                       <button onClick={()=>setCount(count === 0 ? count  : count - 1)} className='inline-flex items-center justify-center  p-1 me- text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>-</button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     <h1>{el.price * count} $</h1>
                </td>
                <td class="px-6 py-4">
                    <a onClick={()=>DeleteProduct(el._id)} href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
))
}
    </table>
       </div>

</div>
    );
};

export default Home;