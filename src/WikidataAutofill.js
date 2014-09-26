/**
 * Prefill the label in the current user language using one of the existing fallbacks
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
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