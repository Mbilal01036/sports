const Header=()=>{
    return(
        <>
          <header>
           
                <div className="head-top">
                    <div className="head-left">
                        <div className="logo">
                            <img src="./src/assets/images/logo.png" alt="" />
                        </div>
                        <div className="sport">+21sports</div>
                    </div>
                    <div className="head-right">
                          <div className="navbar" id="navbar">
                            <ul>
                                <li>
                                    <div className="dropdown d-flex">
                                        <button className="dropdown-btn" onclick="showDropdown()" >
                                           <span> eng</span>
                                         <i className="fa-solid fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">pakistan</a></li>
                                            <li><a href="#">Japan</a></li>
                                            <li><a href="#">Canada</a></li>
                                            <li><a href="#"> Brazil</a></li>
                                            <li><a href="#">France</a></li>
                                        </ul>
                                    </div>
                                </li>
                             <li id="gaib"><a href="#">about</a></li>
                             <li id="gaib"><a href="#">Banner</a></li>
                              <li id="gaib"><a href="#">journey</a></li>
                               <li id="gaib"><a href="#">our atheletes</a></li>
                                <li id="gaib"><a href="#">study in the usa</a></li>
                                 <li id="gaib"><a href="#">our team</a></li>
                                  <li id="gaib"><a href="#">contact us</a></li>
                            </ul>

                        </div>
                        <div className="line"></div>
                        <div className="coaches">
                            FOR COACHES
                        </div>
                        <a className="start">start now</a>
                           <button className="menu-toggle" onclick="toggleMenu()">☰</button>
                    </div>
                </div>
                <div className="head-down">
                    <div className="navbar" id="navbar">
                            <ul>
                            
                             <li><a href="#Banner">dream</a></li>
                              <li><a href="#pick">pick your sport</a></li>
                               <li><a href="#atheletes">our atheletes</a></li>
                                <li><a href="#process">process</a></li>
                                 <li><a href="#success story">success story</a></li>
                                  <li><a href="#team">team</a></li>
                                   <li><a href="#journey">journey</a></li>
                                    {/* <li><a href="#footstep">footstep</a></li>
                                     <li><a href="#footer">footer</a></li> */}
                            </ul>

                       
                </div>
            </div>
        </header>
          
        
        </>
    )
}
export default Header; 