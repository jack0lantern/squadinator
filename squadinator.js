// content.js
// does stuff on the page

$('li').click(function() {
	console.log('Hi mom!')
})


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});

    }
  }
);