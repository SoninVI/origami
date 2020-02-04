$('.flip-demo').on('done', function() {
  console.log('doooooonnnnnee!');
});

$('.flip-demo').on('before<a href="https://www.jqueryscript.net/tags.php?/Flip/">Flip</a>ping', function(e, data) {
  console.log('beforeFlipping:', data);
});

$('.flip-demo').on('afterFlipping', function(e, data) {
  console.log('afterFlipping:', data);
});
