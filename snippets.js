// script for pagination bug in elementor
// if the pagination does not work 
// or refresh the page on clicking next

<script>
jQuery(document).ready(function(){ 
    jQuery('a.page-numbers').each(function(index) { 
        var oldUrl = jQuery(this).attr('href'); 
        var pattern = /\/[0-9]\//;
        var matchedResult = oldUrl.match(pattern);
        var newResult = '/page' + matchedResult;
        var newUrl = oldUrl.replace(matchedResult, newResult);
        jQuery(this).attr('href', newUrl);
    }); 
});
</script>
