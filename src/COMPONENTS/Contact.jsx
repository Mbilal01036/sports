





const Contact = ( {headChange , none, className}) =>{
    console.log(headChange , 'getting it ')
    return(
        <>
       <div className="form">
        <div className="container">
            <div className="form-box">
                <div className="form-left">
                    <img src="https://e7.pngegg.com/pngimages/825/621/png-clipart-gmail-logo-inbox-by-gmail-email-google-account-icon-gmail-logo-angle-text.png" alt="" />
                </div>
                <div className="form-right">
                    <h1>{`${headChange?"Login form":"get in touch"}`} </h1>
                    <div className="info">
                    <input className="bilal" type="text"  id="name" placeholder="Name" />
                    <input className="bilal" type="text" id="Email" placeholder="Email"/>
                    {
                        !none && (

                            <textarea className="anas" placeholder="Message"></textarea>
                        )
                    }

                    <button>{`${headChange?"Login ":"send"}`}   </button>
                     </div> 
                </div> 
            </div>
        </div>
       </div>
        </>
    )
}
export default Contact;