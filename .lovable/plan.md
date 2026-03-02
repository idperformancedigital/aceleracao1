
# Corrigir erro de build do Meta Pixel

## Problema
O Vite nao permite tags `<img>` dentro de `<noscript>` no `<head>` do HTML. Isso causa falha no build.

## Solucao
Mover a tag `<noscript>` do Meta Pixel do `<head>` para o `<body>`, logo antes do `<div id="root">`. O script principal do Pixel permanece no `<head>` sem alteracoes -- apenas o fallback `<noscript>` muda de posicao.

Isso e a pratica recomendada pela propria Meta e nao afeta o funcionamento do Pixel.

## Detalhes tecnicos
- **Arquivo**: `index.html`
- Remover as linhas 38-40 (noscript) do `<head>`
- Inserir as mesmas linhas no inicio do `<body>`, antes de `<div id="root">`
- O script JS do Pixel, o evento PageView e o evento Pageviewaceleracao continuam funcionando normalmente
- O evento Lead no formulario (ContactFormSection.tsx) nao e afetado
