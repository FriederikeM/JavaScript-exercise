let a = Number(prompt("Name a random positive number"));
sum = 0;
for (let i = 0; i <= a; i++) {
  sum += i;
}
if (a < 0) {
  alert(
    "Excuse me, this is a negative number, so I cannot calculate the sumatory. Please take your negativity elsewhere"
  );
} else {
  alert(sum);
}
