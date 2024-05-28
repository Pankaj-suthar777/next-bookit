"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const menuItem = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: "fas fa-tachometer-alt",
  },
  {
    name: "Rooms",
    url: "/admin/rooms",
    icon: "fas fa-hotel",
  },
  {
    name: "Bookings",
    url: "/admin/bookings",
    icon: "fas fa-receipt",
  },
  {
    name: "Users",
    url: "/admin/users",
    icon: "fas fa-user",
  },
  {
    name: "Reviews",
    url: "/admin/reviews",
    icon: "fas fa-star",
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  const [activeMenuItem, setActiveMenuItem] = useState(pathname);

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="list-group mt-5 pl-4">
      {menuItem.map((item, index) => (
        <Link
          onClick={() => handleMenuItemClick(item.name)}
          key={index}
          href={item.url}
          className={`fw-bold list-group-item list-group-item-action ${
            activeMenuItem.includes(item.url) ? "active" : ""
          }`}
          aria-current={activeMenuItem.includes(item.url) ? "true" : "false"}
        >
          <i className={`${item.icon} fa-fw pe-2`}></i> {item.name}
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
