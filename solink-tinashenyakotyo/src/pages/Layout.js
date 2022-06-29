import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h2 style={{ textAlign: "center",  fontSize: 38, fontWeight: 'bold',   }}>SpaceX API Calls </h2>
          <p className='text-1xl text-solink-green font-bold' >
            <Link  to="/">Click here to Navigate to Home Page</Link>
          </p>
          <p className='text-1xl text-solink-green font-bold'>
            <Link to="/PastLaunches">Click here to Navigate to Past Launches</Link>
          </p>
       
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;