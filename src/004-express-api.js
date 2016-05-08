import Express from 'express';
import Promise from 'bluebird';

const app = Express();
app.listen(3000, () => {
  console.log("***> listening:");
});

function random(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.floor(Math.random() * 10);
      resolve(2 ** rnd);
    });
  });
}

// random().then(val => {
//   console.log("***> val1:", val);
//   return random();
// }).then(val => {
//   console.log("***> val2:", val);
// });

async function stuff(){
  const a = await random();
  console.log("***> a:", a);
  const b = await random();
  console.log("***> b:", b);
  const c = await random();
  console.log("***> c:", c);
}

const x = stuff();
console.log("***> x:", x);
