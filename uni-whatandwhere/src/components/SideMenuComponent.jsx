import React from 'react';
import '../components/design-files-css/SideMenu.css';

const SideMenuComponent = () => {

  return (
    <div className="side-menu">
      <ul>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SideMenuComponent;
