const createPlugin = require('tailwindcss/plugin')

/**
 * @typedef {(value: string) => string} MediaVariantCallback
 */


/**
 * @param {string} name
 * @return {MediaVariantCallback}
 */
function createCallback(name) {
    return (value) => `@media (${name}: ${value})`
}

/**
 * @typedef {Object} MediaVariant
 * @property {string} name
 * @property {MediaVariantCallback} callback
 * @property {Record<string, string>} values
 */

/** @type {MediaVariant[]} */
const variants = [
    {
        name: '@hover',
        callback: createCallback('hover'),
        values: {
            hover: 'hover',
            none: 'none',
        }
    },
    {
        name: '@any-hover',
        callback: createCallback('any-hover'),
        values: {
            hover: 'hover',
            none: 'none',
        }
    },
    {
        name: '@pointer',
        callback: createCallback('pointer'),
        values: {
            none: 'none',
            coarse: 'coarse',
            fine: 'fine',
        }
    },
    {
        name: '@any-pointer',
        callback: createCallback('any-pointer'),
        values: {
            none: 'none',
            coarse: 'coarse',
            fine: 'fine',
        }
    },
    {
        name: '@height',
        callback: createCallback('height'),
        values: {}
    },
    {
        name: '@min-height',
        callback: createCallback('min-height'),
        values: {}
    },
    {
        name: '@max-height',
        callback: createCallback('max-height'),
        values: {}
    },
    {
        name: '@update',
        callback: createCallback('update'),
        values: {
            none: 'none',
            slow: 'slow',
            fast: 'fast',
        }
    }
]


/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        './index.html'
    ],
    plugins: [
        createPlugin(function ({addVariant, matchVariant}) {

            for (const variant of variants) {
                matchVariant(
                    variant.name,
                    variant.callback,
                    {
                        values: variant.values,
                    }
                )
            }

        })
    ],
}

