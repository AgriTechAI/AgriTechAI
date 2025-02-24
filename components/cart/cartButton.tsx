
import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi"

import { useCartStore } from "@/store/useCartStore"

import useFromStore from "@/store/useFormStore"
import Drawer from '../ui/Drawer'
import Cart from './Cart'

export default function Cartbutton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const cart = useFromStore(useCartStore, state => state.cart)
    const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}
  return (
    <div className='flex '>
      <div className='relative'>
					<button
						type='button'
						title='Mini Cart'
						className='text-white text-xl flex items-center'
						onClick={handleCartIconClick}
					>
						<FiShoppingCart className='dark:text-white text-black' />
						<div className='text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'>{cart?.length}</div>
					</button>
				</div>
    <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
    <Cart />
</Drawer>
</div>
  )
}
