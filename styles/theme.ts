import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      // on garde les breakpoints de base
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,

      // on en ajoute de nouveaux
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
