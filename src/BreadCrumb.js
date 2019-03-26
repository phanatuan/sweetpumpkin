import React from "react";
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <nav aria-label='breadcrumb'>
      <ol class='breadcrumb'>
        <li class='breadcrumb-item'>
          <Link to='/'><a href='#'>Home</a></Link>
        </li>
       
      </ol>
    </nav>
  );
};

export default BreadCrumb;
