define(function(require, exports, module) {
	var Engine             = require("famous/core/Engine");
	var Surface            = require("famous/core/Surface");
	var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");

	var mainCtx = Engine.createContext();

	var layout = new HeaderFooterLayout({
	    headerSize: 100,
	    footerSize: 50
	});

	layout.header.add(new Surface({
	    size: [undefined, undefined],
	    content: "Header",
	    properties: {
	        backgroundColor: "#3cf",
	        color: "white"
	    }
	}));

	layout.content.add(new Surface({
	    size: [undefined, undefined],
	    content: "Content",
	    properties: {
	        backgroundColor: "white",
	        color: "#3cf"
	    }
	}));

	layout.footer.add(new Surface({
	    size: [undefined, undefined],
	    content: "Footer",
	    properties: {
	        backgroundColor: "#3cf",
	        color: "white"
	    }
	}));

	mainCtx.add(layout);
});
