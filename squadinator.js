// content.js
// does stuff on the page

/**** RANDOM NOTES
* Messenger seems to link each chat to an a['data-href'] and the group id is stored in the data-href attribute.
* * The first element with data-href is the "new message" button. Skip this one when adding listeners.
*
*****/

$('div').click(function() {
	console.log($(this).find('a[data-href]').attr('data-href'))
})

// Code from the extension tutorial here. Not useful, except for reference.

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
		chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});

    }
  }
);