function simpleAdd(input1, input2) {
    // tidy is used to free up GPU memory once the function returns
    return tf.tidy(() => {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    });
}

const data1 = tf.tensor1d([4, 6, 5, 9]);
const data2 = tf.tensor1d([5, 4, 34, 21]);

const result = simpleAdd(data1, data2);
result.print();