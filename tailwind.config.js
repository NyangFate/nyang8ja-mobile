/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './features/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        grey: {
          '00': '#F6F8FA',
          10: '#EAEEF2',
          20: '#D0D7DE',
          30: '#AFB8C1',
          40: '#8C959F',
          50: '#6E7781',
          60: '#57606A',
          70: '#434A53',
          80: '#32383F',
          90: '#24292F',
        },
        primary: {
          '00': '#F6F5FF',
          '01': '#DEDBFF',
          '02': '#B4ACFF',
          '03': '#7A6DF0',
        },
      },
      fontSize: {
        headline2: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '700',
          },
        ],
        headline1: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        subhead4: [
          '18px',
          {
            lineHeight: '26px',
            fontWeight: '700',
          },
        ],
        subhead3: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        subhead2: [
          '15px',
          {
            lineHeight: '23px',
            fontWeight: '700',
          },
        ],
        subhead1: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '700',
          },
        ],
        body4: [
          '18px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        body3: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        body2: [
          '15px',
          {
            lineHeight: '23px',
            fontWeight: '400',
          },
        ],
        body1: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        caption: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        captionBold: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
