async function* streamAsyncIterator(stream) {
  debugger
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
    
        if (done) {
          return;
        }
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
  // Obtém dados do URL e calcula o tamanho da resposta usando o generator assíncrono
  async function getResponseSize(url) {
    const response = await fetch(url);
    // Guardará o tamanho do response em bytes.
    let responseSize = 0;
    // O for-wait-loop irá iterar de forma assíncrona sobre cada parte do response.
    for await (const chunk of streamAsyncIterator(response.body)) {

      
      // Incrementa o valor do responseSize
      responseSize += chunk.length;
    }
  
    console.log(`Response Size: ${responseSize} bytes`);
    // output esperado:"Response Size: 1071472"
    return responseSize;
  }

  getResponseSize("https://jsonplaceholder.typicode.com/photos");