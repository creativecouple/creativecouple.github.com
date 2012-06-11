suite = {
		
		"joining empty default queue instantly": null,
		
		".join(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			test.assertEquals("instant .join() should fire", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join().then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then()", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},

		".join(callback) + .stop()" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			test.assertEquals("instant .join() should fire", 1, x);
			$x.stop();
			test.assertEquals("instant .join() should not fire anymore after .stop()", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join(callback) + .stop(true)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			test.assertEquals("instant .join() should fire", 1, x);
			$x.stop(true);
			test.assertEquals("instant .join() should not fire anymore after .stop(true)", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join().then(callback) + .stop()" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then()", 1, x);
			$x.stop();
			test.assertEquals("instant .join() should not fire anymore after .stop()", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join().then(callback) + .stop(true)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then()", 1, x);
			$x.stop(true);
			test.assertEquals("instant .join() should not fire anymore after .stop(true)", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},

		".join() + .stop() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			$x.stop();
			test.assertEquals("TIC must not fire after .stop() before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then(), because .stop() was too late", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join() + .stop(true) + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			$x.stop(true);
			test.assertEquals("TIC must not fire after .stop(true) before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then(), because .stop(true) was too late", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join() + .unwait() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			$x.unwait();
			test.assertEquals("TIC must not fire after .unwait() before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then(), because .unwait() should be ignored", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		".join() + .unrepeat() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			test.assertEquals("TIC must not fire before .then()", 0, x);
			$x.unrepeat();
			test.assertEquals("TIC must not fire after .unwait() before .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("instant .join() should fire after .then(), because .unwait() should be ignored", 1, x);
			$x.dequeue();
			test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join() should not have fired anymore", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
				test.done();
			}, 100);
		},
		
		"join multiple elements": function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $(['<div>','<span>','<p>']);
			var TIC = $x.join(callback);
			test.assertEquals("join should fire once, even for multiple objects", 1, x);
			var TIC = $x.join(callback);
			test.assertEquals("join again should fire once, even for multiple objects", 2, x);
			test.done();
		},

		"joining empty default queue deferred": null,
		
		".join(callback) …" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			window.setTimeout(function(){
				test.assertEquals("instant .join() should have fired", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then()", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},

		".join(callback) +…+ .stop()" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			window.setTimeout(function(){
				test.assertEquals("instant .join() should fire", 1, x);
				$x.stop();
				test.assertEquals("instant .join() should not fire anymore after .stop()", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(callback) +…+ .stop(true)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			window.setTimeout(function(){
				test.assertEquals("instant .join() should fire", 1, x);
				$x.stop(true);
				test.assertEquals("instant .join() should not fire anymore after .stop(true)", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .then(callback) + .stop()" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then()", 1, x);
				$x.stop();
				test.assertEquals("instant .join() should not fire anymore after .stop()", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .then(callback) + .stop(true)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then()", 1, x);
				$x.stop(true);
				test.assertEquals("instant .join() should not fire anymore after .stop(true)", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .stop() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				$x.stop();
				test.assertEquals("TIC must not fire after .stop() before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then(), because .stop() was too late", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .stop(true) + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				$x.stop(true);
				test.assertEquals("TIC must not fire after .stop(true) before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then(), because .stop(true) was too late", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .unwait() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				$x.unwait();
				test.assertEquals("TIC must not fire after .unwait() before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then(), because .unwait() should be ignored", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join() +…+ .unrepeat() + .then(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join();
			window.setTimeout(function(){
				test.assertEquals("TIC must not fire before .then()", 0, x);
				$x.unrepeat();
				test.assertEquals("TIC must not fire after .unwait() before .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("instant .join() should fire after .then(), because .unwait() should be ignored", 1, x);
				$x.dequeue();
				test.assertEquals("instant .join() should not fire anymore after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() should not have fired anymore", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		"joining empty named queue instantly": null,

		".join(queue,callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue).then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue).then(callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},

		".join(queue) + .dequeue(queue) + .then(callback)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.dequeue(queue);
			test.assertEquals("TIC should wait until .then()", 0, x);
			TIC.then(callback);
			test.assertEquals("TIC should fire after .then() because of .dequeue(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},

		".join(queue,callback) + .stop(queue) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue,callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue);
			test.assertEquals(".join(queue) should fire on .stop(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue,callback) + .stop(queue,true) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue,callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue,true);
			test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
				test.done();
			}, 100);
		},
		
		".join(queue).then(callback) + .stop(queue) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue).then(callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue);
			test.assertEquals(".join(queue) should fire on .stop(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue).then(callback) + .stop(queue,true) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue).then(callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue,true);
			test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
				test.done();
			}, 100);
		},
		
		".join(queue) + .stop(queue) + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue);
			test.assertEquals("TIC must wait until .then()", 0, x);
			TIC.then(callback);
			test.assertEquals(".join(queue) should fire on .stop(queue)", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue) + .stop(queue,true) + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.stop(queue,true);
			test.assertEquals("TIC must wait until .then()", 0, x);
			TIC.then(callback);
			test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
				test.done();
			}, 100);
		},
		
		".join(queue,callback) + .unwait() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unwait(queue);
			test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unwait(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue).then(callback) + .unwait() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue).then(callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unwait(queue);
			test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unwait(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue) + .unwait() + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unwait(queue);
			test.assertEquals("TIC must wait until .then()", 0, x);
			TIC.then(callback);
			test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unwait(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue,callback) + .unrepeat() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unrepeat(queue);
			test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unrepeat(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue).then(callback) + .unrepeat() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue).then(callback);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unrepeat(queue);
			test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unrepeat(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		".join(queue) + .unrepeat() + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
			$x.unrepeat(queue);
			test.assertEquals("TIC must wait until .then()", 0, x);
			TIC.then(callback);
			test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
			$x.dequeue(queue);
			test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
			window.setTimeout(function(){
				test.assertEquals(".join(queue) should not have fired anymore", 1, x);
				$x.unrepeat(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
				test.done();
			}, 100);
		},
		
		"joining empty named queue deferred": null,

		".join(queue,callback) +…+ .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue)
			window.setTimeout(function(){
				TIC.then(callback);
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},

		".join(queue) +…+ .dequeue(queue) + .then(callback)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.dequeue(queue);
				test.assertEquals("TIC should wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals("TIC should fire after .then() because of .dequeue(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},

		".join(queue,callback) +…+ .stop(queue) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue,callback);
				window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) must fire because of .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.stop(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue,callback) +…+ .stop(queue,true) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue,callback);
				window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 0, x);
					$x.stop(queue,true);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .then(callback) + .stop(queue) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue)
			window.setTimeout(function(){
				TIC.then(callback);
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) must fire because of .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.stop(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .then(callback) + .stop(queue,true) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue)
			window.setTimeout(function(){
				TIC.then(callback);
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 0, x);
					$x.stop(queue,true);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .stop(queue) + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) must fire because of .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.stop(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .stop(queue,true) + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.stop(queue,true);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) must not fire on .stop(queue,true)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 0, x);
					$x.stop(queue,true);
					test.assertEquals(".join(queue) should not have fired anymore after .stop(queue,true)", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue,callback) +…+ .unwait() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unwait(queue);
				test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unwait(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .then(callback) + .unwait() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue)
			window.setTimeout(function(){
				TIC.then(callback);
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unwait(queue);
				test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unwait(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .unwait() + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unwait(queue);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) must not fire on .unwait(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unwait(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unwait(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue,callback) +…+ .unrepeat() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue, callback);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unrepeat(queue);
				test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unrepeat(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .then(callback) + .unrepeat() + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				TIC.then(callback);
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unrepeat(queue);
				test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unrepeat(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		".join(queue) +…+ .unrepeat() + .then(callback) + .dequeue(queue)" : function($, test) {
			var x = 0;
			var queue = 'myFX';
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(queue);
			window.setTimeout(function(){
				test.assertEquals("empty named queues should wait until .dequeue()", 0, x);
				$x.unrepeat(queue);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) must not fire on .unrepeat(queue)", 0, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should fire after .dequeue()", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) should not have fired anymore", 1, x);
					$x.unrepeat(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .unrepeat(queue)", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
					test.done();
				}, 100);
			}, 100);
		},
		
		"joining ongoing default queue": null,
		
		".delay(timeout).join(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join().then(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join().then(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},

		".delay(timeout).join(callback) + .stop()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop();
				test.assertEquals(".join() should fire after .stop()", 1, x);
				$x.dequeue();
				test.assertEquals(".join() should not fire again after .dequeue()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have fired again", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join(callback) + .stop(true)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(true);
				test.assertEquals(".join() should not fire after .stop(true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have fired after delay is over, because of .stop(true)", 0, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 0, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join().then(callback) + .stop()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join().then(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop();
				test.assertEquals(".join() should fire after .stop()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have again", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join().then(callback) + .stop(true)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join().then(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(true);
				test.assertEquals(".join() should not fire after .stop(true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have fired after delay is over, because of .stop(true)", 0, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 0, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join() + .stop() + .then(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join();
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop();
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join() should fire after .stop()", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have fired again", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join() + .stop(true) + .then(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join();
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(true);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join() should not fire after .stop(true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must not have fired again", 0, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire again after .dequeue()", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 0, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join(callback) + .unwait()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals(".join() should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join().then(callback) + .unwait()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join().then(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals(".join() should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join() + .unwait() + .then(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join();
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals("TIC has to wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join() should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join(callback) + .unrepeat()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals(".join() should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join().then(callback) + .unrepeat()" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join().then(callback);
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals(".join() should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout).join() + .unrepeat() + .then(callback)" : function($, test) {
			var x = 0;
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout).join();
			test.assertEquals("active queue should wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals("TIC has to wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join() should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join() must have fired after delay is over", 1, x);
					$x.dequeue();
					test.assertEquals(".join() should not fire anymore after .dequeue()", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join() should not have fired anymore", 1, x);
						$x.dequeue();
						test.assertEquals(".join() should not have fired anymore after .dequeue()", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		"joining ongoing named queue": null,
		
		".delay(timeout,queue).join(queue,callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue,callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue).then(callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue).then(callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},

		".delay(timeout,queue).join(queue,callback) + .stop(queue)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue,callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) should fire after .stop(queue)", 1, x);
				$x.dequeue(queue);
				test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have fired again", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue,callback) + .stop(queue,true)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue,callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) should not fire after .stop(queue,true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have fired after delay is over, because of .stop(queue,true)", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 0, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue).then(callback) + .stop(queue)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue).then(callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue);
				test.assertEquals(".join(queue) should fire after .stop(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have again", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue).then(callback) + .stop(queue,true)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue).then(callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue,true);
				test.assertEquals(".join(queue) should not fire after .stop(queue,true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have fired after delay is over, because of .stop(queue,true)", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 0, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue) + .stop(queue) + .then(callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) should fire after .stop(queue)", 1, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have fired again", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue) + .stop(queue,true) + .then(callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.stop(queue,true);
				test.assertEquals("TIC must wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) should not fire after .stop(queue,true)", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must not have fired again", 0, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire again after .dequeue(queue)", 0, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 0, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 0, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue,callback) + .unwait()" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue,callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals(".join(queue) should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue).then(callback) + .unwait()" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue).then(callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals(".join(queue) should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue) + .unwait() + .then(callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unwait();
				test.assertEquals("TIC has to wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) should not fire in case of .unwait()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue,callback) + .unrepeat()" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue,callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals(".join(queue) should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue).then(callback) + .unrepeat()" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue).then(callback);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals(".join(queue) should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
		
		".delay(timeout,queue).join(queue) + .unrepeat() + .then(callback)" : function($, test) {
			var x = 0;
			var queue='myFX';
			var timeout = 100;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.delay(timeout,queue).join(queue);
			test.assertEquals("active queue should wait", 0, x);
			$x.dequeue(queue);
			test.assertEquals("active queue should still wait", 0, x);
			window.setTimeout(function(){
				test.assertEquals("active queue should wait until delay is over", 0, x);
				$x.unrepeat();
				test.assertEquals("TIC has to wait until .then()", 0, x);
				TIC.then(callback);
				test.assertEquals(".join(queue) should not fire in case of .unrepeat()", 0, x);
				window.setTimeout(function(){
					test.assertEquals(".join(queue) must have fired after delay is over", 1, x);
					$x.dequeue(queue);
					test.assertEquals(".join(queue) should not fire anymore after .dequeue(queue)", 1, x);
					window.setTimeout(function(){
						test.assertEquals(".join(queue) should not have fired anymore", 1, x);
						$x.dequeue(queue);
						test.assertEquals(".join(queue) should not have fired anymore after .dequeue(queue)", 1, x);
						test.done();
					}, 100);
				}, timeout);
			}, timeout / 2);
		},
};