# ui.js
Javascript class library for generate html tag with javascript object's way

#### Update
May 3rd, 2015.

#### Contributor
[Afa Rappresent]

#### License
MIT

#### Version
0.0.1

#### Example
Can be found [here](https://github.com/rappresent/ui.js/tree/master/example)

[Afa Rappresent]:https://github.com/rappresent

#### Feature
Generate html tag with javascript object's
- Have no depencencies of another libraries yet
- You can use this library for load another javascript file
- Support generate html tag
    - Styles and attribute : id, class, name, style, etc.
    - Children element : text or other html tag.
    - Event listener

#### How
This section will describe installation and term of using this library
- Installation
```html
<script type="application/javascript" src="ui.min.js"></script>
```
- Basic Element
    - HTML notation
    ```html
    <button>Hello</button>
    ```
    - UI.js notation
    ```js
    var abc = ui.new({
        el   : 'button', //if 'el' is not set it will set to 'div'
        text : 'Hello'
    })
    ```
- Element with attribute dan style
    - HTML notation
    ```html
    <div
        id="content"
        name="first"
        class="no-padding with-bg"
        style="position:absolute; top:10px; margin-left:10%"
    >Hello</div>
    ```
    - UI.js notation
    ```js
    var abc = ui.new({
        text : 'Hello',
        attr : {
            id    : "content",
            name  : "first",
            class : "no-padding with-bg",
            //bad way for adding style
            //style : "position:absolute; top:10px; margin-left:10%"
        },
        css : {
            "position" : "absolute",
            "top" : "10px",
            "margin-left": "10%"
        }
    })
    ```
- Advanced element with item children and events
    - HTML notation
    ```html
    <script type="application/javascript">
        var clickBtn = function () {
            alert("Hello world!");
        }
    </script>
    <div id="parent" class="classname" style="padding-top: 40px; padding-left: 40px; margin: 40px 40px 40px 10%;">
        <h1>Hello UI.js!</h1>
        <div>
            Generate html tag with javascript object's
            <button>yup!</button>
            <button id="btn1" style="margin-left:5px" onclick="clickBtn()">click me..</button>
        </div>
    </div>
    ```
    - UI.js notation
    ```js
    var abc = ui.new({
        attr : {
    	    id    : "parent",
    	    class : "classname"
    	},
    	css : {
    		"paddingTop" : '40px',
    		"padding-left" : '40px',
    		"margin" : '40px',
    		"marginLeft" : '10%'
    	},
    	items : [
    		{ el : 'h1', text : 'Hello\u00a0UI.js!' },
    		{
    			text  : 'Generate html tag with javascript object\'s ',
    			items : [
    				{
    					el    : 'button',
    					text  : 'yup!',
    					event : { click : console.log('not clicked !') }
    				},
    				{
    					el    : 'button',
    					attr  : { id : 'btn1', style : 'margin-left:5px' },
    					text  : 'click me..',
    					event : {
    						click : function (el, opts) {
    							alert('Hello world!');
    						}
    					}
    				}
    			]
    		}
    	]
    });
    ```
