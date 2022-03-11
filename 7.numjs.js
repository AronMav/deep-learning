var nj = require('numjs');

a = nj.array([0, 1, 2, 3]) //Vector a
b = nj.array([4, 5, 6, 7]) //Vector b
c = nj.array([[0, 1, 2, 3],
              [4, 5, 6, 7]]) //Matrix c

d = nj.zeros([2, 4]) //Vector 2x4 with zeros
e = nj.random([2, 5]) //Vector 2x5 with randome numbers

console.log(a.toString())
console.log(b.toString())
console.log(c.toString())
console.log(d.toString())
console.log(e.toString())

a = nj.zeros([1, 4])
b = nj.zeros([4, 3])
c = a.dot(b) //Vector is length 4
console.log(c.shape) //Matrix 4x3

e = nj.zeros([2, 1])
f = nj.zeros([1, 3])
g = e.dot(f)
console.log(g.shape) //Matrix 2x3

h = nj.zeros([5, 4]).T // T - matrix transposition, swap rows and columns
i = nj.zeros([5, 6])
j = h.dot(i)
console.log(j.shape) //Matrix 4x6

h = nj.zeros([5, 4])
i = nj.zeros([5, 6])
j = h.dot(i)
console.log(j.shape) //It's a mistake