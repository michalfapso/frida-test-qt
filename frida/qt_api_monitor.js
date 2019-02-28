"use strict";

(function () {

	console.log('Current frida verison: '+Frida.version+' on '+Process.arch);

	var f_addr = Module.getExportByName('qt_helper_lib.dll', 'qstringp_to_cstr');
	//log('f_addr:'+f_addr)
	var f_qstringp_to_cstr = new NativeFunction(f_addr, 'pointer', ['pointer']);
	//log('f:'+f)

	var f_addr = Module.getExportByName('Qt5Core.dll', '_ZeqRK7QStringS1_');
	console.log('f_addr:'+f_addr);
	Interceptor.attach(f_addr, {
		// http://androidxref.com/6.0.0_r5/xref/bionic/linker/linker.cpp#2219
		// void soinfo::call_function(const char* function_name __unused, linker_function_t function) {
		onEnter: function (args) {
			console.log('operator==(QString, QString)');

			var str0 = f_qstringp_to_cstr(args[0]).readUtf8String();
			var str1 = f_qstringp_to_cstr(args[1]).readUtf8String();
			console.log('  arg0:'+str0);
			console.log('  arg1:'+str1);
			// TODO:
			//  - Patch function_address to infinite loop then use IDA Pro to attach.
		},
		onLeave: function (retval) {
			console.log('  res:'+retval);
			// TODO:
		}
	});

	/*
	var f_addr = Module.getExportByName('Qt5Core.dll', '_ZN7QString6appendERKS_');
	console.log('f_addr:'+f_addr);
	Interceptor.attach(f_addr, {
		// http://androidxref.com/6.0.0_r5/xref/bionic/linker/linker.cpp#2219
		// void soinfo::call_function(const char* function_name __unused, linker_function_t function) {
		onEnter: function (args) {
			console.log('QString::append(QString)');

			var str0 = f_qstringp_to_cstr(args[0]).readUtf8String();
			var str1 = f_qstringp_to_cstr(args[1]).readUtf8String();
			console.log('  arg0:'+str0);
			console.log('  arg1:'+str1);
			// TODO:
			//  - Patch function_address to infinite loop then use IDA Pro to attach.
		},
		onLeave: function (retval) {
			console.log('  res:'+f_qstringp_to_cstr(retval).readUtf8String());
			// TODO:
		}
	});
	*/
})();
