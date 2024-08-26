const Footer = () => {
    const footerLinks = [
      {
        title: "About Us",
        links: [
          { text: "Our Story", href: "#" },
          { text: "Meet the Team", href: "#" },
          { text: "Contact Us", href: "#" },
        ],
      },
      {
        title: "Services",
        links: [
          { text: "Pet Grooming", href: "#" },
          { text: "Pet Adoption", href: "#" },
          { text: "Pet Supplies", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Pet Care Tips", href: "#" },
          { text: "Pet Health Articles", href: "#" },
          { text: "Pet Adoption Process", href: "#" },
        ],
      },
      {
        title: "Stay Connected",
        links: [
          { text: "Facebook", href: "#", icon: "fab fa-facebook-f" },
          { text: "Instagram", href: "#", icon: "fab fa-instagram" },
          { text: "Twitter", href: "#", icon: "fab fa-twitter" },
        ],
      },
    ];
  
    return (
      <footer class="footer">
        <div class="container">
          {footerLinks.map((section, index) => (
            <div class="footer-section" key={index}>
              <h5 class="footer-title">{section.title}</h5>
              <ul class="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} class="footer-link">
                      {link.icon && <i class={link.icon} aria-hidden="true"></i>}
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    );
  };

  export default Footer;