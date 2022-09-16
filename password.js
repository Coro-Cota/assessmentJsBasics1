let password = "codingRocks1"

// if the password length is >=10 and test for any digets and test for any lowercase letters and test for any uppercase letters
if (password.length >= 10 && password.length <=20 && /\d/g.test(password) && /[a-z]/.test(password) && /[A-Z]/.test (password)) {
    console.log ("success")
} else {
    console.log ("failure")
}