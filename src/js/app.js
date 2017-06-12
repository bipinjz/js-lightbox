
/**
 * New Loader Object
 */
var newLoader = new Loader("loader1");
newLoader.resetId = "reset";

/**
 * Call Initilize
 */
init();


/*=============================================
=            Functions            =
=============================================*/
/**
 * To Initialize
 */
function init(){

    getDataJson();

    $.featherlight($('#mylightbox'));
    $.featherlight.defaults.closeOnClick = false;
    
}

/**
 * Get Json from URl
 */
function getDataJson(){
    var url = window.location.href + "data/data.json";
    var data;
    return $.ajax({
        url: url,
        dataType: 'json',
        success: function( data ) {
            var res = data.data.lightbox;
                        
            /* Start Progress with json data */
            newLoader.startProgress(res.start, res.finish, res.duration);
            
        },
        error: function( data,statusText, responseText) {
            alert( "ERROR:  " + statusText + " " + responseText );
        }
    });
    
}

/**
 *
 * Initilize on Clicking reset button
 *
 */
$("#reset").on("click", function(){
    init();
})
