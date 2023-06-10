function encrypt() {
  var message = document.getElementById("message").value;
  var key = parseInt(document.getElementById("key").value);
  var result = document.getElementById("result");

  var encryptedMessage = "";

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encryptedMessage += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encryptedMessage += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      // Non-alphabetic characters
      encryptedMessage += message.charAt(i);
    }
  }

  result.value = encryptedMessage;
}
