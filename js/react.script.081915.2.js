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
	* this allows us to write in .jsx syntax without wasting time worrying about compiling...
* 
*/


////////////////////////////////////////////
///// 		COMMENT LIST
///////////////////////////////////////////////
	var CommentList = React.createClass({displayName: "CommentList",
	  render: function() {
	    return (
				React.createElement("div", {className: "commentList"}, 
	        React.createElement(Comment, {author: "Will Smith"}, "This is one bad ass app"), 
	        React.createElement(Comment, {author: "Jordan Walke"}, "This is one hell of an app!")
	      )
	    );
	  }
	});
///////////////////////////////////////////////
///// 		END COMMENT LIST
///////////////////////////////////////////////

////////////////////////////////////////////
///// 		COMMENT FORM
///////////////////////////////////////////////
	var CommentForm = React.createClass({displayName: "CommentForm",
	  render: function() {
	    return (
	    	React.createElement("div", {className: "commentForm"}, 
	        "Hello, world! I am a CommentForm."
	      )
	    );
	  }
	});
///////////////////////////////////////////////
///// 		END COMMENT FORM
///////////////////////////////////////////////

////////////////////////////////////////////
///// 		COMMENT
///////////////////////////////////////////////
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
	* WARNING:  don't forget to change var CommentBoxP1 of the Maestro template to var Comment!  Or you'll throw an error on line 126 or the CommentBox component
	*
	* All we're doing here is calling the marked library. 
		* We need to convert this.props.children from React's wrapped text to a raw string that marked will understand so we explicitly call toString().
		* But there's a problem! Our rendered comments look like this in the browser: "<p>This is <em>another</em> comment</p>". 
		* We want those tags to actually render as HTML.
		* That's React protecting you from an XSS attack. 
	* 
	*/

	var Comment = React.createClass({displayName: "Comment",
	  render: function() {
	  	var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
	    return (
	    	React.createElement("div", {className: "comment"}, 
	    	  React.createElement("h2", {className: "comment"}, 
	    	  	this.props.author
	    	  ), 
	    	  "// removed" + ' ' +
	    	  "// ", marked(this.props.children.toString()), 
	    	  "// replaced", 
	    	  React.createElement("span", {dangerouslySetInnerHTML:  { __html: rawMarkup} })
	    	)
	    );
	  }
	});
///////////////////////////////////////////////
///// 		END COMMENT
///////////////////////////////////////////////

////////////////////////////////////////////
///// 		COMMENT BOX
///////////////////////////////////////////////
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
///////////////////////////////////////////////
///// 		END COMMENT BOX
///////////////////////////////////////////////

////////////////////////////////////////////
///// 		EXECUTE
///////////////////////////////////////////////
	jQuery(document).ready(function($) {
		// alert("React JS script ready!");
	});
///////////////////////////////////////////////
///// 		END EXECUTE
///////////////////////////////////////////////


