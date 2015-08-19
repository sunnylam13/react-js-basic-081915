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

/* 
* we use gulp.react to convert this into a .js file
*
* NOTE:  by using a .jsx file that is converted into a .js file we no longer need our react.script.081915.1.jsx file...
* 
*/




// ----------------------------------------
// COMMENT LIST  ------------------
// ----------------------------------------
	
	var CommentList = React.createClass({displayName: "CommentList",
		render: function () {
			return (
				<div className="commentList">
	        Hello, world! I am a CommentList.
	      </div>
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
	    	<div className="commentForm">
	        Hello, world! I am a CommentForm.
	      </div>
	    );
	  }
	});
// ----------------------------------------
// END COMMENT FORM  ------------------
// ----------------------------------------


// ----------------------------------------
// COMMENT  ------------------
// ----------------------------------------
	
	/* 
	* create the Comment component, 
		* which will depend on data passed in from its parent. 
		* Data passed in from a parent component is available as a 'property' on the child component. 
		* These 'properties' are accessed through `this.props`. 
		* Using `props`, we will be able to read the data passed to the Comment from the CommentList, and render some markup
	*
	* By surrounding a JavaScript expression in braces inside JSX (as either an attribute or child), you can drop text or React components into the tree. 
		* We access named attributes passed to the component as keys on this.props and any nested elements as this.props.children.
		*
	*
	* Now that we have defined the Comment component, we will want to pass it the author name and comment text. 
		* This allows us to reuse the same code for each unique comment. 
	* 
	*/

	var CommentBoxP1 = React.createClass({
	  render: function() {
	    return (
	    	<div className="comment">
	    	  <h2 className="comment">
	    	  	{this.props.author}
	    	  </h2>
	    	  {this.props.children}
	    	</div>
	    );
	  }
	});

// ----------------------------------------
// END COMMENT  ------------------
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
	  		<div className="commentBox">
	  	    <h1>Comments</h1>
	  	    <CommentList />
	  	    <CommentForm />
	  	  </div>
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
