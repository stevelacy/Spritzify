# Spritzify

##### jQuery rebuild of OpenSpritz

##### A clean and basic jQuery plugin without the extra cruft.


### Example

```js

// Spritzify a html input containing text
$('#textblock').spritzify();


// Set a word per minute speed
$('#textblock').spritzify({wpm: '250'})

```


## API

#### options.wpm
    
    type: `Number`
    default: `500`

example:


```js

var options = {
  wpm: 250
}

$('#textblock').spritzify(options)

```
