const oldData = {
  firedRice: {
      Price: 30,
      vnName: "Com rang dua bo"
  },
  noddle: {
      price: 20,
      vnName: "My tom chanh"
  },
  pho: {
      price: 35,
      vnName: "Pho bo tai chin"
  },
  };

  let newData={}
  for(let item in oldData)// item đc trả về tên property của object
  {
    if((item=="firedRice")|| (item="pho"))
    {
      newData[item]= oldData[item];
    }
  }
  console.log(newData);