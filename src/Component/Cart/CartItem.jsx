import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({ item }) => {
     const [quantity, setQuantity] = useState(1);
    
    



console.log(item.discountedPrice * quantity)

    return (

        <tr>
            <th className='flex gap-2 items-center border'>
                <h1 className='w-18 h-18 object-cover'>{item.img}</h1>
                <p className='text-[#7a7a7a]'>{item.title}</p>
            </th>

            <td>{item.discountedPrice}</td>
            <td>
                <div className="join">
                    <button className="btn join-item">
                        <FaPlus />
                    </button>
                    <button className="btn join-item">{quantity} </button>
                    <button className="btn join-item">
                        <FaMinus />
                    </button>
                </div>
            </td>
            
            
            <td>{item.discountedPrice * quantity}</td>
            <td className="text-right min-h-full items-center ">
                <div className="flex justify-end">
                    <RiDeleteBin6Line />
                </div>
            </td>
        </tr>

    );
};

export default CartItem;