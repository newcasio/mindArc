console.log("JS IS WORKING");

const section = $('li');

function toggleAccordion(){
  if ($(this).hasClass('active')){
    console.log('old');
    $(this).removeClass('active');
  }else{
    console.log('new');
    section.removeClass('active');
    $(this).addClass('active');
  }
}

section.on('click', toggleAccordion);
