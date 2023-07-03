document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('add-form');
    var modal = document.getElementsByClassName('alert alert-success alert-dismissible fade show');
    var closeButton = document.getElementsByClassName('close')[0];
  
    form.addEventListener('submit', function(event) {
      modal.style.display = 'block';
    });
    // closeButton.addEventListener('click', function() {
    //   modal.style.display = 'none';
    // });
  });