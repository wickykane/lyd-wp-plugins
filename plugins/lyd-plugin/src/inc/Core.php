<?php
namespace LYD\WPRJSS;
use LYD\WPRJSS\base\Core as BaseCore;
use LYD\WPRJSS\rest\HelloWorld;
use LYD\WPRJSS\view\menu\Page;
use LYD\WPRJSS\view\widget\Widget;
use LYD\WPRJSS\view\shortcode\ShortCode;

// @codeCoverageIgnoreStart
defined('ABSPATH') or die('No script kiddies please!'); // Avoid direct file request
// @codeCoverageIgnoreEnd

/**
 * Singleton core class which handles the main system for plugin. It includes
 * registering of the autoload, all hooks (actions & filters) (see BaseCore class).
 */
class Core extends BaseCore {
    /**
     * Singleton instance.
     */
    private static $me;

    /**
     * Application core constructor.
     */
    protected function __construct() {
        parent::__construct();

        // Register all your before init hooks here
        // add_action('widgets_init', [$this, 'widgets_init']);
        add_action('init', [ShortCode::instance(), 'add_page_shortcode']);
        add_action('init', function() {
            ShortCode::instance()->add_page_shortcode('-page');
        });
    }

    /**
     * The init function is fired even the init hook of WordPress. If possible
     * it should register all hooks to have them in one place.
     */
    public function init() {
        // Register all your hooks here
        add_action('rest_api_init', [HelloWorld::instance(), 'rest_api_init']);
        add_action('admin_enqueue_scripts', [$this->getAssets(), 'admin_enqueue_scripts']);
        add_action('wp_enqueue_scripts', [$this->getAssets(), 'wp_enqueue_scripts']);
        add_action('admin_menu', [Page::instance(), 'admin_menu']);
    }

    /**
     * function to parse xml to json
     * */
    public static function parseXMLToJSON ($xml) {
        $json = json_encode(simplexml_load_string($xml));
        $array = json_decode($json, true);
        return $array;
    }

    /**
     * Register widgets.
     *
     * @codeCoverageIgnore Example implementations gets deleted the most time after plugin creation!
     */
    public function widgets_init() {
        register_widget(Widget::class);
    }

    /**
     * Get singleton core class.
     *
     * @return Core
     */
    public static function getInstance() {
        return !isset(self::$me) ? (self::$me = new Core()) : self::$me;
    }
}

// Inherited from packages/utils/src/Service
/**
 * See API docs.
 *
 * @api {get} /lyd-plugin/v1/plugin Get plugin information
 * @apiHeader {string} X-WP-Nonce
 * @apiName GetPlugin
 * @apiGroup Plugin
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     Name: "My plugin",
 *     PluginURI: "https://example.com/my-plugin",
 *     Version: "0.1.0",
 *     Description: "This plugin is doing something.",
 *     Author: "<a href="https://example.com">John Smith</a>",
 *     AuthorURI: "https://example.com",
 *     TextDomain: "my-plugin",
 *     DomainPath: "/languages",
 *     Network: false,
 *     Title: "<a href="https://example.com">My plugin</a>",
 *     AuthorName: "John Smith"
 * }
 * @apiVersion 0.1.0
 */
