/**
 * Prefill the label in the current user language using one of the existing fallbacks
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/Autofill.js]] ([[File:User:Helder.wiki/Tools/Autofill.js]])
 */
/*jshint browser: true, camelcase: true, curly: true, eqeqeq: true, immed: true, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: true, undef: true, unused: true, strict: true, trailing: true, maxlen: 120, evil: true, onevar: true */
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';
	var fallbacks = {
			'pt-br': [ 'pt', 'es', 'gl' ],
			'pt': [ 'pt-br', 'es', 'gl' ]
		};
 
	/**
	 * Create the links
	 */
	function init() {
		var uLang = mw.config.get( 'wgUserLanguage' ),
			$input = $( 'h1' ).find( 'input' ),
			i, fallback;
		if ( !fallbacks[ uLang ] || !fallbacks[ uLang ].length || !$input.length ){
			return;
		}
		for ( i = 0; i < fallbacks[ uLang ].length; i++ ){
			fallback = $( '.wb-terms-label-' + fallbacks[ uLang ][i] )
				.text().replace( /^\s+|\s+$/g, '' );
			if ( fallback ){
				break;
			}
		}
		if ( fallback ){
			$input.val( fallback )
				.trigger( 'input' )
				.focus();
		}
	}
 
	$( init );

}( mediaWiki, jQuery ) );