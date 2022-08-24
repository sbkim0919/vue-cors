const { defineConfig } = require('@vue/cli-service')

module.exports={
  devServer: {
    proxy: { // proxyTable 설정
        '/api': { 
            target: 'https://renewal-api.eveinft.com:8095', 
            changeOrigin: true 
        }
    }
  }
}

// module.exports={
//   devServer: {
//     proxy: { // proxyTable 설정
//         '/api2': { 
//             target: 'https://openapi.naver.com/',
//             changeOrigin: true 
//           }
//         }
//       }
//     }