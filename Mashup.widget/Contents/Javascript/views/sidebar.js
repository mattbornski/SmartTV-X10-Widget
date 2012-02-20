/**
 * @author jstone
 */

var MainView = new KONtx.Class({
	ClassName: 'MainView',
	
	Extends: KONtx.system.SidebarView,

	createView: function() {
	  var buttons = [{
	    label: 'Load Subview #1 w/ foo = 33',
	    events: {
				onSelect: function(event) {
					KONtx.application.loadView('view-Sub1', { foo: 33 });
				}
			},
	  }, {
		  label: "Load Subview #1 w/ foo = 42",
		  events: {
  		  onSelect: function(event) {
  			  KONtx.application.loadView('view-Sub1', { foo: 42 });
  		  }
  		},
  	}, {
			label: "Load Subview #2",
  		events: {
    		onSelect: function(event) {
      		KONtx.application.loadView('view-Sub2');
				}
      }
  	}, {
      label: "Load Full View",
			events: {
      	onSelect: function(event) {
  				KONtx.application.loadView('view-Full');
      	}
  		},
    }];
	  var vOffset = 0;
	  for (var index in buttons) {
	    var options = buttons[index];
	    if (options[guid] === undefined) {
	      options['guid'] = 'button' + index;
	    }
	    if (options['styles'] === undefined) {
	      options['styles'] = {};
	    }
	    if (options['styles']['width'] === undefined) {
	      options['styles']['width'] = Theme.viewSpecs.SIDE_BAR.width;
	    }
	    if (options['styles']['height'] === undefined) {
	      options['styles']['height'] = KONtx.utility.scale(35);
	    }
	    if (options['styles']['vOffset'] === undefined) {
	      options['styles']['vOffset'] = KONtx.utility.scale(vOffset);
	    }
	    // TODO determine actual height in case this was overridden.
	    vOffset += 35;
	    this.controls[options['guid']] = new KONtx.control.TextButton(options).appendTo(this);
	  }
		new KONtx.control.EmptySpace({
			styles: {
				vOffset: KONtx.utility.scale(vOffset),
				height: Theme.viewSpecs.SIDE_BAR.height - KONtx.utility.scale(vOffset),
			},
		}).appendTo(this);
	}
});
