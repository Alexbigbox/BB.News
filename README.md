Site de Conteúdo / Contratando a assinatura você poderá consumir um conteúdo de alta qualidade por um preço acessível.

Aplicação desenvolvida usando Next.Js com o conceito de JAMstack
    - Autenticação Github.com
    - CMS Prismic
    - Gateway de Pagamento Stripe 
    - Banco Servless FaunaDB

Usando Server Side Render (SSR), Static Site Generation (SSG) 

Usando Webhooks para o stripe

Para ouvir os webhooks instale o CLI do stripe e digite no cmd o seguinte comando:
stripe listen --forward-to localhost:3000/api/webhooks