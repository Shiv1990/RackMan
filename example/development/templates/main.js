module.exports = function(vars) {
	return [
		'<!DOCTYPE HTML>',
		'<html>',
			'<head>',
				'<title>RackMan Example</title>',
			'</head>',
			'<body>',
				'<h1>RackMan Server Demo</h1>',
				'<p>Hosted on <strong>Port ' + vars.port + '</strong></p>',
				'<p>Worker ID ' + vars.worker_id + '</p>',
				'<p>Process ID ' + vars.pid + '</p>',
				'<p>Rendered at ' + new Date().toString() + '</p>',
				'<p>',
					'Take note that when accessing this page directly,',
					'your browser may keep your connection active (Keep-Alive)',
					'which will have the effect of preventing this worker from',
					'closing until the connection times out (default 120 seconds).',
					'<br>',
					'We recommend you run RackMan behind a load balancer like NGNIX',
					'to avoid this problem, as your browser will Keep-Alive to NGINX',
					'instead of to the specific worker process.',
				'</p>',
			'</body>',
		'</html>',
		''].join('\n');
};