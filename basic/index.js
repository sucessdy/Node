const newPromise = new Promise((resolve, reject) => {
  const sucess = true;
  if (sucess) {
    console.log("Promise is resolved");
       resolve("✅ Everything went well!");
  } else {
    console.log("something went wrong");
    reject("❌ Reject")
  }
});

newPromise
  .then((result) => console.log( "THEN" , result))
  .catch((error) => console.error( "ERROR ", error))
  .finally(() => {
    console.log("The promise has completed");
  });
