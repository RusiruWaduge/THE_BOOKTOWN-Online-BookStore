function Header() {
  return (
    <div>
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column", // Stack items vertically
          alignItems: "center", // Center all items horizontally
          justifyContent: "center", // Center content vertically within the header
          backgroundColor: "#2c2b3d",
          padding: "10px 20px", // Adjust padding
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          height: "100px", // Set height for the header
          position: "relative", // Make the header a positioned container
        }}
      >
        {/* Logo and Title */}
        <a
          href="/"
          className="logo-link"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="../src/assets/logo1.png" // Replace with the path to your logo file
            alt="The Book Town Logo"
            style={{
              height: "110px",
              width: "auto",
              marginBottom: "-5px", // Adds space between logo and title
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              marginRight:"1200px",
              marginTop:"-48px",
              marginBottom:"-2px"
            }}
          />
          <h1
            style={{
              fontSize: "40px", // Larger font size for the title
              fontWeight: "900", // Emphasizes bold text
              color: "white", // Contrast color for text
              margin: "0", // Removed margin
              fontFamily: "'Roboto', sans-serif", // Modern font for readability
              letterSpacing: "1px", // Adds slight spacing between letters
              textTransform: "uppercase", // Uppercase for emphasis
              textAlign: "center", // Centers the text horizontally
              marginTop:"-100px"
            }}
          >
            THE BOOKTOWN
          </h1>
        </a>

        {/* Positioned "Your Place To Read" at the bottom */}
        <h3
          style={{
            fontSize: "18px", // Adjusted font size
            fontWeight: "100", // Light font weight
            color: "white", // Contrast color for text
            margin: "0", // Removed margin for tighter control
            fontFamily: "'Roboto', sans-serif", // Consistent font family
            letterSpacing: "1px", // Adds slight spacing between letters
            textAlign: "center", // Centers the text horizontally
            position: "absolute", // Absolute position inside the header
            bottom: "20px", // Positioned 10px from the bottom of the header
            left: "51%", // Center the text horizontally
            transform: "translateX(-50%)", // Adjust the positioning of the text to be perfectly centered
          }}
        >
          Your Place To Read
        </h3>
      </header>
    </div>
  );
}

export default Header;
