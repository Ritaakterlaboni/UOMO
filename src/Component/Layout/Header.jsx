import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiUser,CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  return (
    <>
    <section>
      <div className="py-[31px] px-[190px]">
        <Container>
          <Flex className=''>
            <div className="pr-[50px]">
              <Image className='' src= {Logo} alt='../../assets/logo.png'/>
            </div>
            <div className='pr-[150px]'>
              <ul className="flex items-center gap-x-7 text-[14px] uppercase font-medium">
              <Link to={'/'}>
                <li>Home</li>
              </Link>
                <Link to={'/shop'}>
                  <li>Shop</li>
                </Link>
                <Link to={'/collection'}>
                  <li>Collection</li>
                </Link>
                <Link to={'/journal'}>
                  <li>Journal</li>
                </Link>
                <Link to={'/loobook'}>
                 <li>Lookbook</li>
                </Link>
                <Link to={'/pages'}>
                  <li>Pages</li>
                </Link>
      
              </ul>
            </div>
            <div className="flex items-center gap-5 text-[20px]">
              <CiSearch/>
              <CiUser/>
              <CiHeart/>
              <SlBag/>
              <HiMiniBars3CenterLeft/>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
    
    </>
  )
}

export default Header