# To install the Docker

## Others
```
docker pull tensorflow/serving
```

## Raspberry Pi
```
docker pull emacski/tensorflow-serving
```


# To run the Docker

# Others
```
docker run -t --rm -p 8501:8501 \
    -v "[path_to_model]/my_model:/models/my_model" \
    -e MODEL_NAME=my_model \
    tensorflow/serving
```

## Raspberry Pi
```
docker run -t --rm -p 8501:8501 \
    -v "[path_to_model]/my_model:/models/my_model" \
    -e MODEL_NAME=my_model \
     emacski/tensorflow-serving
```

# To test
```
curl -d '{"instances": [[1.0, 2.0]]}' \
    -X POST http://localhost:8501/v1/models/my_model:predict
```
