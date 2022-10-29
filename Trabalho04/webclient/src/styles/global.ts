import { createGlobalStyle } from "styled-components";


// Estilo padrão para toda a aplicação.
export const GlobalStyle = createGlobalStyle`
    :root {
        --neutral-color-high-lightest: #FFFFFF;
        --neutral-color-high-main: #F5F5F5;
        --neutral-color-high-medium: #C4C4C4;
        --neutral-color-low-medium: #666666;
        --neutral-color-low-lightest: #979797;
        --neutral-color-low-light: #818181;
        --neutral-color-low-main: #333333;
        --neutral-color-low-dark: #000000;
        --neutral-color-high-light: #DEDEDE;
        --feedback-color-error-main: #FF4D4D;
        --feedback-color-error-dark: #B23535;
        --feedback-color-sucess-main: #20C6AD;
        --feedback-color-sucess-dark: #006666;
        --feedback-color-alert-main: #FCC002;

        --background: #282c34;
    }
    /* Default Patterns */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* From here on down these are styles that will automatically be applied to the default components */
    html, body, #root {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: var(--neutral-color-low-main);
    }
    button {
        cursor: pointer;
        font-family: 'Lato', sans-serif;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

// Fontes e estilos padrão para toda a aplicação.
export const headingLarge = `
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
`;

export const headingMedium = `
    font-size: 24px;
    font-weight: 800;
    line-height: 130%;
`;

export const headingSmall = `
    font-size: 20px;
    font-weight: 800;
    line-height: 130%;
`;

export const headingXSmall = `
    font-size: 16px;
    font-weight: 800;
    line-height: 130%;
`;

export const subtitleLarge = `
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
`;

export const subtitleMedium = `
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
`;

export const subtitleSmall = `
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
`;

export const subtitleXSmall = `
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
`;

export const paragraphLarge = `
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
`;

export const paragraphMedium = `
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
`;

export const paragraphXMedium = `
    font-size: 16px;
    font-weight: 600;
    line-height: 130%;
`;

export const paragraphSmall = `
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
`;

export const paragraphXSmall = `
    font-size: 14px;
    font-weight: 600;
    line-height: 130%;
`;

export const paragraphXXXSmall = `
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
`;

export const paragraph4XSmall = `
    font-size: 10px;
    font-weight: 400;
    line-height: 130%;
`;