<?php
namespace LYD\WPRJSS\view\shortcode;
use LYD\WPRJSS\base\UtilsProvider;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

class ShortCode {
    use UtilsProvider;

    const COMPONENT_ID = LYD_MY_DOCUMENT . '-component';

    private $postFix = '';
    /**
     * C'tor.
     */
    private function __construct() {
        // Silence is golden.
    }

    /**
     * Add new menu page.
     */
    public function add_page_shortcode($postFix = '') {
        $this->postFix = $postFix;
        return add_shortcode(LYD_MY_DOCUMENT . $this->postFix, [
            $this,
            'render_shortcode'
        ] );
    }

    /**
     * Render the content of the shortcode.
     */
    public function render_shortcode($atts, $content = '') {
        echo '<div id="' . LYD_MY_DOCUMENT . $this->postFix . '" class="wrap"></div>';
    }

    /**
     * New instance.
     */
    public static function instance() {
        return new ShortCode();
    }
}
