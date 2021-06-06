<?php
/**
 * Main file for WordPress.
 *
 * @wordpress-plugin
 * Plugin Name: 	lyd-plugin
 * Plugin URI:		
 * Description: 	A plugin for LYD Official
 * Author:          wickykane
 * Author URI:		
 * Version: 		1.0.0
 * Text Domain:		lyd-plugin
 * Domain Path:		/languages
 */

defined('ABSPATH') or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Plugin constants. This file is procedural coding style for initialization of
 * the plugin core and definition of plugin configuration.
 */
if (defined('LYD_PATH')) {
    return;
}
define('LYD_FILE', __FILE__);
define('LYD_PATH', dirname(LYD_FILE));
define('LYD_ROOT_SLUG', 'lyd-plugins');
define('LYD_SLUG', basename(LYD_PATH));
define('LYD_INC', trailingslashit(path_join(LYD_PATH, 'inc')));
define('LYD_MIN_PHP', '7.0.0'); // Minimum of PHP 5.3 required for autoloading and namespacing
define('LYD_MIN_WP', '5.2.0'); // Minimum of WordPress 5.0 required
define('LYD_NS', 'LYD\\WPRJSS');
define('LYD_DB_PREFIX', 'lyd'); // The table name prefix wp_{prefix}
define('LYD_OPT_PREFIX', 'lyd'); // The option name prefix in wp_options
define('LYD_SLUG_CAMELCASE', lcfirst(str_replace('-', '', ucwords(LYD_SLUG, '-'))));
//define('LYD_TD', ''); This constant is defined in the core class. Use this constant in all your __() methods
//define('LYD_VERSION', ''); This constant is defined in the core class
//define('LYD_DEBUG', true); This constant should be defined in wp-config.php to enable the Base#debug() method

// Check PHP Version and print notice if minimum not reached, otherwise start the plugin core
require_once LYD_INC .
    'base/others/' .
    (version_compare(phpversion(), LYD_MIN_PHP, '>=') ? 'start.php' : 'fallback-php-version.php');
