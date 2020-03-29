import { get as getKey } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

function fontStack(fonts) {
    return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const color = {
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    gray: ['#F7FAFC', '#EDF2F7', '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096', '#4A5568', '#2D3748', '#1A202C'],
    blue: ['#EBF8FF', '#BEE3F8', '#90CDF4', '#63B3ED', '#4299E1', '#3182CE', '#2B6CB0', '#2C5282', '#2A4365'],
    green: ['#F0FFF4', '#C6F6D5', '#9AE6B4', '#68D391', '#48BB78', '#38A169', '#2F855A', '#276749', '#22543D'],
    yellow: ['#FFFFF0', '#FEFCBF', '#FAF089', '#F6E05E', '#ECC94B', '#D69E2E', '#B7791F', '#975A16', '#744210'],
    orange: ['#FFFAF0', '#FEEBC8', '#FBD38D', '#F6AD55', '#ED8936', '#DD6B20', '#C05621', '#9C4221', '#7B341E'],
    red: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565', '#E53E3E', '#C53030', '#9B2C2C', '#742A2A'],
    purple: ['#FAF5FF', '#E9D8FD', '#D6BCFA', '#B794F4', '#9F7AEA', '#805AD5', '#6B46C1', '#553C9A', '#44337A']
};

const colors = {
    transparent: color.transparent,
    black: color.black,
    white: color.white,
    gray: color.gray,
    blue: color.blue,
    green: color.green,
    orange: color.orange,
    purple: color.purple,
    red: color.red,
    yellow: color.yellow
};

const Theme = {
    breakpoints: ['544px', '768px', '1012px', '1280px'],
    maxWidths: {
        small: '576px',
        medium: '768px',
        large: '992px',
        xlarge: '1200px'
    },
    fonts: {
        normal: fontStack([
            'neue-haas-unica',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol'
        ]),
        mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
    },
    fontWeights: {
        light: 300,
        normal: 400,
        bold: 600
    },
    letterSpacings: {
        tightest: '-0.05em',
        tighter: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    colors,
    borders: [0, '1px solid'],
    fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    lineHeights: {
        condensed: 1.25,
        condensedUltra: 1,
        default: 1.5
    },
    radii: {
        none: '0',
        sm: '4px',
        md: '6px',
        lg: '8px',
        full: '9999px'
    },
    shadows: {
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        xxl: '0 25px 50px -12px rgba(0,0,0, 0.25',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)'
    },
    space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
};

export default Theme;
export { colors };

export const get = key => themeGet(key, getKey(Theme, key));
