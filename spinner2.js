


let delay = 0;
let char = ["|", "/", "-", "\\"];
for (let j = 0; j < 3; j++) {   // 2 rounds of full circle
  for (let i = 0; i < char.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${char[i]}   `);
    }, delay);
    delay += 200;
  }
};


