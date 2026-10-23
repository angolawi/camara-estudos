import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// Plugin para servir os arquivos PDF da pasta mãe via rota /api/pdf?file=...
const pdfServerPlugin = () => ({
  name: 'pdf-server-plugin',
  configureServer(server: any) {
    server.middlewares.use('/api/pdf', (req: any, res: any) => {
      try {
        const url = new URL(req.url, 'http://localhost')
        const filePath = url.searchParams.get('file')
        if (!filePath) {
          res.statusCode = 400
          res.end('Caminho do arquivo não fornecido')
          return
        }
        
        // Caminho seguro a partir da raiz dos cursos
        const parentDir = path.resolve(process.cwd(), '..')
        // Decodifica URI caso venha duplamente codificada
        const decodedPath = decodeURIComponent(filePath)
        const fullPath = path.resolve(parentDir, decodedPath)
        
        // Verifica se o caminho está dentro do diretório pai
        if (!fullPath.startsWith(parentDir) || !fs.existsSync(fullPath)) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(`Arquivo PDF não encontrado: ${decodedPath}`)
          return
        }

        const stat = fs.statSync(fullPath)
        res.writeHead(200, {
          'Content-Type': 'application/pdf',
          'Content-Length': stat.size,
          'Content-Disposition': `inline; filename="${encodeURIComponent(path.basename(fullPath))}"`,
        })

        const stream = fs.createReadStream(fullPath)
        stream.pipe(res)
      } catch (err: any) {
        res.statusCode = 500
        res.end(`Erro no servidor: ${err.message}`)
      }
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  base: './', // Permite rodar no GitHub Pages em qualquer subpasta (ex: /camara-estudos/)
  plugins: [
    react(),
    tailwindcss(),
    pdfServerPlugin(),
  ],
  server: {
    host: true, // Libera na rede Wi-Fi local (0.0.0.0)
    port: 5173,
  }
})
