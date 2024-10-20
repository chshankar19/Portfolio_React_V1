// Updated Theme.js with new color palette
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F2F0EF", // Off-white
      200: "#BBBDBC", // Light Gray
      300: "#245F73", // Deep Blue
      400: "#733E24", // Warm Brown
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

export default theme;