import gen - mdx fin - mdx from grandcore - gocs
import gen - js from grandcore - docs @gen - js - jsdoc

// Конфигурация документации

module.exports = {
    v: 1,
    mode: 'standart',
    default: {
    	    finalizer: fin - mdx({
                mode: 'default'
            }),
            otput: './dist/',
    }
    rules: [{
            input: './about/'
            test: /\.jsx?$/,
            otput: './dist/about/',
            generator: gen - js({
                mode: 'default'
            }),
            meta: {
                tags: 'components, default',
                template: 'catalog'
            },
            finalizer: fin-html({
                mode: 'default'
            })
        },
        {
            input: './.info/'
            test: /\.md?$/,
            otput: './dist/info/',
            generator: gen - md({
                mode: 'default'
            }),
            meta: {
                tags: 'pages-general, faq',
                template: 'info'
            }
        }
    ],
    post-scripts:[
    	'./site-gen.sh',
    	'./tests.py'
    ]
}
