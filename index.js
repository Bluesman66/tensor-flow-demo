const shape = [4,2];

const data = tf.tensor([4,6,5,9,13,25,1,57], shape);

const data2 = tf.variable(tf.zeros([8]));

data2.print();

data2.assign(tf.tensor1d([1,2,3,4,5,6,7,8]));

data2.print();

const data3 = tf.tensor1d([1,2,3,4]);
const data4 = tf.tensor1d([5,6,7,8]);

data3.print();
data4.print();

data3.add(data4).print();
data3.mul(data4).print();