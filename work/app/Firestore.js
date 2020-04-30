
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBis_MRJqevFfDhHTXvUFNYW7k8GNk4mnc',
    authDomain: 'test254',
    projectId: 'mytestapp254'
  });
  
  const db = firebase.firestore();


    // enable offline persistence
db.enablePersistence().catch(err => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
  