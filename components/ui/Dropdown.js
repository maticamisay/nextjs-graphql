"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const Dropdown = ({ icon, showAbove = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownClass = cn(
    "absolute right-0 w-fit border rounded-lg shadow-lg bg-white divide-y divide-gray-100",
    {
      "bottom-full bottom-5 mb-2": showAbove,
      "mt-2": !showAbove,
    }
  );
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={cn({ "z-10": isOpen })} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none border rounded-lg hover:bg-gray-100 px-2 py-1"
      >
        {icon}
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={dropdownClass}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="p-2 bg-white">
            <div
              className={`text-sm bg-white flex flex-col justify-between`}
              role="menuitem"
              tabIndex={-1}
            >
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
