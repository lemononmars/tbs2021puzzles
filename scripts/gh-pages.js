const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/tbs2021puzzles',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/lemononmars/tbs2021puzzles.git',
        user: {
            name: 'lemononmars',
            email: 'sakulbuth@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)