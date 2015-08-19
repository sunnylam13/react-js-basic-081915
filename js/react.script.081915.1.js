/** @jsx React.DOM */

/* 
* WARNING:  error = react js unexpected token <
	* https://stackoverflow.com/questions/20905227/reactjs-unexpected-token-error
* You must insert this file in scripts.jade as a type="text/jsx"
*
* CODE SKELETON
	* - CommentBox
		  - CommentList
		    - Comment
		  - CommentForm
	* so the CommentList and CommentForm are children of CommentBox
	* Comment is a child of CommentList
*/


// ----------------------------------------
// COMMENT LIST  ------------------
// ----------------------------------------
	
	var CommentList = React.createClass({displayName: "CommentList",
		render: function () {
			return (
				React.createElement("div", {className: "commentList"}, 
					"Hello, world!  I am a CommentList."
				)
			);
		}
	});
// ----------------------------------------
// END COMMENT LIST  ------------------
// ----------------------------------------


// ----------------------------------------
// COMMENT FORM  ------------------
// ----------------------------------------

	var CommentForm = React.createClass({displayName: "CommentForm",
	  render: function() {
	    return (
	    	React.createElement("div", {className: "commentForm"}, 
	    		"Hello world!  I am a CommentForm!"
	    	)
	    );
	  }
	});
// ----------------------------------------
// END COMMENT FORM  ------------------
// ----------------------------------------


// ----------------------------------------
// COMMENT BOX  ------------------
// ----------------------------------------
	
	/* 
	* to make use of the CommentList and CommentForm, insert them into the html framework in CommentBox
	* WARNING:  CommentList and CommentForm must be defined, created and loaded first and above this component or you'll throw an undefined error
	* 
	*/

	var CommentBox = React.createClass({displayName: "CommentBox",
	  render: function() {
	    return (
	    	React.createElement("div", {className: "commentBox"}, 
	    		React.createElement("h1", null, "Comments"), 
	    	  React.createElement(CommentList, null), 
	    	  React.createElement(CommentForm, null)
	    	)
	    );
	  }
	});

	// first argument is the component to be inserted, the 2nd argument is the target location or insertion point
	React.render(
	  React.createElement(CommentBox, null),
	  document.getElementById('content')
	);
// ----------------------------------------
// END COMMENT BOX  ------------------
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