include("Framework/kontx/1.1/src/all.js");

include("Javascript/core/preferences.js");
include("Javascript/core/snippetableview.js");

include("Javascript/views/sidebar.js");

KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: MainView },
		{ id: 'view-Settings', viewClass: KONtx.views.AboutBox },
	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-Settings',
});