import Logo from "../../assets/logo.png";
import Home from "../Pages/Default";

export default function Sidebar() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Home />
          <label
            htmlFor="my-drawer-3"
            className="my-5 btn drawer-button lg:hidden"
          >
            Destinations
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 relative">
            <form className="py-4">
              <div className="join relative">
                <input
                  type="text"
                  className="input join-item pl-10"
                  placeholder="Search..."
                />

                <span className="absolute left-3 top-1/2 -translate-y-1/2 loading loading-dots loading-xs"></span>

                <button className="btn join-item">Add New</button>
              </div>
            </form>

            <li>
              <a>Destination 1</a>
            </li>
            <li>
              <a>Destination 2</a>
            </li>
            <li>
              <a>Destination 2</a>
            </li>
            <li>
              <a>Destination 2</a>
            </li>
            <div className="flex justify-around absolute left-0 bottom-0 p-5 bg-base-300 w-full">
              <img src={Logo} className="w-fit" alt="" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
