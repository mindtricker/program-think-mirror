window.g_loadAllComments = function() {
  if (window.isCommentInited) {
    return {
      feed: {}
    }
  }

  var comments = atob('H4sICHBYJmQAAzY0OTQxOTM0MTQyNzAyMTM3MDAuanNvbgDtnHtz01YWwL9KxmH4p7F079Xbs1k2gEnZWbYFksLutrMjy/Kj2JZHUghph5mkvPIgEIZHyQMSGAKUl1tgaJ7lw9SSnb/6FfZcOXEcIscueBvTMRMytnTPucfnnnN+OtJ1vg2c1k0raWQCoQBmUKAjoGc0I5rMxOFAb8+hoAyHYroeDYS+DZxJpzIWHE/YdjbEsv39/Uw/xxhmnCUICWyXbaRhtDdqj5HVM8d11dQSmwKqwmhGmg2yVlbXWDrC8kawmMFsWTIe3ZSwtISeVi0mbhjxlO5JlyaD0fHoHt1WqZ0n2C8DB8JHuo9/anyjJ7PS4XSXcvLMIbU73Mt8GYChSc/8PTaMBYlQJGXE47pJ1XVgRVG8A0GBcIKgICzwmAiEiERSmKxh2SKv8FjheMwTCRHMSQgxVDStZ2wrcLYj0JeNqra+OQVBhAsiLkikHoxCCIWIwvAy+QTJ8IYK2Ek7pZeHH1hX1WZk2gortwqPx9amrrrnXhWmzjvjU86L+6E25+F37t2Ztm7PC21rg4POpaX8wnNnevW3lcvu8LX88rNibh5G5VdvOks3nNzibyuzdKZUMnMqEPrPtwFTT9Xh1XZvpcHAgSzYF1Cz2VRSU20ID1aFxf0EFgjOJkw9tq7MAm1Z04ibajpoJ2AyhrrSyhq2p5Wqs9gNX7FRPab2pWwwbMMgS0/Ffu98NOwqVnB9Ep/VY31Wbpsx+9SU3fm1ZWT2ZvsiqaSV0KPBtHqms2IRkRDCOIQJI2Pp33vhZNDULRC1OgWE9po6zSC90zb79L2GGdXNyEBnWdfe052k4vPCZLqZgWjZ/NC2fsZmE/bv9CxBGLGIgyF6VjX1YH9CzwRL6xlM6eppnfFUbs6c6ItsnYDq74tYfRE4E+mLMOD8svbA2a86AmqfnTBML3oyanozXitj1At/M1k+V1EZKpcIPkgsmdJZjCUec4LIiwonybBOIsFUBURjMlVWkjHgQ6UG/lahgQ6CfE+m1bhnSJ3hbCf60pEM1d0R6E9GbVqLiEj9oCfjCToXR+CdZWrwkmV5JpLd6uZgd8/hBMlGvzn4r8PsF7Zm7hfNkyh7mO1a/7e/N86ePhE9eCbcy/9T1FiLEMT20PUCw7/OxgNnqSvjekY3IaJNavtmwZUYRCuu58AqroPTnk/2lw5RP2xW1j22YaupY6VgDIQw2nLSslXTPpyJ6mfKnsXvyCdtPW19rpufe26l8pAa5oC35u+UV9R75OhJntcPlMrriTP71XDvqQaU16AsIVmSeQXzHJZFGWOOp2aWU6iirmLkpSTuofnIh3jEIA5t1tXthbiGAMT8Hj2atCvwtgeOVUOcxNKTHXUq31rlC1d+dGYeuyNj7sxSYXm48DRXfDPq3pmnvydfrA2NdzgLl92Z6cLcjcIPb/ILY+7kUvHcauHVcmF5dl3s7bJzfxKw4I4OujO5DvfWYv6Xt/mFUbs/aUNd6Yipmh4xjFOF5yMWwzDUCM3I2LCm1Iz1erNeanbFqIxVXM3ll9/4oIkuw+6SgPUJxH1by/fu46oOI/9gxuyzEkb/+jVMJyYiWIaJjCAV2jW/1C4nRmBHynRljMxA2uiz/mg+4C188N6V+LDhsWQ6jj1H0f+eNjjCRlIq+C+ejO3TVJivk1N5WSURGcXEmCZjThcUKcbpqqRqQgTcVAKDnTD3JDNB7/MEbWOzCsGJSk6bKa8GWQOZ6EbEwQhdjbKli/aGXzh0BEoa36Oe+4Qx9aHRZ2p69UuE6mlBlW7Gv7/2bXFeigd4qwMAo5+bAD3THqgIs8DG5JSBB1KqZYGa02qqj57LJqNBTpAELCGJ81LrHaFo0sqm1IGeZFqvEKO+dRZfc+7MMMHu9/NtJTBQHHxFlWxFatepIwePn9S+0SqQeiiMGoFUjBXMiTLPC1iQREnBklgDqXwP5kJECgkyo8hyHUitJtAQpFZTvhWpzs8vC8tX17uhpYu1cecj0HwU8lm75qNQbSN3m0I8knlJhuhp1/yyoU4K9WZOZYz+jF+b4+fVjT4HCSIiSCIwMRF4RUaKInwsHMNi0DT6aNWsoFlEVbAa5XWN4wQuomGN8JwsRDVJVUUppsZaNGtymmFBBpwpCuHfD2e8hzOvKFfB2cFeuesoF5djyQqcnWoIzkQi8hKHkQD5zCMOnMXVwJnYQ1BIQCGeMKIk1oGzagINwVk15Vtx5t7IuZeH8qtzbc7EtbXvnrhDb+gtwBf33Nn5Yu51fmG8zc1ddZ/dW4MOrNR1zYzBcHf6tXvrR/fWpcLTORBoc0bn3JeLtWnY+PmaD6Y+kdN8MK1t5G7DVETQxRGI3XbNLxdbLV2rpfsYIPiBLZ1IGViq5FUYeODU4QNHT8aF8l3SxN97wg1ioCwTASmCxCsivBZFvnpLR4JIDBLUQ3BIEMFWRiQ73yXdWeADGbiz8q0MJOBrZ+IKYCW/POo8+OG3lcvF3JDz4m5+daY4eGHt/vni40Eg09qNSTjV/dln3f8Iw+DC8nXnp0H3dq70gtRx67ORMzUh97ZHSxNyr6aRu8o9jkeUKCKCeAXu+eTf+3Dv97WRPAf0RbxCAC+ygEXpD39c1mojWwStaCNlScQCQt7tjPoRSoutSBGKPISug8Afob1Hwkc5WdGOr+/jOBbtDaOGIFSCfJJ4AfwEHwDJ8LYqQfkgxkEO9SApRKDpJQwWlR0JurPABxJ0Z+XvdJHfv1mbuuFMT1O+XRyHlq34drKQu7Ter83MArvc87Puhcf5hUvO+Dnn5ihF3/2nzvhUfmEZiOcsLgD61i6N55cuwilgoztzx3nwCHDnzM4WVq85P790hu84F35em77qrN4vDSs+HALNzvUnML770AlnZdB5NAY4res5ZLMZXbx3uTC56kyMO+M3YWR5h407eCW/OOyM3gXZ0jYI5/q8OzOSXx6E4+65V+6rm87E9/6bb5rgsmB7BjTfVUFNG3f1ooDHEofolQGkYLvmU1FavXCrF/4YSP5+vTAPBRpjIDnnkbwEpGokD3d9epSLS+Udmceianev3JAtQ9Q5nMLJvIiwzMkSV/2GMMCTUHhiPiTIIYEwIiK1UL6DwIejfAfl7zzf/GXYWboIZHNmHjsPpigbR8Zpw7oAjemT/MKYMz4MIFq7c9/JLZaebTqjT5zR6fzCA/fZPefOJecatLY/FV/PU6klSjYKrmfP8gsjMKD44gH8AF3hx3n+ML84190Vdm9OAtYKy8P5pSv04MoUALB0+7culDeb0b8OftecLPaJ4eaDcW0jd5nGikKIBE0yIu2aX1Vo4biF4z85jkkZxyWoVG2s5a5jkBT/BxzzREaSxBMkEqyIgoKV6jt4ywAUQhiuHkQG14tjX4FG4dhX+VYc93zWJrjzK19mCvdelKAErIPmDxrT4qOHXks6VJuP61r+EjHb2L/W0NR80PJZ6eaDVm0jdx9aFFKYQssvdyqhVbYZfnup0Zzd+Q5sde8+zS+OFSdWnatvqt0B9+BmgX+Tp9e/gNLCcAvDHyuGPZhUxTDfdSxj/Dc20HAMi6Igw5UwXPsijuMEzCO5LgwrISQxPC/VjeHtAg3E8Hbl2zAsehguvr1Nn8PeeNxjmM7EI0rRFyPOhcfu4KNfB4fWpiacy2/htTv92plfrZfNYpnN76O++YDtExPNB+zaRjYBsBXgHi+1a35Z1sTArtrBt4jdInaL2JvEVqpvbA4fOMZZUmzjifR+4Ytw+GgjiK0gRAjhJMhNnn43QZSkasQmKIj4IBJ6CAnxOIRERkDCTsSuIfBhxK6hfCuxSzdxi7kh9/YVeivX+9JpYfm6e3eGEvbZMz6/8ARO5FcvwnvgbuHmZH7pIhxcuz3ijLwsTJ3fqAmZ2hBv9GzNx3SfqGk+ptc2cleZLsgiUsAqEeK2XfPLw9ad4xYA/7QAJHRTMw/8E7wNWaUiXm1Pc/jg8ZNxUd9oWPcrvYd6rYZsyOIUzMuiiCVORhB3WNwRf3IQi96DUxzCMiNirhb+dhD4cPztoPwd/C3Mu3Mr9K8q5F4DcThGoDuPoLucGXEuzQF3nPFR9zndxOS+XqbfwPnxJ/r6do6vA3YfpLv50OYTEc2HttpG7i7aFIluWpZkiMl2zS/HmrhdrXrZ0EJwC8F/PgTLgGAsbjy73WDwV2fP/g81ZliQmE8AAA==');
  var inputArray = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) {
    inputArray[i] = comments.charCodeAt(i);
  }
  var outputArray = pako.inflate(inputArray);
  window.isCommentInited = true;
  return JSON.parse(new TextDecoder("utf-8").decode(outputArray));
}