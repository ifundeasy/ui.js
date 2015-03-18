var element = ui.new({
	attr : {
		id : "parent",
		class : "classname"
	},
	css : {
		"paddingTop" : '40px',
		"padding-left" : '40px',
		"margin" : '40px',
		"marginLeft" : '10%'
	},
	items : [
		{
			el : 'h1',
			text : 'Hello\u00a0UI.js!'
		},
		{
			text : 'Generate html tag with javascript object\'s ',
			items : [
				{
					el : 'button',
					text : 'yup!',
					event : {
						click : console.log('not clicked !')
					}
				},
				{
					el : 'button',
					attr : {
						id : 'btn1',
						style : 'margin-left:5px'
					},
					text : 'click me..',
					event : {
						click : function (el, opts) {
							//console.log(el, opts);
							alert('clicked btn1 !');
						}
					}
				}
			]
		}
	]
});

document.getElementsByTagName('body')[0].appendChild(element);