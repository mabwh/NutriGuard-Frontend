import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { IoMdSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoMenu,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

import Input from "../components/Input";

export default function LoggedInlayout() {
  // Controls whether the mobile sidebar is open.
  const [isOpen, setIsOpen] = useState(false);

  // Controls whether the desktop/tablet sidebar is collapsed.
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <header className="w-full  fixed top-0 left-0  z-50   bg-surface  border-b border-border  shadow-sm ">
        <div className="px-md md:px-lg h-(--top-nav-height) flex justify-between items-center mx-auto max-w-max">
          <Link to="/" className="hidden md:block">
            <img
              src="/logo_with_a_solid_white-removebg-preview.png"
              className="h-10 object-cover"
              alt=""
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-muted transition-colors"
          >
            <IoMenu size={30} className=" text-primary" />
          </button>

          <div class="hidden md:block relative bg-surface border border-border rounded-full w-90">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
              <IoMdSearch size={22} />
            </span>

            <Input
              placeholder="Search"
              className=" bg-surface border-none rounded-xl py-2 pl-10 pr-4"
            />
          </div>

          <div className="flex items-center">
            <button className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
              <IoMdNotificationsOutline size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="flex items-center pl-2">
              <img
                className="w-10 h-10 rounded-full object-cover "
                src="/user.jpg"
              />
            </div>
          </div>
        </div>
      </header>
      {/* for mobile --> clicking anywhere closes the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
    fixed
    top-0
    left-0
    h-full
    bg-background
    border-r
    border-border
    flex
    flex-col
    gap-2
    pt-22
    p-4
    z-40
    transition-all
    duration-300
    ${collapsed ? "md:w-20" : "md:w-(--sidebar-width)"}
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 
  `}
      >
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex justify-center items-center mb-6 p-2 rounded-lg  transition-colors  "
        >
          {collapsed ? (
            <IoChevronForward size={20} />
          ) : (
            <IoChevronBack size={20} />
          )}
        </button>
        <nav className=" flex flex-col gap-1 text-text-on-surface">
          <button
            className={`
    flex
    items-center
    rounded-xl
    px-4
    py-3
    transition-all
    duration-200

    ${collapsed ? "justify-center" : "gap-3 hover:translate-x-1"}
 bg-primary/5
   
  `}
            onClick={() => setIsOpen(false)}
          >
            <MdDashboard size={22} className="fill-primary shrink-0" />

            <span
              className={`
      label-md
      whitespace-nowrap
      transition-all
      duration-200
      overflow-hidden
      ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
    `}
            >
              Dashboard
            </span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={`
    flex
    items-center
    rounded-xl
    px-4
    py-3
    transition-all
    duration-200
    ${collapsed ? "justify-center" : "gap-3 hover:translate-x-1"}
  `}
          >
            <BsStars size={22} className="fill-primary shrink-0" />
            <span
              className={`
      label-md
      whitespace-nowrap
      transition-all
      duration-200
      overflow-hidden
      ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
    `}
            >
              AI Assistant
            </span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={`
    flex
    items-center
    rounded-xl
    px-4
    py-3
    transition-all
    duration-200
    ${collapsed ? "justify-center" : "gap-3 hover:translate-x-1"}
  `}
          >
            <CiCalendar size={22} className="fill-primary shrink-0" />
            <span
              className={`
      label-md
      whitespace-nowrap
      transition-all
      duration-200
      overflow-hidden
      ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
    `}
            >
              Daily Plan
            </span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={`
    flex
    items-center
    rounded-xl
    px-4
    py-3
    transition-all
    duration-200
    ${collapsed ? "justify-center" : "gap-3 hover:translate-x-1"}
  `}
          >
            <IoPersonOutline
              size={22}
              className="fill-primary shrink-0 text-primary"
            />
            <span
              className={`
      label-md
      whitespace-nowrap
      transition-all
      duration-200
      overflow-hidden
      ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
    `}
            >
              My Profile
            </span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={`
    flex
    items-center
    rounded-xl
    px-4
    py-3
    transition-all
    duration-200
    ${collapsed ? "justify-center" : "gap-3 hover:translate-x-1"}
  `}
          >
            <IoSettingsOutline
              size={22}
              className="fill-primary shrink-0 text-primary"
            />
            <span
              className={`
      label-md
      whitespace-nowrap
      transition-all
      duration-200
      overflow-hidden
      ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
    `}
            >
              Settings
            </span>
          </button>
        </nav>
      </aside>
      <main
        className={`
    transition-all
    duration-300
    pt-22
    bg-background
    ${collapsed ? "md:ml-20" : "md:ml-(--sidebar-width)"}
  `}
      >
        <Outlet />
      </main>
    </>
  );
}
