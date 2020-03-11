const faker = require('faker');

const generateMockData = () => {
  startTime = faker.date.recent(2);
  const nextTimeStamp = new Date(startTime);
  const mockdata = [
    {
      key: 'write',
      points: [],
      color: '#FFA800'
    },
    {
      key: 'read',
      points: [],
      color: '#27C595'
    }
  ];

  for (let index = 0; index < 200; index++) {
    const write = {
      value: faker.random.number({ min: 40, max: 700 }),
      timeStamp: new Date(nextTimeStamp)
    };
    const read = {
      value: faker.random.number(600),
      timeStamp: new Date(nextTimeStamp)
    };
    mockdata[0].points.push(write);
    mockdata[1].points.push(read);
    nextTimeStamp.setSeconds(nextTimeStamp.getSeconds() + 60);
  }

  return JSON.stringify(mockdata);
};

console.log(generateMockData());
