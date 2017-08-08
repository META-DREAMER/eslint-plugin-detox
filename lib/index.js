/**
 * @fileoverview ESLint config for wix/detox
 * @author Hammad Jutt
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
	environments: {
		detox: {
			globals: {
				detox: false,
			    device: false,
			    expect: false,
			    waitFor: false,
			    element: false,
			    by: false,
			}
		}
	}
}


