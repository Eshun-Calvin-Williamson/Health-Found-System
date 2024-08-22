function  Footer(){
    return(
        <>
            <div className="last">
                <div className="info">
                    {/* <img src="" alt="" /> */} <h1>LOGO</h1>
                </div>
                <div className="info">
                    <form action="/submit">
                        
                        <input type="text" name="email" placeholder="enter email" id="" required />
                        <br />
                        <textarea name="text" placeholder="type your question" id=""></textarea>
                        <br />
                        <button name="/submit" className="submit">Submit</button>
                    </form>
                </div>
                <footer>
                    <p>&copy;{new Date().getFullYear()} Organisation Name
                        (and to know)
                    </p>
                 </footer>
            </div>

           
        </>
        
    )
}

export default Footer;