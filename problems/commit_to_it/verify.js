var exec = require('child_process').exec
exec('git show', function(err, stdout, stdrr) {
  var show = stdout.trim()
  
    console.log("Changes have been committed!")
  else console.log("Seems no changes \nhave been committed.")
})