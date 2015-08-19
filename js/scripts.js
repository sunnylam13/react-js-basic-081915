/** @jsx React.DOM */

/* 
* WARNING:  error = react js unexpected token <
	* https://stackoverflow.com/questions/20905227/reactjs-unexpected-token-error
* 
*/

////////////////////////////////////////////
// 		VARIABLES
////////////////////////////////////////////
	// create an empty object... which is the start of the application
	// you don't have to start it empty though... it is cleaner however
	// the word app is too generic...
	// you might use the initials of the website you're designing

	var reactT1 = {};

	// then below there you can add things
	

////////////////////////////////////////////
// 		END VARIABLES
////////////////////////////////////////////


////////////////////////////////////////////
// 		FUNCTIONS
////////////////////////////////////////////
	// don't forget to call the function in EXECUTION CODE area before running

	// NOTE:  in terms of organization, Ryan prefers to put all other functions and variables above the object.init() method however in reality it doesn't matter

	// ----------------------------------------
	// COMMENT BOX PRACTICE 1  ------------------
	// ----------------------------------------
		// tutorial1.js
		var CommentBox = React.createClass({
		  render: function() {
		    return (
		    	<div className="commentBox">
		    	  Hello, world! I am a CommentBox.
		    	</div>
		    );
		  }
		});
		React.render(
		  <CommentBox />,
		  document.getElementById('content')
		);
	// ----------------------------------------
	// END COMMENT BOX PRACTICE 1  ------------------
	// ----------------------------------------

	// ----------------------------------------
	// COMMENT BOX COMPONENT  ------------------
	// ----------------------------------------
		// var CommentA1 = React.createClass({
		// 	render: function () {
		// 		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		// 		return (
		// 			<div className="comment">
		// 				<h2 className="commentAuthor">
		// 					{this.props.author}
		// 				</h2>
		// 				<span dangerouslySetInnerHTML= {{ __html: rawMarkup }} />
		// 			</div>
		// 		);
		// 	}
		// });
	// ----------------------------------------
	// END COMMENT BOX COMPONENT  ------------------
	// ----------------------------------------

	

////////////////////////////////////////////
// 		END FUNCTIONS
////////////////////////////////////////////


////////////////////////////////////////////
// 		EVENTS
////////////////////////////////////////////
	// for storing various event listeners
	// this method will be used to listen for the open and close events and trigger those methods
	// Ryan C often uses this though Drew doesn't always
	reactT1.events = function () {
		//
	}
////////////////////////////////////////////
// 		END EVENTS
////////////////////////////////////////////



////////////////////////////////////////////
// 		INIT
////////////////////////////////////////////
	// method to initialize our application
	// all our code will be put inside here
	// you should not be defining things in here
	reactT1.init = function () {
		this.events();
	}
////////////////////////////////////////////
// 		END INIT
////////////////////////////////////////////

////////////////////////////////////////////
// 		EXECUTION CODE
////////////////////////////////////////////
	jQuery(document).ready(function($) {
		reactT1.init();
	});  //end doc.onready function
////////////////////////////////////////////
// 		END EXECUTION CODE
////////////////////////////////////////////