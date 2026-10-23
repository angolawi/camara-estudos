#!/usr/bin/env bash

# Script para iniciar a Plataforma de Estudos da Câmara dos Deputados
# Permite acesso pelo navegador local e por outros aparelhos (celular/tablet) na mesma rede Wi-Fi.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR/plataforma-estudos" || exit 1

echo "=========================================================="
echo "  🏛️  INICIANDO PLATAFORMA DE ESTUDOS CÂMARA DOS DEPUTADOS"
echo "  Cargo: Analista Legislativo - Registro e Redação (Cargo 11)"
echo "=========================================================="
echo ""

# Pega o IP local para facilitar o acesso de outros dispositivos
LOCAL_IP=$(hostname -I 2>/dev/null | awk '{print $1}')

echo "➡️ Acesso no computador:  http://localhost:5173"
if [ -n "$LOCAL_IP" ]; then
  echo "📱 Acesso no tablet/celular (mesmo Wi-Fi): http://$LOCAL_IP:5173"
fi
echo ""
echo "Pressione Ctrl+C para encerrar."
echo "=========================================================="
echo ""

npm run dev -- --host 0.0.0.0
