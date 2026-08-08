import wrjaLogo from "../assets/images/Logo/wrja-logo.png";

const galleryPlaceholders = Array.from({ length: 8 }, (_, index) => index + 1);

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="footer-logo">
            <span className="nav-logo-badge">
              <img src={wrjaLogo} alt="West Rand Judo Association" className="footer-logo-image" />
            </span>
          </div>
          <p>
            West Rand Judo Association has offered structured, safe judo
            training to the local community, welcoming athletes of all ages
            and grades.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1DgzXXuN9M/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          </div>
        </div>

        <div className="footer-contacts">
          <h3>Contacts</h3>
          <p>West Rand Judo Association NPC</p>
          <p>Office (NPC only): 3 Octavia, 49 Otto Street, Krugersdorp North</p>
          <p>For training enquiries, contact Golden Score Judo or KJK Judo Club directly.</p>
        </div>

        <div className="footer-gallery">
          <h3>Gallery</h3>
          <div className="footer-gallery-grid">
            {galleryPlaceholders.map((item) => (
              <img
                key={item}
                src={`https://placehold.co/200x200/1a1a1a/666666?text=${item}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} West Rand Judo Association. All rights reserved.</p>
      </div>
    </footer>
  );
}