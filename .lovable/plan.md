
Diagnóstico
- A coluna `origem` já existe no banco.
- O admin já está preparado para mostrar/exportar esse campo.
- Os leads mais recentes continuam chegando com `origem = null`, então o problema está na gravação do dado, não na coluna nem na tela.
- Isso indica que o valor da URL não está chegando ao banco em todos os envios.

Plano
1. Reforçar a captura no formulário
- Em `src/components/ContactFormSection.tsx`, capturar a URL no momento do submit de forma explícita e estável (`window.location.origin + pathname + search`), evitando depender de `href` com hash como `#form`.
- Enviar esse valor no insert sem alterar o fluxo atual do formulário.

2. Garantir preenchimento automático no backend
- Criar uma migração com uma função + trigger `BEFORE INSERT` na tabela `leads`.
- Regra: se `origem` vier nula ou vazia, o banco preenche automaticamente usando os headers da requisição (`referer`, com fallback para `origin`).
- Isso resolve o problema mesmo se algum envio vier de uma LP/integração que não mande `origem` corretamente.

3. Ajustar a visualização só se necessário
- O admin já tem a coluna.
- Se preciso, apenas melhorar a leitura da URL na tabela (ex.: `title` no hover ou menos truncamento), sem mudar layout ou UX.

4. Validar com um novo lead
- Fazer um novo envio de teste.
- Confirmar que a nova linha aparece com `origem` preenchida no admin e no banco.

Detalhes técnicos
- Arquivos: `src/components/ContactFormSection.tsx`, nova migração em `supabase/migrations/...sql`, e opcionalmente `src/pages/Admin.tsx`.
- Não é necessário criar outra coluna.
- Leads antigos que já foram salvos com `origem = null` não podem ser recuperados automaticamente; a correção vale para novos envios.
