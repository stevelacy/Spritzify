$.fn.spritzify = function(opts){
  if(!opts) opts = {};
  if(!opts.wpm) opts.wpm = 500;
  opts.wpm = 60000/opts.wpm;

  var element = this.selector;
  var text = this.text().split(/\s+/);

  $(element).addClass('spritzify');

  var showWord = function(word, cb){
    var delay = opts.wpm;
    var length = word.length;

    if(word.indexOf(',') === word.length-1) delay += (delay *1.3);
    if(word.indexOf(';') === word.length-1 || word.indexOf('?') === word.length-1 || word.indexOf('!') === word.length-1 || word.indexOf('.') === word.length-1) delay += (delay *1.8);
    if(word.length > 2) if(word.indexOf(';') === word.length-2 || word.indexOf('?') === word.length-2 || word.indexOf('!') === word.length-2 || word.indexOf('.') === word.length-2) delay += (delay *1.8);

    var bit = -1;
    while(word.length < 22){
      if(bit > 0){
        word = word + ' ';
      }
      else{
        word = ' ' + word;
      }
      bit = bit * -1;
    }


    var start = '';
    var end = '';
    if((length % 2) === 0){
      start = word.slice(0, word.length/2);
      end = word.slice(word.length/2, word.length);
    } else{
      start = word.slice(0, word.length/2);
      end = word.slice(word.length/2, word.length);
    }


    console.log(word);
    $(element).html(start.slice(0, start.length -1) + "<span class='cursor'>" + start.slice(start.length-1, start.length) + "</span>"+ end);

    setTimeout(cb, delay);
  };

  async.eachSeries(text, showWord);

};