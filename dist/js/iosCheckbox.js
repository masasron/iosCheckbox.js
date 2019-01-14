/**
 * iosCheckbox.js
 * Version: 1.0.0
 * Author: Ron Masas
 */
(function($) {
    $.fn.extend({
        iosCheckbox: function() {
            this.destroy = function(){
                $(this).each(function() {
            		$(this).next('.ios-ui-select').remove();
                });
            };
            
            if ($(this).attr('data-ios-checkbox') === 'true') {
                return;
            }
            
            $(this).attr('data-ios-checkbox', 'true');
            
            $(this).each(function(i) {
                /**
                 * Original checkbox element
                 */
                var org_checkbox = $(this);

                org_checkbox.addClass('ios-checkbox-input');

                /**
                 * Wrap the input field with a div containing ID and classes
                 * The ID of wrapper element is based on ID, Name or Index of input field
                 */
                var org_checkbox_id = 'ios-checkbox-' + ( org_checkbox.attr('name') || org_checkbox.attr('id') || (i + 1) ),
                    org_checkbox_classes = 'ios-checkbox-wrap';

                org_checkbox.wrap('<div id="' + org_checkbox_id + '" class="' + org_checkbox_classes + '"></div>');

                /**
                 * iOS checkbox div
                 */
                var ios_checkbox = jQuery("<div>", {
                    class: 'ios-ui-select'
                }).append(jQuery("<div>", {
                    class: 'inner'
                }));

                // If the original checkbox is checked, add checked class to the ios checkbox.
                if (org_checkbox.is(":checked")) {
                    ios_checkbox.addClass("checked");
                }
                
                // Hide the original checkbox and print the new one.
                org_checkbox.hide().after(ios_checkbox);
                
                if (org_checkbox.is(":disabled")){
                   // In case the original checkbox is disabled don't register the click event.
                	 return ios_checkbox.css('opacity','0.6');
                }
                
                // Add click event listener to the ios checkbox
                ios_checkbox.click(function() {
                    if (org_checkbox.is(":disabled")) return; //prevent click on disabled checkbox

                    // Toggel the check state
                    ios_checkbox.toggleClass("checked");
                    // Check if the ios checkbox is checked
                    if (ios_checkbox.hasClass("checked")) {
                        // Update state
                        org_checkbox.attr('checked','checked');
                    } else {
                        // Update state
                        org_checkbox.removeAttr('checked');
                    }
                });
            });
            return this;
        }
    });
})(jQuery);
