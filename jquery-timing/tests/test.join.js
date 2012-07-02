suite = {
		
		"joining empty default queue instantly": null,
		
		".join(callback)" : function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>');
			var TIC = $x.join(callback);
			test.assertEquals("instant .join() should fire", 1, x);
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
		
		"$('.multiple').join() instantly": function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>').add('<span>').add('<p>');
			test.assertEquals("not enough objects", 3, $x.size());
			var TIC = $x.join(callback);
			test.assertEquals("join should fire once for multiple objects", 1, x);
			test.assertEquals("instant .join() should return original jQuery object", $x, TIC);
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
		
		"$('.multiple').join() deferred": function($, test) {
			var x = 0;
			var callback = function(){ x++; test.check(); };
			var $x = $('<div>').add('<span>').add('<p>');
			var timeout = 100;
			$x.eq(0).delay(timeout);
			$x.eq(2).delay(timeout*2);
			var TIC = $x.join(callback);
			test.assertEquals("join should wait until all elements joined", 0, x);
			window.setTimeout(function(){
				test.assertEquals("join should still wait until all elements joined", 0, x);
				window.setTimeout(function(){
					test.assertEquals("join should have fired once", 1, x);
					window.setTimeout(function(){
						test.assertEquals("join should not fire anymore", 1, x);
						test.done();
					}, timeout);
				}, timeout);
			}, timeout*1.5);
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
		
};