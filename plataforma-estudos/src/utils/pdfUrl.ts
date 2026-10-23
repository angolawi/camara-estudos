/**
 * Gerenciador de URLs para arquivos PDF.
 * Suporta visualização direta no GitHub Pages e fallback local.
 */

export function resolverUrlPdf(caminhoRelativo: string): string {
  // Se estiver em ambiente local rodando dev server
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return `/api/pdf?file=${encodeURIComponent(caminhoRelativo)}`;
  }
  // No GitHub Pages (produção), busca direto em ./materiais/...
  return `./materiais/${caminhoRelativo}`;
}

export function abrirPdfUniversal(caminhoRelativo: string): void {
  const url = resolverUrlPdf(caminhoRelativo);
  window.open(url, '_blank');
}
