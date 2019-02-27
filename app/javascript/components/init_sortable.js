import Sortable from 'sortablejs/Sortable.js';

const initSortable = () => {
  const list = document.getElementById('items');
  const sortable = Sortable.create(list, {
    animation: 150,
    ghostClass: 'lightgray-background-class',
    onEnd: function (evt) {
      const listItems = list.querySelectorAll('li');
      listItems.forEach((item) => {
        var position = Array.prototype.indexOf.call(listItems, item);
        item.dataset.position = position + 1;
      })
    },
  });
}

export { initSortable };
