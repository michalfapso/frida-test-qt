/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN7QString6appendERKS_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: http://www.frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN7QString6appendERKS_.
   *
   * @this {object} - Object allowing you to store state for use in onLeave.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Function arguments represented as an array of NativePointer objects.
   * For example use args[0].readUtf8String() if the first argument is a pointer to a C string encoded as UTF-8.
   * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
   * @param {object} state - Object allowing you to keep state across function calls.
   * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
   * However, do not use this to store function arguments across onEnter/onLeave, but instead
   * use "this" which is an object for keeping state local to an invocation.
   */
  onEnter: function (log, args, state) {
	//var resolver = new ApiResolver('module');
    //var addr_toUtf8_helper=resolver.enumerateMatchesSync('exports:QtCore!*QString*toUtf8*')[0]
    //var addr_toUtf8_helper=Module.getExportByName('libQt5Core.so.5.11.1', '*QString*toUtf8*')[0]
	log('Modules:')
	var modules = Process.enumerateModules()
	for (var i=0; i<modules.length; i++) {
		log('Module '+i+': '+modules[i].name)
	}

	if (Process.platform == 'windows') {

	} else if (Process.platform == 'linux') {
		
	//	var module = Process.getModuleByName('libQt5Core.so.5.11.1')
		var module = Process.getModuleByName('libqt_helper_lib.so.1.0.0')
		var exports = module.enumerateExports()
		for (var i=0; i<exports.length; i++) {
			var e = exports[i]
			//if (e.name.match(/.*QString.*toUtf8.*/)) {
				log('export '+i+': '+e.type+' '+e.name+' '+e.address)
			//}
		}

		{
			var fn_addr = Module.getExportByName('libQt5Core.so.5.11.1', '_ZN16QCoreApplication11closingDownEv')
			log('fn_addr:'+fn_addr)
			var fn = new NativeFunction(fn_addr, 'bool', []);
			log('fn:'+fn)
			var ret = fn()
			log('ret:'+ret)
		}
		/*
		{
			var fn_addr = Module.getExportByName('libQt5Core.so.5.11.1', '_ZN7QString6numberEii')
			log('fn_addr:'+fn_addr)
			var fn = new NativeFunction(fn_addr, 'pointer', []);
			log('fn:'+fn)
			log('context:'+JSON.stringify(this.context))
			var rsi_prev = this.context.rsi
			var rdx_prev = this.context.rdx
			log('rsi_prev:'+rsi_prev)
			log('rdx_prev:'+rdx_prev)
			this.context.rsi = 1234
			log('ret ok1')
			this.context.rdx = 10
			log('ret ok2')
			var ret = fn()
			log('ret ok3')
			this.context.rsi = rsi_prev
			this.context.rdx = rdx_prev

			log('ret:'+ret)
		}
		*/
		
		{
			log('TEST:number_to_str')
			var fn_addr = Module.getExportByName('libqt_helper_lib.so.1.0.0', 'number_to_cstr')
			log('fn_addr:'+fn_addr)
			var fn = new NativeFunction(fn_addr, 'pointer', ['int']);
			log('fn:'+fn)
			var ret = fn(1234)
			log('ret ok')
			log('ret:'+ret.readUtf8String())
		}
		{
			log('TEST:qstring_to_cstr')
			var fn_addr = Module.getExportByName('libqt_helper_lib.so.1.0.0', 'qstringp_to_cstr')
			log('fn_addr:'+fn_addr)
			var fn = new NativeFunction(fn_addr, 'pointer', ['pointer']);
			log('fn:'+fn)
			var ret = fn(args[0])
			log('ret ok')
			log('ret:'+ret.readUtf8String())
			var ret = fn(args[1])
			log('ret ok')
			log('ret:'+ret.readUtf8String())
		}
	/*
		{
			var fn_addr = Module.getExportByName('libQt5Core.so.5.11.1', '_ZN7QString6numberEii')
			log('fn_addr:'+fn_addr)
			var fn = new NativeFunction(fn_addr, 'pointer', ['int', 'int']);
			log('fn:'+fn)
			var ret = fn(1234, 10)
			log('ret ok')
			log('ret:'+ret)
		}


	    var addr_toUtf8_helper=Module.getExportByName('libQt5Core.so.5.11.1', '_ZN7QString13toUtf8_helperERKS_')
	    log('addr_toUtf8_helper:'+addr_toUtf8_helper)


	    //var addr_toUtf8_helper=Module.getExportByName(null, '*QString*toUtf8*')[0]
	    var addr_toUtf8=Module.getExportByName('libQt5Core.so.5.11.1', '_ZNK7QString6toUtf8Ev')
	    log('addr_toUtf8:'+addr_toUtf8)

	    //var fn_toUtf8_helper = new NativeFunction(addr_toUtf8_helper.address, 'pointer', ['pointer']);
	    var fn_toUtf8 = new NativeFunction(addr_toUtf8, 'pointer', ['pointer']);
	    log('fn_toUtf8:'+fn_toUtf8)
	  
	    var fn_toUtf8_helper = new NativeFunction(addr_toUtf8_helper, 'pointer', ['pointer']);
	    log('fn_toUtf8_helper:'+fn_toUtf8_helper)
	  
	    // 
		log('args[0]:'+args[0])
		log('args[0].readPointer:'+args[0].readPointer())
		log('args[0].readPointer.readUtf16String:'+args[0].readPointer().readUtf16String())
		log('utf8Ptr ok1')
	    var utf8Ptr=fn_toUtf8(args[0])
		log('utf8Ptr ok2')
	    var utf8Ptr2=fn_toUtf8_helper(args[0])
		log('utf8Ptr ok3')
	    // *PROBLEM:*  u'Error: access violation accessing 0x0'
	  
	  
	    // can't run below code
	    log('get utf8:'+utf8Ptr) 
	  
	    var path=Memory.readUtf8String(utf8Ptr)
	    log('path is :'+ path)
	    log(".................");

	    log('_ZN7QString6appendERKS_()');
	*/
	} // (if Process.platform == 'linux')
  },

  /**
   * Called synchronously when about to return from _ZN7QString6appendERKS_.
   *
   * See onEnter for details.
   *
   * @this {object} - Object allowing you to access state stored in onEnter.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value represented as a NativePointer object.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave: function (log, retval, state) {
  }
}
