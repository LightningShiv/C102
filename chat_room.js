function getData() {firebaseConfig.database().ref("/") .on ('value', 
function (snapshot) {document.getElementById("output") .innerHTML =
"";snapshot.key;
                Room_names = childKey;
                //start code

                //end code
});}
            getData();
