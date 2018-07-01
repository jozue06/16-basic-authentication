module.exports = function (wallaby) {

  

  return{
      
    files: [
      'src/**/*.js',
      '!__test__/**/*.test.js',
      'index.js',
      'scripts/*.helper.js',
      'data/*.json',
      '__mocks__/**/*.js',
    ],
   
    tests: [
      '__test__/**/*.test.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        'presets': [
          'env',
          'react',
          'stage-0',
        ],
        'plugins': [
          'transform-class-properties',
          'transform-decorators',
          'transform-react-constant-elements',
          'transform-react-inline-elements',
        ],
      }),
    },
      
    env: {
      type: 'node',
    },
      
    testFramework: 'jest',
  
  };
  
    
};
  
  