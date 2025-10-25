import * as astroPlugin from 'prettier-plugin-astro'
import * as tailwindcssPlugin from 'prettier-plugin-tailwindcss'

const astro = astroPlugin.default ?? astroPlugin
const tailwind = tailwindcssPlugin.default ?? tailwindcssPlugin

export default {
    plugins: [astro, tailwind],
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: 'es5',
    printWidth: 100,
}
