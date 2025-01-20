function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.{"modelTopology":{"class_name":"Model","config":{"name":"model1","layers":[{"name":"conv2d_1_input","class_name":"InputLayer","config":{"batch_input_shape":[null,43,232,1],"dtype":"float32","sparse":false,"name":"conv2d_1_input"},"inbound_nodes":[]},{"name":"conv2d_1","class_name":"Conv2D","config":{"filters":8,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"uniform","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[2,8],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_1","trainable":false,"batch_input_shape":[null,43,232,1],"dtype":"float32"},"inbound_nodes":[[["conv2d_1_input",0,0,{}]]]},{"name":"max_pooling2d_1","class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[2,2],"data_format":"channels_last","name":"max_pooling2d_1","trainable":false},"inbound_nodes":[[["conv2d_1",0,0,{}]]]},{"name":"conv2d_2","class_name":"Conv2D","config":{"filters":32,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"uniform","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[2,4],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_2","trainable":false},"inbound_nodes":[[["max_pooling2d_1",0,0,{}]]]},{"name":"max_pooling2d_2","class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[2,2],"data_format":"channels_last","name":"max_pooling2d_2","trainable":false},"inbound_nodes":[[["conv2d_2",0,0,{}]]]},{"name":"conv2d_3","class_name":"Conv2D","config":{"filters":32,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"uniform","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[2,4],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_3","trainable":false},"inbound_nodes":[[["max_pooling2d_2",0,0,{}]]]},{"name":"max_pooling2d_3","class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[2,2],"data_format":"channels_last","name":"max_pooling2d_3","trainable":false},"inbound_nodes":[[["conv2d_3",0,0,{}]]]},{"name":"conv2d_4","class_name":"Conv2D","config":{"filters":32,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"uniform","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[2,4],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_4","trainable":false},"inbound_nodes":[[["max_pooling2d_3",0,0,{}]]]},{"name":"max_pooling2d_4","class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[1,2],"data_format":"channels_last","name":"max_pooling2d_4","trainable":false},"inbound_nodes":[[["conv2d_4",0,0,{}]]]},{"name":"flatten_1","class_name":"Flatten","config":{"name":"flatten_1","trainable":false},"inbound_nodes":[[["max_pooling2d_4",0,0,{}]]]},{"name":"dropout_1","class_name":"Dropout","config":{"rate":0.25,"noise_shape":null,"seed":null,"name":"dropout_1","trainable":false},"inbound_nodes":[[["flatten_1",0,0,{}]]]},{"name":"dense_1","class_name":"Dense","config":{"units":2000,"activation":"relu","use_bias":true,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"uniform","seed":null}},"bias_initializer":{"class_name":"Zeros","config":{}},"kernel_regularizer":null,"bias_regularizer":null,"activity_regularizer":null,"kernel_constraint":null,"bias_constraint":null,"name":"dense_1","trainable":false},"inbound_nodes":[[["dropout_1",0,0,{}]]]},{"name":"sequential_3","class_name":"Sequential","config":{"name":"sequential_3","layers":[{"class_name":"Dense","config":{"units":4,"activation":"softmax","use_bias":true,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"bias_initializer":{"class_name":"Zeros","config":{}},"kernel_regularizer":null,"bias_regularizer":null,"activity_regularizer":null,"kernel_constraint":null,"bias_constraint":null,"name":"NewHeadDense","trainable":true,"batch_input_shape":[null,2000],"dtype":"float32"}}]},"inbound_nodes":[[["dense_1",0,0,{}]]]}],"input_layers":[["conv2d_1_input",0,0]],"output_layers":[["sequential_3",1,0]]},"keras_version":"tfjs-layers 1.3.1","backend":"tensor_flow.js"},"format":"layers-model","generatedBy":"TensorFlow.js tfjs-layers v1.3.1","convertedBy":null,"weightsManifest":[{"paths":["./model.weights.bin"],"weights":[{"name":"NewHeadDense/kernel","shape":[2000,4],"dtype":"float32"},{"name":"NewHeadDense/bias","shape":[4],"dtype":"float32"},{"name":"conv2d_1/kernel","shape":[2,8,1,8],"dtype":"float32"},{"name":"conv2d_1/bias","shape":[8],"dtype":"float32"},{"name":"conv2d_2/kernel","shape":[2,4,8,32],"dtype":"float32"},{"name":"conv2d_2/bias","shape":[32],"dtype":"float32"},{"name":"conv2d_3/kernel","shape":[2,4,32,32],"dtype":"float32"},{"name":"conv2d_3/bias","shape":[32],"dtype":"float32"},{"name":"conv2d_4/kernel","shape":[2,4,32,32],"dtype":"float32"},{"name":"conv2d_4/bias","shape":[32],"dtype":"float32"},{"name":"dense_1/kernel","shape":[704,2000],"dtype":"float32"},{"name":"dense_1/bias","shape":[2000],"dtype":"float32"}]}]}/models/Adk9EnXso/", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('alien1') 
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')
    
        if (results[0].label == "aplausos") {
          img.src = 'aliens-01.gif';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
        } else if (results[0].label == "silbido") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.gif';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
        } else if (results[0].label == "chasquidos") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.gif';
          img3.src = 'aliens-04.png';
        }else{
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.gif';
        }
      }      

}