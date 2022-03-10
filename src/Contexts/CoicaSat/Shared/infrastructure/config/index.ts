import convict from 'convict';

const attendanceConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/coica-sat-backend-dev'
    }
  }
});

attendanceConfig.loadFile([__dirname + '/default.json', __dirname + '/' + attendanceConfig.get('env') + '.json']);

export default attendanceConfig;
