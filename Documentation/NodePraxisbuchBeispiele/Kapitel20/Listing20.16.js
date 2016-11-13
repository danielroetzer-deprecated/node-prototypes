var code = "console.log(process.pid)";

var func = new Function(code);

func();
