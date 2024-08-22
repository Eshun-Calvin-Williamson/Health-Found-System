const HomePage=()=>{
    return(
        <>
        <br /><br />
            <div className="org-title">
                <h2>ORANISATION NAME</h2>
            </div>

            <div className="org-title-2">
                <h3>TEXT DESCRIPTION</h3>
            </div>
        

            <div className="image-holder">
                <div className="large-image">
                    <div className="wrapper-holder"></div>
                    <div className="mini-image"></div>
                </div>
            </div>
                <hr />
                <hr />
<br /><br />
            <div className="plan">
                <div className="one">1 </div>
                <div className="one">2</div>
                <div className="one">3</div>
            </div>
                <br />
                <br />
            <div className="org-title-2">
                <h3>OUR JOURNEY</h3>
            </div>
        
        <div className="container">
            <div className="wrapper">
                <div className="wrapper-holder">
                    <div id="slide-image-1"></div>
                    <div id="slide-image-2"></div>
                    <div id="slide-image-3"></div>
                    <div id="slide-image-4"></div>
                </div>
            
            </div>
            <div className="button-holder">
                    <a href="#slide-image-1" className="ttbuon"></a>
                    <a href="#slide-image-2" className="ttbuon" ></a>
                    <a href="#slide-image-3" className="ttbuon"></a>
                    <a href="#slide-image-4" className="ttbuon"></a>
            </div>
        </div>

        </>
    )
}

export default HomePage;