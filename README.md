# node-text-api

This is an example Node API using `express`, `body-parser`, and `to-zalgo`. More details can be found as a [blog post](https://nickymarino.com/2019/11/22/fast-intro-to-node-apis/)

You can run this example by cloning the repo and running `npm start`

## Endpoints

- `/magic-8-ball`
  - Returns `{"prediction": "<random_prediction>"}`, where `<random_prediction>` is randomly chosen from the standard Magic 8-Ball replies
- `/to-zalgo`
  - Input: `{"text": "your text here"}
  - Returns: `{"code": 200, "original": "your text here", "zalgo": "zalgo-ified text"}`