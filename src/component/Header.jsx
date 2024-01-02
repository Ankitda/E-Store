import { NavLink } from "react-router-dom"
import DropDown from "./DropDown"
import { useContext, useRef, useState } from "react";
import { tabs } from "./data";
import { SetIsFilled } from "../App";
import styles from "./Header.module.css"

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const {setActive} = useContext(SetIsFilled);
  const topValue = useRef("");

  const handleClick = () => {
    if (toggle) {
      topValue.current = "-170px"
    } else {
      topValue.current = "60px"
    }
    setToggle((prevValue) => (
      !prevValue
    ))
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <header className={styles["header"]}>
      <div
        className={styles["menu-icon"]}
        onClick={handleClick}>
        {toggle ? "𐤕" : "☰"}
      </div>
      <nav className='nav' style={{ top: topValue.current }}>

        {
          tabs.map((tab) => (
            <NavLink to={tab}
              key={tab}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "#333" : "",
                borderRadius: isActive ? "20px" : "",
                padding: isActive ? "0px 8px" : "",
                fontWeight: isActive ? "300px" : ""
              })}
              onClick={() => setActive(false)}
            >
              {capitalizeFirst(tab)}
            </NavLink>
          ))
        }
        <span className={styles[`${toggle ? "option" : ""}`]}><DropDown /></span>
      </nav>
    </header>
  )
}

export default Header