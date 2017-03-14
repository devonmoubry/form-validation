var form = document.querySelector('.info');
var requiredInputs = document.querySelectorAll('[required]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputs = event.target.querySelectorAll('input');
  var outputObj = {};

  for (i = 0; i < inputs.length; i++) {
      var key = inputs[i].labels[0].textContent;
      var value = inputs[i].value;
      outputObj[key] = value;
      document.querySelector('h2').style.display = 'none';
      document.querySelector('h3').style.display = 'inline-block';
  }
  form.reset();
  console.log(outputObj);
});
for ( j = 0; j < requiredInputs.length; j++ ) {
  requiredInputs[j].addEventListener('invalid', function() {
    document.querySelector('h2').style.display = 'inline-block';
  })
};
