# Robô de Lançamento Binance

Este é um robô de única compra e única venda desenvolvido para ser utilizado nos lançamentos da Binance. Ele foi projetado para aproveitar oportunidades rápidas de lucro em situações de extrema volatilidade, onde o valor de uma moeda pode aumentar em até 17.000% em poucos minutos.

## Atenção: Volatilidade e Risco

É importante estar ciente da natureza altamente volátil das criptomoedas e dos riscos associados ao investimento. Este robô foi projetado para operar em cenários de alta volatilidade, e embora possa oferecer oportunidades de lucro, também há um alto risco de perda de capital. Recomendamos cautela e um entendimento sólido do mercado antes de usar este robô em ambiente de produção.

## Funcionalidades

- **Única Compra e Única Venda**: O robô executa uma única compra e uma única venda com base nas condições de mercado.
- **Compra Rápida**: Devido à extrema volatilidade, é necessário agir rapidamente para garantir algum lucro.

## Pré-requisitos

Antes de usar este robô, é necessário configurar algumas variáveis de ambiente e ter uma conta na Binance com as devidas permissões de API.

### Variáveis de Ambiente

As seguintes variáveis de ambiente devem ser configuradas no arquivo `.env`:

- `SYMBOL`: A sigla da moeda que será negociada.
- `API_URL`: O URL da API da Binance (recomendado: `https://api.binance.com/api` para ambiente de produção ou `https://testnet.binance.vision/api` para ambiente de teste).
- `API_KEY`: Sua chave de API da Binance.
- `SECRET_KEY`: Sua chave secreta de API da Binance.

## Instalação e Uso

1. Clone este repositório para sua máquina local.
2. Instale as dependências utilizando `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute o robô utilizando `node nome_do_arquivo.js`.

## Exemplo de Configuração

```plaintext
SYMBOL=BTCUSDT # A SIGLA DA MOEDA DE LANÇAMENTO
BUY_QTY=50
PROFIT=55.0
API_URL=https://testnet.binance.vision/api

API_KEY=(SUA_API_KEY)
SECRET_KEY=(SUA_SECRET_KEY)
```

Lembre-se de substituir `(SUA_API_KEY)` e `(SUA_SECRET_KEY)` pelas suas chaves de API da Binance.

## Avisos Legais

Este projeto é fornecido "como está", sem garantia de qualquer tipo, expressa ou implícita. O autor não se responsabiliza por quaisquer danos resultantes do uso deste software.

---

Você pode ajustar e expandir este README conforme necessário para fornecer mais informações ou detalhes específicos sobre o funcionamento do seu robô de lançamento.
