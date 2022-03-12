var host = "cdnjs.cloudflare.com/ajax/libs/jquery/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		if(details.url.includes("://code.jquery.com/jquery-")){
			var vnum = details.url.match(/([0-9]\.[0-9]\.[0-9])/)[0]
			var protocall = details.url.match(/^.*\/\//)
			return {redirectUrl: protocall + host + vnum + (details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]).replace('-'+vnum,'')};
		}
		else{
			return
		}
    },
    {
        urls: [
            "*://*/*"
        ],
        types: ["script"]
    },
    ["blocking"]
);