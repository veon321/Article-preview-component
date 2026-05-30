# Frontend Mentor - Article preview component solution

This is a clean, responsive, and modern solution to the Article preview component challenge on Frontend Mentor.

## Links

- Solution URL: [https://github.com/veon321/Article-preview-component](https://github.com/veon321/Article-preview-component)
- Live Site URL: [https://veon321.github.io/Article-preview-component/](https://veon321.github.io/Article-preview-component/)

## Built with

- **Semantic HTML5 markup**: Built using structural landmarks (`<main>`, `<article>`) and appropriate heading hierarchies (`<h1>`) to comply with semantic formatting rules and access guidelines.
- **CSS Custom Properties (Variables)**: Used for robust implementation of the specific design tokens, managing strict color schemes (Very Dark Grayish Blue) and font families.
- **Flexbox Layout**: Employed to manage component axis shifting, handling asset structures dynamically from desktop rows to mobile card columns.
- **Modern CSS Math Functions (clamp())**: Applied to text modules and section paddings to govern fluid responsive content boundaries across custom device targets.
- **Vanila JavaScript**: Implemented for light state handling, managing active event hooks during interface interaction.

## Features

- **State Persistence & Context Control**: Leverages a click event listener structure combined with a `.contains()` document checking routine to automatically collapse the share overlay when a user clicks outside the interface frame.
- **Responsive Stacking States**: Switches between a floating micro-tooltip with built-in layout pointers (CSS triangle indicators) on desktop viewports and an integrated, full-width status block that substitutes author profiles on small devices.
- **Adaptive SVG Assets**: Utilizes native CSS filter pipelines (`filter: brightness(0) invert(1)`) to reverse asset contrasts on active trigger click events, altering target asset paths dynamically without extra HTTP requests.
- **Fluid Dynamic Architecture**: Eradicates restrictive device breakpoints by implementing dynamic scaling expressions (`clamp()`), enforcing textual layers and asset distributions to resize within the mobile-to-desktop viewport continuum.
