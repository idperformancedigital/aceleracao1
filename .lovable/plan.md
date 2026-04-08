

# Adicionar coluna "Origem" (URL) aos leads

## O que será feito
1. **Criar migração** para adicionar a coluna `origem` (text, nullable) na tabela `leads`
2. **Atualizar o formulário** (`ContactFormSection.tsx`) para gravar `window.location.href` automaticamente ao inserir um lead
3. **Atualizar o painel admin** (`Admin.tsx`) para exibir a nova coluna "Origem" na tabela e no export CSV

## Detalhes técnicos

### Migração SQL
```sql
ALTER TABLE public.leads ADD COLUMN origem text;
```

### ContactFormSection.tsx
- No `insert`, adicionar `origem: window.location.href`

### Admin.tsx
- Adicionar `origem` à interface `Lead`
- Adicionar coluna "Origem" na tabela (TableHead + TableCell)
- Incluir "Origem" no export CSV

