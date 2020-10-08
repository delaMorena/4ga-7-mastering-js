function isOldEnoughToVote(age) {
    let mayorEdad;
        if (age >= 18) {
            mayorEdad = true;
        }
        else {
            mayorEdad = false;
        }
  console.log (mayorEdad);
}
isOldEnoughToVote (13);