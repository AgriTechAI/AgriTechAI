"use client";

import { HomeIcon, ProjectorIcon, ShoppingBag } from "lucide-react";

export function Component() {
  return (
    <nav className="flex bg-transparent mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon className="w-4 h-4" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ProjectorIcon className="w-4 h-4"/>
            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Projects
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
          <ShoppingBag className="w-4 h-4"/>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Flowbite
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
