/**
 * Gerenciador de URLs para arquivos PDF.
 * Integração com Google Drive e servidor local Vite.
 */

// Link base oficial da pasta dos cursos no Google Drive fornecido pelo usuário
export const GOOGLE_DRIVE_FOLDER_ID = '1yYls7afF72poPVOeqViSSBZudM-62O3s';
export const GOOGLE_DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${GOOGLE_DRIVE_FOLDER_ID}?usp=sharing`;

const STORAGE_PDF_MODE_KEY = 'camara_estudos_pdf_mode_v1';
const STORAGE_DRIVE_CUSTOM_URL_KEY = 'camara_estudos_drive_url_v1';

export type ModoOrigemPdf = 'local' | 'gdrive';

export function obterModoOrigemPdf(): ModoOrigemPdf {
  try {
    const salvo = localStorage.getItem(STORAGE_PDF_MODE_KEY);
    if (salvo === 'local' || salvo === 'gdrive') return salvo;
  } catch (e) {
    console.error('Erro ao ler modo PDF:', e);
  }
  
  // Se estiver rodando localmente (localhost), usa modo local por padrão.
  // Se estiver no GitHub Pages ou outro domínio web, usa o Google Drive por padrão.
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'local';
    }
  }
  return 'gdrive';
}

export function salvarModoOrigemPdf(modo: ModoOrigemPdf): void {
  try {
    localStorage.setItem(STORAGE_PDF_MODE_KEY, modo);
  } catch (e) {
    console.error('Erro ao salvar modo PDF:', e);
  }
}

export function obterUrlGoogleDriveConfigurada(): string {
  try {
    const salva = localStorage.getItem(STORAGE_DRIVE_CUSTOM_URL_KEY);
    if (salva) return salva;
  } catch (e) {
    console.error('Erro ao ler custom drive url:', e);
  }
  return GOOGLE_DRIVE_FOLDER_URL;
}

export function salvarUrlGoogleDriveConfigurada(url: string): void {
  try {
    localStorage.setItem(STORAGE_DRIVE_CUSTOM_URL_KEY, url);
  } catch (e) {
    console.error('Erro ao salvar custom drive url:', e);
  }
}

/**
 * Resolve a URL final do PDF:
 * - No modo 'local': abre via servidor local Vite /api/pdf?file=...
 * - No modo 'gdrive': abre a pesquisa direta pelo nome do arquivo dentro da pasta do Google Drive ou o Drive compartilhado
 */
export function resolverUrlPdf(caminhoRelativo: string): string {
  const modo = obterModoOrigemPdf();
  
  if (modo === 'local') {
    return `/api/pdf?file=${encodeURIComponent(caminhoRelativo)}`;
  }

  // Modo Google Drive:
  // Extrai o nome do arquivo limpo (ex: "Aula_00_Livro_Eletronico_versão_simplificada.pdf")
  const nomeArquivo = caminhoRelativo.split('/').pop() || caminhoRelativo;
  
  // Abre o Google Drive buscando diretamente pelo título do arquivo dentro do drive compartilhado
  // Isso localiza o arquivo imediatamente para visualização em nova aba
  const pastaId = GOOGLE_DRIVE_FOLDER_ID;
  const termoBusca = encodeURIComponent(`'${pastaId}' in parents and name contains '${nomeArquivo}'`);
  
  // Fallback direto: Busca por título ou navega para a pasta raiz compartilhada
  return `https://drive.google.com/drive/folders/${pastaId}?usp=sharing&search=${encodeURIComponent(nomeArquivo)}`;
}

export function abrirPdfUniversal(caminhoRelativo: string): void {
  const modo = obterModoOrigemPdf();

  if (modo === 'local') {
    const url = `/api/pdf?file=${encodeURIComponent(caminhoRelativo)}`;
    window.open(url, '_blank');
  } else {
    // No modo Google Drive, abre o visualizador de busca do arquivo no drive
    const nomeArquivo = caminhoRelativo.split('/').pop() || caminhoRelativo;
    // URL amigável do Google Drive que direciona direto para a pesquisa do arquivo
    const driveSearchUrl = `https://drive.google.com/drive/search?q=${encodeURIComponent(`"${nomeArquivo}"`)}`;
    window.open(driveSearchUrl, '_blank');
  }
}
