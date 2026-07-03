Modal for confirmations and quick views. Scrim closes it; card never blurs.

```jsx
<Dialog open title="Retirer du panier ?" onClose={close}
  actions={<><Button variant="ghost">Annuler</Button><Button>Retirer</Button></>}>
  L'oreiller Câlin quittera votre panier.
</Dialog>
```
