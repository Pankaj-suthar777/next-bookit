"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const menuItem = [
  {
    name: "Update Profile",
    url: "/me/update",
    icon: "fas fa-user",
  },
  {
    name: "Upload Avatar",
    url: "/me/upload_avatar",
    icon: "fas fa-circle",
  },
  {
    name: "Update Password",
    url: "/me/update_password",
    icon: "fas fa-lock",
  },
];

const UserSidebar = () => {
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
            activeMenuItem === item.url ? "active" : ""
          }`}
          aria-current={activeMenuItem === item.url ? "true" : "false"}
        >
          <i className={`${item.icon} fa-fw pe-2`}></i> {item.name}
        </Link>
      ))}
    </div>
  );
};

export default UserSidebar;
