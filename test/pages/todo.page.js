module.exports = Page.create({
    url: { value: '/' },

    title: {
        get: function () {
            return $('h1');
        }
    },

    todoBox: {
        get: function () {
            return $('#new-task');
        },

        set: function (value) {
            this.todoBox.sendKeys(value);
        }
    }

    btnAdd: {
        get: function () {
            return element.cssContainingText('button', 'Add');
        }
    },

    eleIncompleted: {
        get: function () {
            return $('#incomplete-tasks');
        }
    },

    todoItem: {
        value: function (index) {
            var container = this.eleIncompleted;
            var item = container.get(index);
            return {
                complete: function () {
                    item.$('input[type="checkbox"]').click();
                },

                edit: function () {
                    item.cssContainingText('Edit').click();
                },

                delete: function () {
                    item.cssContainingText('Delete').click();
                },

                save: function () {
                    item.cssContainingText('Save').click();
                },

                moveUp: function () {
                    item.$('.up').click();
                },

                moveDown: function () {
                     item.$('.down').click();
                }
            }
        }
    },

    eleCompleted: {
        get: function () {
            return $('#completed-tasks');
        }
    },

    completedItem: {
        value: function (index) {
            var container = this.eleCompleted;
            var item = container.get(index);
            return {
                complete: function () {
                    item.$('input[type="checkbox"]').click();
                },

                edit: function () {
                    item.cssContainingText('Edit').click();
                },

                delete: function () {
                    item.cssContainingText('Delete').click();
                },

                save: function () {
                    item.cssContainingText('Save').click();
                },

                moveUp: function () {
                    item.$('.up').click();
                },

                moveDown: function () {
                     item.$('.down').click();
                }
            }
        }
    },

});
