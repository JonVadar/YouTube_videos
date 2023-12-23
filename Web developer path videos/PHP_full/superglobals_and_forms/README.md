# Superglobals & Form Handling in PHP

## [watch the video on YouTube](https://youtu.be/sglj3c55VfI?si=7HZ2VRsserZenU34)

## Superglobals

Superglobals are Built-in variables that are always available in all scopes. The superglobal variables are:

| Variable    | Description                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `$GLOBALS`  | An associative array containing references to all variables which are currently defined in the global scope of the script. The variable names are the keys of the array. |
| `$_SERVER`  | An array containing information such as headers, paths, and script locations.                                                                                            |
| `$_GET`     | It is used to collect form data after submitting an HTML form with `method="get"`. It can also collect data sent in the URL. (String query)                              |
| `$_POST`    | It is used to collect form data after submitting an HTML form with `method="post"`.                                                                                      |
| `$_FILES`   | An associative array of items uploaded to the current script via an HTML form with `method="post"`.                                                                      |
| `$_COOKIE`  | An associative array of variables passed to the current script via HTTP Cookies.                                                                                         |
| `$_SESSION` | An associative array containing session variables available to the current script.                                                                                       |
| `$_REQUEST` | An associative array that by default contains the contents of `$_GET`, `$_POST` and `$_COOKIE`.                                                                          |
| `$_ENV`     | An associative array of variables passed to the current script via the environment method.                                                                               |
