import React, { Fragment } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme, get } from '../Theme';

const Reboot = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-family: ${get('fonts.normal')};
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(${get('colors.black')}, 0);
    }

    @-ms-viewport {
        width: device-width;
    }

    article,
    aside,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
        display: block;
    }

    body {
        margin: 0;
        font-family: ${get('fonts.normal')};
        font-size: ${get('fontSizes.2')};
        font-weight: 400;
        line-height: ${get('lineHeights.default')};
        color: ${get('colors.gray.7')};
        text-align: left;
        background-color: ${get('colors.gray.1')};
    }

    [tabindex='-1']:focus {
        outline: 0 !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    dfn {
        font-style: italic;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: ${get('colors.blue.6')};
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;

        &:hover {
            color: ${get('colors.blue.5')};
            text-decoration: underline;
        }
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;

        &:focus,
        &:hover {
            color: inherit;
            text-decoration: none;
        }

        &:focus {
            outline: 0;
        }
    }

    pre,
    code,
    kbd,
    samp {
        font-family: ${get('fonts.mono')};
        font-size: 1em;
    }

    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        -ms-overflow-style: scrollbar;
    }

    figure {
        margin: 0 0 1rem;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    svg {
        overflow: hidden;
        vertical-align: middle;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: ${get('colors.gray.5')};
        text-align: left;
        caption-side: bottom;
    }

    th {
        text-align: inherit;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    button {
        border-radius: 0;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type='radio'],
    input[type='checkbox'] {
        box-sizing: border-box;
        padding: 0;
    }

    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
        -webkit-appearance: listbox;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        line-height: inherit;
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }
`;

const ThemeProvider = props => {
    let themeMode = lightTheme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeMode = darkTheme;
    }

    return (
        <StyledThemeProvider theme={themeMode}>
            <Fragment>
                <Reboot />
                {props.children}
            </Fragment>
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
