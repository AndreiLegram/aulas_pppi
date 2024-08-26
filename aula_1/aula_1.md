# CSS

Mais específico, mais importante

### Especificidade:

- CSS inline (na tag). Ex: `<div style="color:red"></div>`
- CSS interno (mesma doc). Ex: `<style>div{color:red}</style>`
- CSS externo (link). Ex: `<link rel="stylesheet" href="style.css">`

### Prioridade:
- 1º inline (na tag) + !important
- 2º seletor interno (mesma doc) + !important
- 3º seletor externo (link) + !important
- 4º inline
- 5º seletor interno
- 6º seletor externo
