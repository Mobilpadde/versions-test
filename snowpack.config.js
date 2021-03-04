/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
    plugins: ['snowpack-plugin-stylus'],
    devOptions: {
        open: 'none',
        output: 'stream',
    },
};
