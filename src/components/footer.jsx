function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFDB58",
        padding: "30px 30px", // Reduced padding to shorten the footer height
        boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        bottom: "0",
        width: "96%",
        textAlign: "center",
        flexDirection: "column",
        marginTop: "auto",
      }}
    >
      {/* Footer Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px", // Reduced margin for a more compact layout
        }}
      >
        <img
          src="../assets/logo1.png" // Replace with the path to your logo file
          alt="The Book Town Logo"
          style={{
            height: "40px", // Reduced logo size
            width: "auto",
            marginRight: "10px",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
        <h2
          style={{
            fontSize: "24px", // Reduced font size for logo text
            fontWeight: "900",
            color: "#222",
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: "1px",
            textTransform: "uppercase",
            margin: "0",
          }}
        >
          The BookTown
        </h2>
      </div>

      {/* Footer Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px", // Reduced gap between links for a more compact look
          marginBottom: "10px", // Reduced margin for tighter layout
        }}
      >
        <a
          href="/about"
          style={{
            textDecoration: "none",
            color: "#222",
            fontWeight: "500",
            fontSize: "14px", // Reduced font size for links
          }}
        >
          About Us
        </a>
        <a
          href="/contact"
          style={{
            textDecoration: "none",
            color: "#222",
            fontWeight: "500",
            fontSize: "14px", // Reduced font size for links
          }}
        >
          Contact
        </a>
        <a
          href="/privacy"
          style={{
            textDecoration: "none",
            color: "#222",
            fontWeight: "500",
            fontSize: "14px", // Reduced font size for links
          }}
        >
          Privacy Policy
        </a>
      </div>

      {/* Footer Text */}
      <p
        style={{
          fontSize: "12px", // Reduced font size for footer text
          color: "#333",
          fontFamily: "'Roboto', sans-serif",
          margin: "0",
        }}
      >
        © {new Date().getFullYear()} The Book Town. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
