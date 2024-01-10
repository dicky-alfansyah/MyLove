function decrypt(encrypted_text) {
  var key = "@dicky-alfansyah";
  var decrypted_text = "";
  var key_index = 0;

  for (var i = 0; i < encrypted_text.length; i++) {
    var unicode_val = encrypted_text.charCodeAt(i);
    var key_val = key.charCodeAt(key_index % key.length);
    var xor_val = unicode_val - 12353;
    xor_val = xor_val ^ key_val;
    var decrypted_char = String.fromCharCode(xor_val);
    decrypted_text += decrypted_char;
    key_index++;
  }
  return decrypted_text;
}

function main() {
  var encrypted_text =
    "おゅてきぞそぎべいごもちぇがさぅァてごかげすゆも坉";
  var decrypted_text = decrypt(encrypted_text);

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = decrypted_text;
}

function runPython() {
  main();
}

function clearOutput() {
  var outputDiv = document.getElementById("output");
  outputDiv.textContent = "";
}
