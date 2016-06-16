/**
 * Dataaccess Module
 * @param {string} userName
 * @return {string}
 */

module.exports = {

	getModule : function(moduleName){

		var module;
		
		if(moduleName==='dataaccess'){

			module = require('./dataaccess');

		}else if(moduleName==='communication'){

			module = require('./communication');

		}

		return module;
	}

}
 

 
