import React, { useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SetIsFilled } from '../App';

const Breadcrumbs = () => {

    const location = useLocation();
    const {setActive} = useContext(SetIsFilled);

    const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");

    let currentLink = ""

    //useEffect is used to render the hero componenet only once

    useEffect(() => {
        if(location.pathname !== "/"){
            setActive(false);
        }else{
            setActive(true);
        }

    },[location.pathname])


    return (
        <div className="container my-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
                    {
                        crumbs.map((crumb) => {
                
                            currentLink += `/${crumb}`

                            return (
                                <li className="breadcrumb-item" key={crumb}>
                                    <NavLink
                                        to={currentLink}
                                        className={({ isActive }) => (
                                            isActive ? "link-body-emphasis fw-semibold text-decoration-none" : "link-body-emphasis"
                                        )}
                                    >
                                        {crumb}
                                    </NavLink>
                                </li>
                            )

                        })
                    }
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs