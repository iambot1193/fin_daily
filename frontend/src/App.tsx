import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiMessage, setApiMessage] = useState<string>('Conectando ao backend...')

  useEffect(() => {
    // Chama a rota raiz do seu FastAPI
    fetch('http://127.0.0.1:8000/')
      .then(response => {
        if (!response.ok) throw new Error('Erro na resposta da API')
        return response.json()
      })
      .then(data => setApiMessage(JSON.stringify(data))) // Mostra o JSON que o FastAPI retornar
      .catch(error => setApiMessage('Erro: ' + error.message))
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Fin Daily 🚀</h1>
      <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '8px', display: 'inline-block' }}>
        <h2>Status da Integração:</h2>
        <p style={{ color: apiMessage.includes('Erro') ? 'red' : 'green' }}>
          {apiMessage}
        </p>
      </div>
    </div>
  )
}

export default App