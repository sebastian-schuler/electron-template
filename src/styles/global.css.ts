import { globalStyle } from "@vanilla-extract/css";

globalStyle(`*`, {
    boxSizing: `border-box`,
    margin: 0,
})

globalStyle(`body`, {
    lineHeight: 1.5,
    WebkitFontSmoothing: `antialiased`,
})

globalStyle(`img, picture, video, canvas, svg`, {
    display: `block`,
    maxWidth: `100%`,
})