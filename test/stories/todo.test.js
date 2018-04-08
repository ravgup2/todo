var todoPage = require('../../pages/todo.page');

describe('Todo APP', function() {
    before(function () {
        todoPage.go();
    });

    it('should have page title', function () {
        expect(todoPage.title.getText()).to.be.equal('TODO APP');
    });

    describe('Add New Item Item', function () {
    	it('should have todo box', function () {
	        expect(todoPage.todoBox.present()).to.be.true;
	    });

	    it('should add new item', function () {
	    	todoPage.todoBox = 'New Item';
	    	todoPage.btnAdd.click();
	        expect(todoPage.eleIncompleted.$$('li').count()).to.be.equal(3);
	    });
    });

    describe('Todo Item', function () {
    	before(function () {
    		browser.refresh();
    	});

    	it('should have initial todo list', function () {
	        expect(todoPage.eleIncompleted.$$('li').count()).to.be.equal(2);
	    });
    });

    describe('Completed Item', function () {
    	before(function () {
    		browser.refresh();
    	});

    	it('should have initial completed list', function () {
	        expect(todoPage.eleIncompleted.$$('li').count()).to.be.equal(1);
	    });
    })
});