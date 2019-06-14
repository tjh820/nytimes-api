var input = {
    "image": "data://deeplearning/example_data/elon_musk.jpg",
    "numResults": 7
  };
  Algorithmia.client("simkccOrMXQtCjh/QScIsLkXnPV1")
      .algo("deeplearning/EmotionRecognitionCNNMBP/1.0.1?timeout=300") // timeout is optional
      .pipe(input)
      .then(function(output) {
          console.log(output);
      });