<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Ma page</h1>

    <textarea id="keylogger" rows="5" cols="50"></textarea>

    <script>
        var keylogger = document.getElementById("keylogger");

        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();

            if (/[a-z]/.test(key)) {
                if (document.activeElement !== keylogger) {
                    keylogger.value += key;
                } else {
                    keylogger.value += key + key;
                }
            }
        });
    </script>
</body>
</html>
