const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if(i < sentence.length - 1) {
        process.stdout.write(sentence[i]);
      } else if (i === sentence.length -1) {
        process.stdout.write(sentence[i] + '\n');
      }  
    }, 50 * i);
  }
};  

typewriter(sentence);