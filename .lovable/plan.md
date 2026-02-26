
# Salvar Leads + Painel de Visualizacao

Para armazenar os leads e criar um painel onde voce pode visualiza-los, precisamos conectar o projeto a um banco de dados. Vou usar o **Lovable Cloud** (a opcao mais simples, sem precisar criar conta em outro servico).

## O que sera feito

### 1. Ativar o Lovable Cloud
- Configurar o banco de dados integrado do Lovable Cloud no projeto

### 2. Criar tabela de leads
- Tabela `leads` com colunas: nome, whatsapp, site, instagram, data de envio
- Politicas de seguranca para proteger os dados

### 3. Atualizar o formulario de contato
- Ao enviar o formulario, os dados serao salvos no banco de dados **e** continuarao abrindo o WhatsApp normalmente
- Mensagem de confirmacao ao usuario apos salvar

### 4. Criar painel administrativo
- Nova pagina `/admin` com uma tabela listando todos os leads
- Exibira: nome, whatsapp, site, instagram e data de cadastro
- Opcao de exportar os dados
- Acesso protegido por autenticacao (login/senha) para que somente voce possa visualizar os leads

### 5. Autenticacao basica para o painel
- Tela de login simples para acessar a area administrativa
- Somente usuarios autenticados podem ver os leads

## Resultado final
- Os leads continuam chegando no seu WhatsApp como antes
- Alem disso, ficam salvos em um banco de dados
- Voce acessa `/admin`, faz login, e ve todos os leads organizados em uma tabela
