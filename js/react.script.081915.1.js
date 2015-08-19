/** @jsx React.DOM */

/* 
* WARNING:  error = react js unexpected token <
	* https://stackoverflow.com/questions/20905227/reactjs-unexpected-token-error
* You must insert this file in scripts.jade as a type="text/jsx"
* 
*/

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
// LIKE OR NOT  ------------------
// ----------------------------------------
	// var LikeOrNot = React.createClass({
	//     render: function () {
	//       return (
	//         <li>Like</li>
	//       );
	//     }
	// });

	// React.renderComponent(<LikeOrNot />, document.getElementById('content'));
// ----------------------------------------
// END LIKE OR NOT  ------------------
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

jQuery(document).ready(function($) {
	// alert("React JS script ready!");
});
