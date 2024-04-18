import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}


const theme = createTheme(
    {
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 650,
                laptop: 1200,
                desktop: 1600,
            }
        }
    }
);


export default theme;