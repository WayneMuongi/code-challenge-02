const button = document.getElementById('btn');

button.addEventListener('click', function(event) {
        event.preventDefault();
        const listItem = document.createElement('li');
        const guestNames = document.getElementById('guestName').value;
        const button2 = document.createElement('button');
        button2.textContent = 'Remove';
        button2.addEventListener('click', function() {
           listItem.remove();
    });
        listItem.textContent = guestNames;
        listItem.appendChild(button2);
        document.getElementById('guests').appendChild(listItem);
        document.getElementById('guestName').value = '';
        if (document.getElementById('guests').children.length >= 10) {
            alert('Guest list is full!');
        }

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.addEventListener("click", function (){
      if (rsvpBtn.textContent === "Not Attending") {
        rsvpBtn.textContent = "Attending";

      } else {
        rsvpBtn.textContent = "Not Attending";

      }
   });
   listItem.appendChild(rsvpBtn);
});

