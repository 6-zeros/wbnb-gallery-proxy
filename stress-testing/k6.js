import http from 'k6/http';

const getRandom = (min, max) => Math.random() * (max - min) + min;

export let options = {
  vus: 150,
  duration: "5m",
};

export default function () {
  http.get(`http://localhost:3000/rooms/${getRandom(1000000, 9000000)}`);
}
