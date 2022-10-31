// Backbone Model
var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: '' 
	}
});

// Backbone Collection
var Blogs = Backbone.Collection.extend({

});

//inicijalizacija dva bloga
/*
var blog1 = new Blog({
	author: 'Michael',
	title: 'Michael\'s Blog',
	url: 'http://michaelsblog.com'
});

var blog2 = new Blog({
	author: 'John',
	title: 'John\'s Blog',
	url: 'http://johnsblog.com'
});
*/
//inicijalizacija kolekcije

var blogs = new Blogs();


var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function(){
		this.template = _.template($('.blogs-list-template').html());
	},
	events: {
		'click .edit-blog': 'edit',
		//kad se klikne dugme sa klasom edit-blog pokrece se funkcija edit()
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'
	},
	edit: function(){
		this.$('.edit-blog').hide();
		this.$('.delete-blog').hide();
		this.$('.update-blog').show();
		this.$('.cancel').show();

		var author = this.$('.author').html();
		var title = this.$('.title').html();
		var url = this.$('.url').html();

		this.$('.author').html('<input type = "text" class="form-control author-update" value ="' + author + '">');
		this.$('.title').html('<input type = "text" class="form-control title-update" value = "' +title +'">');
		this.$('.url').html('<input type = "text" class="form-control url-update" value = "' +url +'">');


	},
	update: function(){
		this.model.set('author', $('.author-update').val());
		this.model.set('title', $('.title-update').val());
		this.model.set('url', $('.url-update').val());

	},

	cancel: function(){
		blogsView.render()
	},
	delete: function(){
		this.model.destroy();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
		//$el -> tr
	}

});


//Backbone View za sve blogove


var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function(){
		var self = this;
		this.model.on('add',this.render,this); 
		//svaki put kad se element doda u kolekciju lupa se render
		this.model.on('change', function(){
			setTimeout(function(){
				self.render();
			}, 30); //30 milisekundi
		}, this);
		this.model.on('remove',this.render, this);
	},
	render: function(){
		this.$el.html('');
		//el je ovde blogs-list
		//ispraznimo prvo, pa onda punimo
		var self = this;
		_.each(this.model.toArray(), function(blog){  
			self.$el.append((new BlogView({model: blog})).render().$el) //za svaki element u kolekciji se ubacuje red
		});
		return this;

	}
}); 

var blogsView = new BlogsView();

$(document).ready(function(){
	$('.add-blog').on('click', function(){
		var blog = new Blog({
			author: $('.author-input').val(),
			title: $('.title-input').val(),
			url: $('.url-input').val()
		});
		$('.author-input').val('');
		$('.title-input').val('');
		$('.url-input').val('');
		console.log(blog.toJSON);
		blogs.add(blog);
	})

});