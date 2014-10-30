/**
 * iosCheckbox.js
 * Version: 1.0.0
 * Author: Ron Masas
 */

(function( $ ){
    $.fn.extend({
        iosCheckbox: function ( ) {
			$(this).each(function (){
			       /**
				* Original checkbox element
				*/
				var org_checkbox = $(this);
			       /**
				* iOS checkbox div
				*/
				var ios_checkbox = jQuery("<div>",{class: 'ios-ui-select'}).append(jQuery("<div>",{class: 'inner'}));
				
				// If the original checkbox is checked, add checked class to the ios checkbox.
				if (org_checkbox.is(":checked")){
					ios_checkbox.addClass("checked");
				}
				// Hide the original checkbox and print the new one.
				org_checkbox.hide().after(ios_checkbox);
				// Add click event listener to the ios checkbox
				ios_checkbox.click(function (){
					// Toggel the check state
					ios_checkbox.toggleClass("checked");
					// Check if the ios checkbox is checked
					if (ios_checkbox.hasClass("checked")){
						// Update state
						org_checkbox.prop('checked', true);
					}else{
						// Update state
						org_checkbox.prop('checked', false);
					}
				});
			});
        }
    });
})(jQuery);
