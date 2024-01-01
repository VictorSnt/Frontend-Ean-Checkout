export interface Orcamento {
    idorcamento: string;
    cdorcamento: string;
    dtemissao: Date;
    idpessoa: string;
    vltotalbruto: number;
    vltotalliquido: number;
    vldesconto: number;
    vlacrescimo: number;
    vlsinal: number;
    vlfrete: number;
    ocorrenciasvendedor: string;
    status: string;
    obs: string;
    dtvalidade: Date;
    tpfrete: number;
    idtransportador: string;
    cd_atendimento: string;
    datahorafinalreserva: Date;
    dtentrega: Date;
    iddocumento: string;
    stenvioemail: boolean;
    cdterminalworc: string;
    nmmotorista: string;
    nmpessoa: string;
    nrordemcompra: string;
    nrcontroleversao: number;
    nrccf: string;
    nrcoo: string;
    nmusuario: string;
    statusimpressao: boolean;
    vlmercadoria: number;
    origem: number;
    cdempresa: string;
    origemimportacao: string;
    aldesconto: number;
    alacrescimo: number;
    vlpromocao: number;
    hremissao: string; 
    dthrimportacao: Date;
    idendereco: string;
    cdexterno: string;
    stdocumentocancelado: string;
}