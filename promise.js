
// {
//   const loginUser = (email, password) => {
//     setTimeout(() => {
//       console.log('Início ', email)
//       return email
//     }, 1000)
//   }

//   const user = loginUser('psgvaz', '12234')
//   console.log('Fim', user)
// }

// {
//   //Função com callback
//   const loginUser = (email, callback) => {
//     setTimeout(() => {
//       console.log('Início ', email)
//       callback({ email })
//     }, 1000)
//   }

//   loginUser('psgvaz', (email) => console.log(email))
// }

// {
//   //Uso de pronise
//   const loginUser = (email) => {
//     return new Promise((resolve, reject) => {
//       if (!email) reject(new Erro('Email is not empty'))
//       setTimeout(() => {
//         resolve(email)
//         console.log('Início ', email)
//       }, 1000)
//     })
//   }
//   loginUser('psgvaz')
//     .then(() => {
//       console.log(`Fim da Promise`)
//     })
//     .catch((error) => {
//       console.log('Erro', error)
//     })
//   console.log('Fim')
// }

// {
//   const main = async (email) => {
//     await loginUser(email)
//     console.log('Fim')
//   }

//   const loginUser = (email) => {
//     return new Promise((resolve, reject) => {
//       if (!email) reject(new Erro('Email is not empty'))
//       setTimeout(() => {
//         resolve(email)
//         console.log('Início ', email)
//       }, 1000)
//     })
//   }
//   main('psgvaz')
// }

// {
//   //O setTimeout é jogado para a próximo event loop
//   setTimeout(() => {
//     console.log('Console do setTimeout')
//   }, 0)

//   //A promise é jogado para o fim do mesmo event loop
//   const promise = new Promise((resolver, reject) => {
//     resolver('Fim da promise')
//   })

//   promise.then((data) => {
//     console.log(data)
//   })
//   console.log('oi')
// }


// (async () => {
//   setTimeout(function timeout ()  {
//     console.log('Console do setTimeout')
//   }, 0)
//   const loginUser = (email) => {
//     return new Promise((resolve, reject) => {
//       if (!email) reject(new Erro('Email is not empty'))
//       resolve(email)
//     })
//   }
//   await loginUser('psd')
//   console.log('1111')
// })()

const main =() =>{
  setTimeout(function timeout ()  {
    console.log('Console do setTimeout')
  }, 0)
  const promise = new Promise((resolve, reject)=>{
    resolve('promise')
  })

  promise.then((data)=> {
    console.log(data)
  })
  console.log('111')

}

main()



