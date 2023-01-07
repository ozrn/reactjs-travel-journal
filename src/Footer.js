export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-text">Made with 🧡</p>

      <p className="copyright-text">
        © {currentYear} Kevser. All rights reserved.
      </p>
    </footer>
  );
}
