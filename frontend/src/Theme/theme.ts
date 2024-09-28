// TeamTheme.ts

interface Team {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  }
  
  const teams: Team[] = [
    {
      name: "Brazil",
      primaryColor: "#FFD700", // Yellow
      secondaryColor: "#0033A0", // Blue
      textColor: "#0033A0" // Blue
    },
    {
      name: "Italy",
      primaryColor: "#0033A0", // Blue
      secondaryColor: "#FFFFFF", // White
      textColor: "#FFFFFF" // White
    },
    {
      name: "Argentina",
      primaryColor: "#A3C1E0", // Light Blue
      secondaryColor: "#0033A0", // Dark Blue
      textColor: "#000000" // Dark Blue or Black
    },
    {
      name: "France",
      primaryColor: "#0033A0", // Blue
      secondaryColor: "#FFFFFF", // White
      textColor: "#FFFFFF" // White or Red
    },
    {
      name: "Real Madrid",
      primaryColor: "#FFFFFF", // White
      secondaryColor: "#8A6F8F", // Purple
      textColor: "#000000" // Black
    },
    {
      name: "FC Barcelona",
      primaryColor: "#A50034", // Blue and Garnet
      secondaryColor: "#FFD700", // Yellow
      textColor: "#FFD700" // Yellow or White
    },
    {
      name: "Manchester United",
      primaryColor: "#DA291C", // Red
      secondaryColor: "#FFFFFF", // White
      textColor: "#FFFFFF" // White
    },
    {
      name: "Liverpool",
      primaryColor: "#DA291C", // Red
      secondaryColor: "#FFFFFF", // White
      textColor: "#FFFFFF" // White
    },
    {
      name: "Bayern Munich",
      primaryColor: "#A50034", // Red
      secondaryColor: "#FFFFFF", // White
      textColor: "#FFFFFF" // White
    },
    {
      name: "Manchester City",
      primaryColor: "#A3C1E0", // Sky Blue
      secondaryColor: "#FFFFFF", // White
      textColor: "#003B5C" // Navy or White
    },
    {
      name: "Paris Saint-Germain (PSG)",
      primaryColor: "#0033A0", // Dark Blue
      secondaryColor: "#C8102E", // Red
      textColor: "#FFFFFF" // White
    },
    {
      name: "Juventus",
      primaryColor: "#000000", // Black and White stripes
      secondaryColor: "#C7C9C7", // Gray
      textColor: "#FFFFFF" // Black
    },
  ];
  
  // Exporting the teams for use in other parts of the application
  export default teams;
  