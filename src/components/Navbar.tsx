import { Menu } from "@mantine/core";
import { useState } from "react";
import useTanStackQuery from "../hooks/useTanStackQuery";
import { getUser } from "../services";
import AppMenu from "./AppMenu";
import ProfileMenu from "./ProfileMenu";
import { Profile } from "../types";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('');
  const [openApp, setOpenApp] = useState(false)
  const { data } = useTanStackQuery<Profile>('getUser', getUser)
  return (
    <nav className='
    bg-white border-2 rounded-[100px] h-16 shadow-navbar
    flex justify-between items-center p-4
    '>
      <div>
        <img
          src="/logo.svg" alt="logo"
          className='w-[36px] h-[36px]'
        />
      </div>
      <div
        className='hidden md:flex items-center gap-5'
      >
        <a href='#' className={`flex items-start gap-1 text-gray_400
        py-2 px-4 rounded-full transition-all
        group  ${activeNav === 'home' ? 'bg-black text-white group hover:bg-black' : 'hover:bg-gray_50'}`}
          onClick={() => setActiveNav('home')}
        >
          <img src="/icons/home.svg" alt="home"
            className={`${activeNav === 'home' ? 'filter-white' : ''}`}
          />
          <span className='text-md leading-6 font-degularSemibold'>
            Home
          </span>
        </a>
        <a href='#' className={`flex items-start gap-1 text-gray_400
        py-2 px-4 rounded-full transition-all
        group ${activeNav === 'analytics' ? 'bg-black text-white group hover:bg-black' : 'hover:bg-gray_50'}`}
          onClick={() => setActiveNav('analytics')}
        >
          <img src="/icons/analytics.svg" alt="analytics"
            className={`${activeNav === 'analytics' ? 'filter-white' : ''}`}
          />
          <span className='text-base leading-6 font-degularSemibold'>Analytics</span>
        </a>
        <a href='#' className={`flex items-start gap-1 text-gray_400
        py-2 px-4 rounded-full transition-all
        group  ${activeNav === 'revenue' ? 'bg-black text-white group hover:bg-black' : 'hover:bg-gray_50'}`}
          onClick={() => setActiveNav('revenue')}
        >
          <img src="/icons/revenue.svg" alt="revenue"
            className={`${activeNav === 'revenue' ? 'filter-white' : ''}`}
          />
          <span className='text-base leading-6 font-degularSemibold'>Revenue</span>
        </a>
        <a href='#' className={`flex items-start gap-1 text-gray_400
        py-2 px-4 rounded-full transition-all
        group  ${activeNav === 'crm' ? 'bg-black text-white group hover:bg-black' : 'hover:bg-gray_50'}`}
          onClick={() => setActiveNav('crm')}
        >
          <img src="/icons/crm.svg" alt="crm"
            className={`${activeNav === 'crm' ? 'filter-white' : ''}`}
          />
          <span className='text-base leading-6 font-degularSemibold'>CRM</span>
        </a>
        <div
          onClick={() => {
            setOpenApp(!openApp)
            setActiveNav('app')
          }
          }
        >
          <Menu
            width={350} shadow="md" radius={15}
            position="bottom-start"
            offset={25}
          >
            <Menu.Target>
              <a href='#' className={`
              flex items-start gap-1 text-gray_400
            py-2 px-4 rounded-full transition-all
              ${openApp ? 'bg-black text-white group hover:bg-black' : 'hover:bg-gray_50'}
              `}>
                <img src="/icons/overview.svg" alt="overview"
                  className={openApp ? "filter-white" : ''}
                />
                <span className='text-base leading-6 font-degularSemibold'>App</span>
                <div className={openApp ? 'flex' : 'hidden'}>
                  <hr className="w-[0.5px] bg-white mx-2 mr-3 h-5" />
                  <div className="flex items-start gap-1">
                    <span className='text-base leading-6 font-degularSemibold'>Link in Bio</span>
                    <img src="/icons/arrow-down.svg" alt="arrow-down"
                      className="filter-white"
                    />
                  </div>
                </div>
              </a>
            </Menu.Target>
            <AppMenu />
          </Menu>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-10 h-10 flex items-center justify-center'>
          <img src="/icons/notification.svg" alt="notification"
            className='cursor-pointer'
          />
        </div>
        <div className='w-10 h-10 flex items-center justify-center'>
          <img src="/icons/message.svg" alt="message"
            className='cursor-pointer'
          />
        </div>
        <Menu width={300} shadow="md" radius={20}
          position="bottom-end"
          offset={25}
        >
          <Menu.Target>
            <button>
              <div className='flex items-center gap-4 px-2 bg-gray_100 rounded-full h-10'>
                <div className='w-[32px] h-[32px] rounded-full flex items-center justify-center bg-gradient-to-r from-gray_500 to-gray_600'>
                  <span className='font-degularSemibold text-sm leading-4 text-white'>
                    {data?.first_name.charAt(0)}{data?.last_name.charAt(0)}
                  </span>
                </div>
                <img src="/icons/menu.svg" alt="menu"
                  className='cursor-pointer'
                />
              </div>
            </button>
          </Menu.Target>
          <ProfileMenu data={data} />
        </Menu>
      </div>
    </nav >
  )
}

export default Navbar