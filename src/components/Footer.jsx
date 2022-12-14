import ScrollToTop from "react-scroll-to-top"

const Footer = () => {
    return (
      <footer className=''>
        <div className='pt-2 pb-2 glass-footer'>
          <div className='d-flex justify-content-center contenido'>
            <a target='blank' href='https://github.com/LizardoCt'><i className='fab fa-github fa-2x p-2 text-dark' /></a>
            <a target='blank' href='https://twitter.com/SlaterGvch?s=09'><i className='fab fa-twitter fa-2x p-2 text-dark contenido2' /></a>
            <a target='blank' href='https://www.facebook.com/profile.php'><i className='fab fa-facebook fa-2x p-2 text-dark contenido3' /></a>
            <a href='#'><i className='fab fa-slack fa-2x p-2 text-dark contenido4' /></a>
            <a href='#'><i className='fab fa-linkedin fa-2x p-2 text-dark contenido5' /></a>
          </div>
          <ul className='d-flex justify-content-center container mt-1'>
            <li className='list-inline-item'><a className="link-nav" href='#'>Home</a></li>
            <li className='list-inline-item'><a className="link-nav" href='#'>About</a></li>
            <li className='list-inline-item'><a className="link-nav" href='#'>Privacy Policy</a></li>
          </ul>
          <p className='d-flex justify-content-center m-0 pb-1 text-ligth-50 c'>
          © 2023 Apod Nasa. By<a target='blank' href='https://github.com/LizardoCt'>nene.</a>
          </p>
        </div>
        <ScrollToTop id="scroll" smooth color="white" style={{background:"rgba(161, 161, 161, 0.452)"}} />
      </footer>
    )
  }
  
  export default Footer