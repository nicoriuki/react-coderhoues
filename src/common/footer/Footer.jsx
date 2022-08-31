const Footer = () => {
  return (
    <>
      <div className="">
        <footer className="footer">
          <div className="footer__text">
            <span>© 2022 Vinoteca Coder</span>
          </div>
          <div className="footer_list">
            <ul className=" footer__inconos">
              <li className="ms-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener">
                  <div className="facebook "></div>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener">
                  <div className="whatsapp "></div>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener">
                  <div className="instagram "></div>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
