var response = prompt('Do you prefer dogs, cats, or both?');

var message;

if(response === 'dogs'){
    message = 'I love dogs?';
} else if (response === 'cats'){
    message = 'Cats are grrrreat!'
} else if (response === 'both'){
    message = 'Hurray! I like both also!'
} else {
    message = 'ok, do you like animals?'
}
document.write('<h3>' + message + '</h3>')