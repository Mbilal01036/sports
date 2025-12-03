const Learning=({clr})=>{
    let num= 25
    console.log('hey' , clr)
    return(
    <>
  <header classNameName={`${clr ? "new":""}`}> 
            <div classNameName={`container`}>
                <div className="head-top">
                    <div className="head-left">
                        <div className="logo">
                            <img src="image/logo.png" alt=""/>
                        </div>
                        <div className="sport">+{num}sports</div>
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
                             <li id="gaib"><a href="#">sports</a></li>
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
                                <li><a href="#">about</a></li>
                             <li><a href="#">sports</a></li>
                              <li><a href="#">journey</a></li>
                               <li><a href="#">our atheletes</a></li>
                                <li><a href="#">study in the usa</a></li>
                                 <li><a href="#">our team</a></li>
                                  <li><a href="#">contact us</a></li>
                            </ul>

                       
                </div>
            </div>
            </div>
        </header>
    </>
    )
   }
   export default Learning;