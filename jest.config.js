
module.exports = {
    
    moduleNameMapper: {
        '\\.(css|less|mp4)$': 'identity-obj-proxy', 
    },
    transformIgnorePatterns: ['node_modules/(?!swiper)'],
    transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',  
  },
  "testEnvironment": "jest-environment-jsdom",   
} 