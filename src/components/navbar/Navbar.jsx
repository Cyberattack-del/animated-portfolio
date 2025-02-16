import "./navbar.scss"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <span>Harish</span>
                <div className="social">
                    <a href="#"><img src="/linkedin.png" alt=""/></a>
                    <a href="#"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/github.png" alt=""/></a>
                    <a href="#"><img src="/dribbble.png" alt=""/></a>

                </div>
            </div>
        </div>
    )
}
export default Navbar;
