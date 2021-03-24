const app = Vue.createApp({
  data: () => ({
    books: books,
    isvisible: true,
    store: {
      items: [],
    },
  }),
  methods: {
    currencyFormat(val) {
      let formatter = Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
        minimumFractionDigits: 0,
      });
      return formatter.format(val);
    },
    addtolist(book) {
      if (!this.checkexistence(book)) {
        this.store.items.push({
          book: book,
          quantity: 1,
        });
      } else {
        let targetitem;
        for (let i = 0; i < this.store.items.length; i++) {
          if (this.store.items[i].book.isbn == book.isbn) {
            targetitem = this.store.items[i];
            break;
          }
        }
        targetitem.quantity++;
      }
    },
    checkexistence(book) {
      for (let i = 0; i < this.store.items.length; i++) {
        if (this.store.items[i].book.isbn == book.isbn) {
          return true;
        }
      }
    },
    increase(item) {
      item.quantity++;
    },
    decrease(item) {
      item.quantity--;
      if (item.quantity == 0) {
        let ind;
        for (let i = 0; i < this.store.items.length; i++) {
          if (this.store.items[i].book.isbn == item.book.isbn) {
            ind = i;
            break;
          }
        }
        this.store.items.splice(ind, 1);
      }
    },
    gettotalprice() {
      let result = 0;
      for (let i = 0; i < this.store.items.length; i++) {
        result += this.store.items[i].book.price * this.store.items[i].quantity;
      }
      return result;
    },
  },
});

app.mount("#box-container");
