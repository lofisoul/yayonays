import React from 'react';
const Isvg = require('react-inlinesvg');

class Header extends React.Component {

  render() {
    return (
      <header className="header">
      <Isvg src="/svg/logo.svg">
        {/*Here's some optional content for browsers that don't support XHR or inline SVGs. You can use other React components here too. Here, I'll show you.

          <img src="/path/to/myfile.png" />*/}
        </Isvg>
      </header>
    )
  }
}

export default Header;
