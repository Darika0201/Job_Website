(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFW9avzV_qt3W2cARcLhMkdA5msELW2hk",
    authDomain: "jobsearch-78f44.firebaseapp.com",
    databaseURL: "https://jobsearch-78f44.firebaseio.com",
    projectId: "jobsearch-78f44",
    storageBucket: "jobsearch-78f44.appspot.com",
    messagingSenderId: "920751215712"
  };
  firebase.initializeApp(config);

  //create a variable point to root of database in firebase
  const root = firebase.database().ref().child("Job");

  //use on() to get data 
  root.on("child_added", snap => {
    var position = snap.child('position').val();
    var company = snap.child('company').val();
    var img = snap.child('img').val();
    $("#div1").append(`
     <div class="col-xl-6 col-12" id="div1">
        <div class="row div2"  id="di1">
          <div class="col-3" id="di2"><img src="${img}"></div>
          <div class="col-9" id="di3">
            <a href="detail.html" id="atag" data-toggle="modal" data-target=".bd-example-modal-lg">${position}</a>
            <p id="position">${company}</p>
          </div>
      </div>
      <div></div>
    </div>`);
  });

}());
