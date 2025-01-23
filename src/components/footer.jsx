function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFDB58",
        padding: "20px", // Adjusted padding for responsiveness
        boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        bottom: "0",
        width: "100%",
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
          flexWrap: "wrap", // Allows wrapping on smaller screens
        }}
      >
        <img
          src="../assets/logo1.png" // Replace with your logo file path
          alt="The Book Town Logo"
          style={{
            height: "40px", // Reduced logo size
            width: "auto",
            marginRight: "10px",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            maxWidth: "100%", // Responsive adjustment
          }}
        />
        <h2
          style={{
            fontSize: "24px", // Adjust font size for larger screens
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
          gap: "20px", // Space between links
          marginBottom: "10px",
          flexWrap: "wrap", // Wrap links on smaller screens
        }}
      >
        <a
          href="/about"
          style={{
            textDecoration: "none",
            color: "#222",
            fontWeight: "500",
            fontSize: "14px",
            margin: "5px", // Adds spacing for better wrapping
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
            fontSize: "14px",
            margin: "5px",
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
            fontSize: "14px",
            margin: "5px",
          }}
        >
          Privacy Policy
        </a>
      </div>

      {/* Footer Text */}
      <p
        style={{
          fontSize: "12px", // Smaller font for footer text
          color: "#333",
          fontFamily: "'Roboto', sans-serif",
          margin: "0",
        }}
      >
        © {new Date().getFullYear()} The Book Town. All rights reserved.
      </p>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            footer {
              padding: 15px;
            }

            footer div img {
              height: 30px; /* Smaller logo for tablets */
            }

            footer div h2 {
              font-size: 20px; /* Smaller heading for tablets */
            }

            footer div a {
              font-size: 12px; /* Smaller links for tablets */
            }
          }

          @media (max-width: 480px) {
            footer {
              padding: 10px;
            }

            footer div img {
              height: 25px; /* Smallest logo size for mobile */
            }

            footer div h2 {
              font-size: 16px; /* Smallest heading for mobile */
            }

            footer div a {
              font-size: 10px; /* Smaller links for mobile */
              margin: 3px;
            }

            footer p {
              font-size: 10px; /* Smaller footer text for mobile */
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
