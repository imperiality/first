module.exports = {
	// css: {
	//   loaderOptions: {
	//     postcss: {
	//       plugins: [
	//         function (css, result) {
	//             var oldCssText = css.toString();
	//             var px2remIns = new Px2rem(options);
	//             var newCssText = px2remIns.generateRem(oldCssText);
	//             var newCssObj = postcss.parse(newCssText);
	//             result.root = newCssObj;
	//           },
	//       ],
	//     },
	//   },
	// },
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-px2rem')({
						remUnit: 100,
					}),
				],
			},
		},
	},
	devServer: {
		open: true,
		proxy: {
			'/node': {
				target: 'http://localhost:4000/node/',
				changeOrigin: true,
				pathRewrite: { '^/node': '' },
			},
		},
	},

	runtimeCompiler: true,
};
	// '/api': {
			// 	target: 'https://m.you.163.com',
			// 	// secure: false,
			// 	changeOrigin: true,
			// 	ws: true,
			// 	pathRewrite: {
			// 		'^/api': '',
			// 	},
			// },