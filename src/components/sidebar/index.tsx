import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItems {
  imageActive: string;
  imagePassive: string;
  link: string;
  active: boolean;
}

const SideBar = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([
    {
      imageActive: "../../../src/assets/aHome.png",
      imagePassive: "../../../src/assets/nHome.png",
      link: "/dashboard",
      active: true,
    },
    {
      imageActive: "../../../src/assets/aLayout.png",
      imagePassive: "../../../src/assets/nLayout.png",
      link: "/orders",
      active: false,
    },
    {
      imageActive: "../../../src/assets/aShopping-bag.png",
      imagePassive: "../../../src/assets/nShopping-bag.png",
      link: "/shoping",
      active: false,
    },
    {
        imageActive: "../../../src/assets/aUser.png",
        imagePassive: "../../../src/assets/nUser.png",
        link: "/user",
        active: false,
      },
      {
        imageActive: "../../../src/assets/nTrending-up.png",
        imagePassive: "../../../src/assets/nTrending-up.png",
        link: "/trend",
        active: false,
      },
      {
        imageActive: "../../../src/assets/nSearch.png",
        imagePassive: "../../../src/assets/nSearch.png",
        link: "/search",
        active: false,
      },
      {
        imageActive: "../../../src/assets/nBook.png",
        imagePassive: "../../../src/assets/nBook.png",
        link: "/books",
        active: false,
      },
      {
        imageActive: "../../../src/assets/aGift.png",
        imagePassive: "../../../src/assets/nGift.png",
        link: "/campaing",
        active: false,
      },
  ]);
  const handleButtonClick = (index: number) => {
    const updatedMenuItems = menuItems.map((item, i) => {
      if (i === index) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="object-left-top h-screen grid grid-rows-[1fr,1fr,7fr] px-8 py-8" style={{ backgroundColor: "#FF8901" }}>
      <div className="m-1 text-lg font-inter text-white font-bold">mart</div>
      <div className="grid gap-5 text-white">
        {menuItems.map((item: MenuItems, key: number) => {
          return (
            <Link to={item.link} key={key}>
              <button
                className={`hover:scale-110 rounded-lg ${item.active ? "bg-white" : "bg-[#FFB056]"}`}
                onClick={() => handleButtonClick(key)}
              >
                <div className="m-1 px-1 py-1">
                  <img className="h-8 w-8" src={item.active ? item.imageActive : item.imagePassive} alt="Image" />
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
