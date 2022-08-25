const { defineConfig } = require('@vue/cli-service')

module.exports={
  devServer: {
    proxy: { // proxyTable 설정
        '/users': { 
            target: 'https://localhost:8095/', 
            changeOrigin: true 
        }
    }
  }
}

// module.exports={
//   devServer: {
//     proxy: { // proxyTable 설정
//         '/api': { 
//             target: 'https://openapi.naver.com/',
//             changeOrigin: true 
//           }
//         }
//       }
//     }