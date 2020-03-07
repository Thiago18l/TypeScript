// você pode pegar quantos elementos quiser de um objeto usando rest.

const { w, x, ...remaining } = { w: 1, x: 2, y: 10, z: 25 }

console.log(w, x, remaining) // output: 1, 2, { y:10, z:25 }