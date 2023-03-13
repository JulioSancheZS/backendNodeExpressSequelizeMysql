import {Sequelize} from 'sequelize'


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('almacencrud', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize