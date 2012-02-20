var FullView = new KONtx.Class({
	ClassName: 'FullView',
	
	Extends: KONtx.system.FullscreenView,

	createView: function() {
		this.controls.button1 = new KONtx.control.TextButton({
			label: "Load Sidebar View",
			guid: "button1",
			events: {
				onSelect: function(event) {
					KONtx.application.loadView('view-Side');
				}
			},
			styles: {
				width: Theme.viewSpecs.SIDE_BAR.width,
				height: KONtx.utility.scale(35),
				vOffset: KONtx.utility.scale(70),
			}
		}).appendTo(this);
		
		new KONtx.control.EmptySpace({
			styles: {
				vOffset: KONtx.utility.scale(105),
				height: Theme.viewSpecs.SIDE_BAR.height - KONtx.utility.scale(105),
			},
		}).appendTo(this);
	}
});
