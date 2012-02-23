var MainView = new KONtx.Class({
	ClassName: 'MainView',
	
	Extends: KONtx.system.SidebarView,

	createView: function () {
	  /*var createX10ResponseHandler = function () {
	    return function () {
	      if (this.readyState === 4) {
          var dialog = new KONtx.dialogs.Alert({
            title: 'HTTP ' + this.status,
            message: 'Request complete',
            buttons: [{
              label: "Ok",
              callback: function () {
                ;
              }
            }],
            cancelCallback: function () {
              ;
            }
          });
          dialog.show();
        }
      }
	  };*/
	  var sendX10Request = function (house, unit, command) {
	    var request = new XMLHttpRequest();
      //request.onreadystatechange = createX10ResponseHandler();
      request.open('POST', 'http://192.168.10.77/' + house + '/' + unit + '/' + command);
      request.timeout = 10000;
      request.send();
	  };
	  var buttons = [{
	    label: 'Turn on N2',
	    events: {
				onSelect: function (event) {
				  //sendX10Request('N', '2', 'on');
				},
			},
	  }, {
		  label: "Turn off N2",
		  events: {
  		  onSelect: function (event) {
  			  //sendX10Request('N', '2', 'off');
  		  },
  		},
  	}];
	  var vOffset = 0;
	  for (var index in buttons) {
	    var options = buttons[index];
	    if (options['guid'] === undefined) {
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
