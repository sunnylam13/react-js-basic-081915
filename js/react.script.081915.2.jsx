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
///// 		VARIABLES
///////////////////////////////////////////////

	/* 
	* let's render a blob of JSON data into the comment list. Eventually this will come from the server, but for now, write it in your source
	* We need to get this data into CommentList in a modular way. Modify CommentBox and the React.render() call to pass this data into the CommentList via props
	*/

	var data = [
		{author: "Will Smith", text: "This is one Legendary comment."},
		{author: "Johnny Depp", text: "This is *another* story of the Carribean."}
	];

///////////////////////////////////////////////
///// 		END VARIABLES
///////////////////////////////////////////////


////////////////////////////////////////////
///// 		COMMENT LIST
///////////////////////////////////////////////
	var CommentList = React.createClass({
	  render: function() {
	  	/* 
	  	* where `this.props.data` was defined in CommentBox component as the linkage item symbol for CommentList
	  	* 
	  	*/


	    var commentNodes = this.props.data.map(function (comment) {
	    	return (
	    		<Comment author={comment.author}>
	    			{comment.text}
	    		</Comment>
	    	);
	    });

	    // the return then spits out the actual HTML we'll use and inserts our var commentNodes
	    return (
	    	<div className="commentList">
	    		{commentNodes}
	    	</div>
	    );
	  }
	});
///////////////////////////////////////////////
///// 		END COMMENT LIST
///////////////////////////////////////////////

////////////////////////////////////////////
///// 		COMMENT FORM
///////////////////////////////////////////////
	var CommentForm = React.createClass({
	  render: function() {
	    return (
	    	<div className="commentForm">
	        Hello, world! I am a CommentForm.
	      </div>
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
		* This is a special API that intentionally makes it difficult to insert raw HTML, but for marked we'll take advantage of this backdoor.
		* 
		* REMEMBER: by using this feature you're relying on marked to be secure. In this case, we pass `sanitize: true` which tells marked to escape any HTML markup in the source instead of passing it through unchanged.
	* 
	*/

	var Comment = React.createClass({
	  render: function() {
	  	var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
	    return (
	    	<div className="comment">
	    	  <h2 className="comment">
	    	  	{this.props.author}
	    	  </h2>
	    	  <span dangerouslySetInnerHTML={ { __html: rawMarkup } } />
	    	</div>
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
	* NOTE:  CommentBox is like the super parent...  you insert data into here and pass it down to the children using `this.props`...
		* in this case we set up a data= attribute
	* 
	*/

	var CommentBox = React.createClass({
	  render: function() {
	    return (
	  		<div className="commentBox">
	  	    <h1>Comments</h1>
	  	    <CommentList data={this.props.data} />
	  	    <CommentForm />
	  	  </div>
	    );
	  }
	});

	/* 
	* first argument is the component to be inserted, the 2nd argument is the target location or insertion point
	*
	* NOTE:  here we pass the actual var `data` object defined before which sets off the chain of information that is passed down to the children components of CommentBox...
		* specifically CommentList
	* 
	*/

	React.render(
	  <CommentBox data={data} />,
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


