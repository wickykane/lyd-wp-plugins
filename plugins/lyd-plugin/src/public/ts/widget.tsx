/* istanbul ignore file: we do not need to care about the entry point file as errors are detected through E2E */

/**
 * The entrypoint for the WordPress frontend widget.
 */

import "@lyd-plugins/utils"; // Import once for startup polyfilling (e. g. setimmediate)
import { render } from "react-dom";
import { Widget } from "./widget/index";
import { ShortCode } from "./shortcode/index";
import { MyDocumentPage } from "./shortcode/my-document";
import "./style/widget.scss";
import "antd/dist/antd.css";

// Query DOM for all widget wrapper divs
const widgets = document.querySelectorAll("div.react-demo-wrapper");

// Iterate over the DOM nodes and render a React component into each node
widgets.forEach((item) => render(<Widget />, item));

// Render new short code here
const shortcode = document.getElementById("lyd-my-document");
if (shortcode) {
    render(<ShortCode />, shortcode);
}

const myDocumentPage = document.getElementById("lyd-my-document-page");
if (myDocumentPage) {
    render(<MyDocumentPage />, myDocumentPage);
}
