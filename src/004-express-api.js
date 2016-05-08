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
    }, 1000);
  });
}

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

app.get('/hello', async function(req, res){
  const a = await random();
  res.send({a});
});
