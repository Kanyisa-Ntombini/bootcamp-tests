function greet (name) {
  if ((typeof name) === 'string') {
    var nameTrim = name.trim();
	  return 'Hello, ' + nameTrim;
  }
  else {
    return "Please enter a string";
  }
}