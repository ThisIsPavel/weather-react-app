 export const ChangeTheme = (theme) => {
    const root = document.querySelector(":root");
    const COMPONENTS = ["body-bg", "components-bg", "cards-bg", "text-color"];
    COMPONENTS.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
 }